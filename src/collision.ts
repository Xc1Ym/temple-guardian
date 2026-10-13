export interface HitOutline {winding:number;path?:number[][];raw?:number[][][]}
type P=[number,number];
const edges=new WeakMap<HitOutline,[P,P][]>();
const midpoint=(a:P,b:P):P=>[(a[0]+b[0])/2,(a[1]+b[1])/2];
function distance(p:P,a:P,b:P){const dx=b[0]-a[0],dy=b[1]-a[1],length=dx*dx+dy*dy;if(!length)return Math.hypot(p[0]-a[0],p[1]-a[1]);return Math.abs(dy*p[0]-dx*p[1]+b[0]*a[1]-b[1]*a[0])/Math.sqrt(length);}
function segments(outline:HitOutline){
  const cached=edges.get(outline);if(cached)return cached;
  const out:[P,P][]=[];let current:P=[0,0],start:P=current;
  const curve=(points:P[],level=0)=>{
    const first=points[0],last=points.at(-1)!;
    if(level>=18||points.slice(1,-1).every(p=>distance(p,first,last)<.0001)){out.push([first,last]);return;}
    const left:P[]=[first],right:P[]=[last];let row=points;
    while(row.length>1){row=row.slice(1).map((p,i)=>midpoint(row[i],p));left.push(row[0]);right.unshift(row.at(-1)!);}
    curve(left,level+1);curve(right,level+1);
  };
  for(const command of outline.path||[]){
    const points:P[]=[];for(let i=1;i<command.length;i+=2)points.push([command[i],command[i+1]]);
    if(command[0]===0){current=start=points[0];}
    else if(command[0]===1){out.push([current,points[0]]);current=points[0];}
    else if(command[0]===2||command[0]===3){curve([current,...points]);current=points.at(-1)!;}
    else if(command[0]===4){out.push([current,start]);current=start;}
  }
  edges.set(outline,out);return out;
}
/** Original fill/stroke outlines; curves are subdivided below 1/500 of a twip. */
export function containsOutline(outline:HitOutline,x:number,y:number,minStroke=20){
  if(outline.raw)return containsRaw(outline,x*20,y*20,minStroke);
  let winding=0;
  for(const [[ax,ay],[bx,by]]of segments(outline)){
    const cross=(bx-ax)*(y-ay)-(x-ax)*(by-ay);
    if(Math.abs(cross)<1e-9&&x>=Math.min(ax,bx)&&x<=Math.max(ax,bx)&&y>=Math.min(ay,by)&&y<=Math.max(ay,by))return true;
    if(ay<=y&&by>y&&cross>0)winding++;
    else if(ay>y&&by<=y&&cross<0)winding--;
  }
  return outline.winding===0?Math.abs(winding)%2===1:winding!==0;
}

function quadratic(a:number,b:number,c:number):number[]{
  if(Math.abs(a)<1e-12)return Math.abs(b)<1e-12?[]:[-c/b];
  const discriminant=b*b-4*a*c;if(discriminant<0)return [];
  const root=Math.sqrt(discriminant),q=-.5*(b+(b<0?-root:root));return q===0?[-b/(2*a)]:[q/a,c/q];
}
function cubic(a:number,b:number,c:number,d:number):number[]{
  if(Math.abs(a)<1e-12)return quadratic(b,c,d);
  b/=a;c/=a;d/=a;const p=c-b*b/3,q=2*b*b*b/27-b*c/3+d,discriminant=q*q/4+p*p*p/27,offset=b/3;
  if(discriminant>=0){const root=Math.sqrt(discriminant),u=Math.cbrt(-q/2+root),v=Math.cbrt(-q/2-root);return discriminant===0?[u+v-offset,-(u+v)/2-offset]:[u+v-offset];}
  const radius=2*Math.sqrt(-p/3),angle=Math.acos(Math.max(-1,Math.min(1,3*q/(p*radius))))/3;
  return [0,1,2].map(i=>radius*Math.cos(angle-i*2*Math.PI/3)-offset);
}
function lineWinding(px:number,py:number,x0:number,y0:number,x1:number,y1:number){
  const cross=(x1-x0)*(py-y0)-(y1-y0)*(px-x0);
  return y0<=py&&py<y1&&cross>=0?1:y1<=py&&py<y0&&cross<=0?-1:0;
}
function curveWinding(px:number,py:number,x0:number,y0:number,cx:number,cy:number,x1:number,y1:number){
  const a=y0-2*cy+y1,b=2*(cy-y0),c=y0-py;let winding=0;
  for(const t of new Set(quadratic(a,b,c))){
    const slope=2*a*t+b;
    if(t<0||t>1||Math.abs(slope)<1e-10||(t===0&&slope<0)||(t===1&&slope>0))continue;
    const u=1-t,atX=u*u*x0+2*u*t*cx+t*t*x1;
    if(atX>=px)winding+=slope>0?1:-1;
  }
  return winding;
}
function strokeDistance(px:number,py:number,edge:number[]){
  const [, ,x0,y0,cx,cy,x1,y1]=edge;
  if(edge.length===6){const dx=cx-x0,dy=cy-y0,length=dx*dx+dy*dy,t=length?Math.max(0,Math.min(1,((px-x0)*dx+(py-y0)*dy)/length)):0;return (px-x0-t*dx)**2+(py-y0-t*dy)**2;}
  const ax=cx-x0,ay=cy-y0,bx=x1-2*cx+x0,by=y1-2*cy+y0,mx=x0-px,my=y0-py;
  const roots=cubic(bx*bx+by*by,3*(ax*bx+ay*by),2*(ax*ax+ay*ay)+mx*bx+my*by,mx*ax+my*ay);
  let result=Infinity;
  for(const t of [0,1,...roots])if(t>=0&&t<=1){const u=1-t;result=Math.min(result,(u*u*x0+2*u*t*cx+t*t*x1-px)**2+(u*u*y0+2*u*t*cy+t*t*y1-py)**2);}
  return result;
}
function containsRaw(outline:HitOutline,px:number,py:number,minStroke:number){
  for(const group of outline.raw!){
    let winding=0;
    for(const edge of group){
      const [fill,width,x0,y0,cx,cy,x1,y1]=edge;
      if(fill)winding+=fill*(edge.length===6?lineWinding(px,py,x0,y0,cx,cy):curveWinding(px,py,x0,y0,cx,cy,x1,y1));
      if(width>=0){const radius=Math.max(width,minStroke)/2;if(px>=Math.min(x0,cx,x1??cx)-radius&&px<=Math.max(x0,cx,x1??cx)+radius&&py>=Math.min(y0,cy,y1??cy)-radius&&py<=Math.max(y0,cy,y1??cy)+radius&&strokeDistance(px,py,edge)<=radius*radius)return true;}
    }
    if(outline.winding===0?Math.abs(winding)%2===1:winding!==0)return true;
  }
  return false;
}
