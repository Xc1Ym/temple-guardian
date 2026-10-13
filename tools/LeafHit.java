import java.io.*;
import java.nio.file.*;
import java.awt.Shape;
import java.awt.geom.PathIterator;
import java.util.*;
import com.jpexs.decompiler.flash.SWF;
import com.jpexs.decompiler.flash.tags.base.*;
import com.jpexs.decompiler.flash.types.*;
import com.jpexs.decompiler.flash.types.shaperecords.*;
import com.jpexs.decompiler.flash.exporters.commonshape.Matrix;

/** Export original vector outlines, including stroke outlines, for shape hit tests. */
public class LeafHit {
 static int width(LINESTYLEARRAY lines,int index){if(index==0)return -1;if(lines.lineStyles2!=null&&index<=lines.lineStyles2.length)return lines.lineStyles2[index-1].width;if(lines.lineStyles!=null&&index<=lines.lineStyles.length)return lines.lineStyles[index-1].width;return -1;}
 static String raw(ShapeTag tag){
  SHAPEWITHSTYLE shape=tag.getShapes();LINESTYLEARRAY lines=shape.lineStyles;
  StringBuilder out=new StringBuilder("{\"winding\":"+tag.getWindingRule()+",\"raw\":[[");
  int x=0,y=0,f0=0,f1=0,stroke=-1;boolean first=true;
  for(SHAPERECORD record:shape.shapeRecords){
   if(record instanceof StyleChangeRecord s){
    if(s.stateNewStyles){out.append("],[");first=true;lines=s.lineStyles;}
    if(s.stateMoveTo){x=s.moveDeltaX;y=s.moveDeltaY;}
    if(s.stateFillStyle0)f0=s.fillStyle0;if(s.stateFillStyle1)f1=s.fillStyle1;
    if(s.stateLineStyle)stroke=width(lines,s.lineStyle);
   }else if(record instanceof StraightEdgeRecord s){
    int nextX=s.changeX(x),nextY=s.changeY(y);
    if(!first)out.append(',');first=false;
    out.append('[').append(f1>0&&f0==0?1:f0>0&&f1==0?-1:0).append(',').append(stroke).append(',').append(x).append(',').append(y).append(',').append(nextX).append(',').append(nextY).append(']');x=nextX;y=nextY;
   }else if(record instanceof CurvedEdgeRecord c){
    int cx=x+c.controlDeltaX,cy=y+c.controlDeltaY,nextX=cx+c.anchorDeltaX,nextY=cy+c.anchorDeltaY;
    if(!first)out.append(',');first=false;
    out.append('[').append(f1>0&&f0==0?1:f0>0&&f1==0?-1:0).append(',').append(stroke).append(',').append(x).append(',').append(y).append(',').append(cx).append(',').append(cy).append(',').append(nextX).append(',').append(nextY).append(']');x=nextX;y=nextY;
   }
  }
  return out.append("]]}").toString();
 }
 static String path(Shape shape) {
  PathIterator iterator=shape.getPathIterator(null);
  StringBuilder out=new StringBuilder("{\"winding\":"+iterator.getWindingRule()+",\"path\":[");
  double[] values=new double[6];boolean first=true;
  while(!iterator.isDone()){
   int type=iterator.currentSegment(values),length=switch(type){case 0,1->2;case 2->4;case 3->6;default->0;};
   if(!first)out.append(',');first=false;out.append('[').append(type);
   for(int i=0;i<length;i++)out.append(',').append(values[i]/20);
   out.append(']');iterator.next();
  }
  return out.append("]}").toString();
 }
 public static void main(String[] args) throws Exception {
  SWF swf;try(InputStream in=Files.newInputStream(Path.of(args[0]))){swf=new SWF(in,false);}
  Map<Integer,List<Integer>> ratios=new HashMap<>();
  for(String line:Files.readAllLines(Path.of(args[1]))){String[] p=line.split(" ");List<Integer> r=new ArrayList<>();for(int i=1;i<p.length;i++)r.add(Integer.parseInt(p[i]));ratios.put(Integer.parseInt(p[0]),r);}
  StringBuilder out=new StringBuilder("{");boolean first=true;
  for(CharacterTag tag:new TreeMap<>(swf.getCharacters(false)).values()){
   if(tag.getCharacterId()==0||!(tag instanceof ShapeTag||tag instanceof StaticTextTag||tag instanceof MorphShapeTag))continue;
   DrawableTag drawable=(DrawableTag)tag;
   if(!first)out.append(',');first=false;
   out.append('"').append(tag.getCharacterId()).append("\":{");boolean firstRatio=true;
   for(int ratio:ratios.getOrDefault(tag.getCharacterId(),List.of(0))){
    if(!firstRatio)out.append(',');firstRatio=false;
    String geometry;
    if(tag instanceof ShapeTag s)geometry=raw(s);
    else if(tag instanceof MorphShapeTag m)geometry=raw(m.getShapeTagAtRatio(ratio));
    else geometry=path(drawable.getOutline(false,0,0,ratio,new RenderContext(),new Matrix(),true,null,1));
    out.append('"').append(ratio).append("\":").append(geometry);
   }
   out.append('}');
  }
  Files.writeString(Path.of(args[2]),out.append('}').toString());
 }
}
