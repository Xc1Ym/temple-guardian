import java.io.*;
import java.nio.file.*;
import com.jpexs.decompiler.flash.SWF;
import com.jpexs.decompiler.flash.tags.*;
import com.jpexs.decompiler.flash.action.parser.script.ActionScript2Parser;

/** Add audit actions to a copy; original bytecode tags are never replaced. */
public class CompileProbe {
  static DoActionTag action(SWF swf,String code) throws Exception {
    DoActionTag tag=new DoActionTag(swf);
    tag.setActions(new ActionScript2Parser(swf,tag).actionsFromString(code,"UTF-8"));
    return tag;
  }
  public static void main(String[] args) throws Exception {
    SWF swf;
    try(InputStream in=Files.newInputStream(Path.of(args[0]))){swf=new SWF(in,false);}
    int frame=1,first=-1,last=-1,index=0;
    for(Tag tag:swf.getTags()){
      if(tag instanceof ShowFrameTag){if(frame==1)first=index;if(frame==22)last=index;frame++;}
      index++;
    }
    if(first<0||last<0)throw new IllegalStateException("Missing original frames");
    swf.addTag(last,action(swf,Files.readString(Path.of(args[1]))));
    swf.addTag(first,action(swf,"this.onEnterFrame=function(){delete this.onEnterFrame;this.gotoAndStop(22);};"));
    try(OutputStream out=Files.newOutputStream(Path.of(args[2]))){swf.saveTo(out);}
    System.out.println("Added two audit action tags to a development-only copy.");
  }
}
