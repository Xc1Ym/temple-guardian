import { programs } from './generated/programs.js';
import { containsOutline,type HitOutline } from './collision';

export type Matrix = [number, number, number, number, number, number];
export type Rect = [number, number, number, number];
export interface Placement { depth:number; id?:number; move?:boolean; name?:string; matrix?:Matrix; color?:number[]; ratio?:number; clipDepth?:number; remove?:boolean; events?:Record<string,number[]>; filters?:any[] }
export interface Timeline { frames:{ops:Placement[];scripts:number[];sounds:{id:number;info:any}[]}[];labels:Record<string,number> }
export interface Definition extends Partial<Timeline> { kind:'clip'|'button'|'image'|'edit'|'morph'; bounds?:Rect; states?:Record<string,Placement[]>;events?:Record<string,number[]>;size?:number;color?:number;align?:number;variable?:string;text?:string;wrap?:boolean;multiline?:boolean;readOnly?:boolean;maxLength?:number;leading?:number }
export interface GameData { width:number;height:number;fps:number;root:Timeline;defs:Record<string,Definition>;symbols:Record<string,number>;hitShapes?:Record<string,Record<string,HitOutline>>;sections?:Record<string,string>;upgradeSpeeds?:Record<string,Record<string,number>>;source:{sha256:string;scriptCount:number} }
export type GameCommand = {type:'start';map:number;mode:1|2|3} | {type:'wave'|'pause'|'resume'|'quit'|'chase'|'upgrade'|'sell'} | {type:'research';id:number} | {type:'select';facility:number} | {type:'cell';x:number;y:number} | {type:'key';code:number} | {type:'editor'|'help'|'settings'};
export interface GameSnapshot {tick:number;playing:boolean;paused:boolean;wave:number;money:number;miracles:number;score:number;remaining:number;templeHP:number;templeMaxHP:number;map:number;mode:number;facilities:{id:number;x:number;y:number;level:number;hp:number;attack:number}[];enemies:{id:number;kind:number;x:number;y:number;hp:number;dead:boolean}[]}
export interface UpgradeInfo {title:string;level:number;nextLevel:number;money:number;miracles:number;available:boolean;reason:string;changes:{label:string;from:number;to:number}[]}
export const get = (o:any,k:any):any => o == null ? undefined : o[k];
export const set = (o:any,k:any,v:any):any => { if(o != null)o[k]=v;return v; };
export const call = (o:any,k:any,a:any[]):any => { const f=get(o,k);if(typeof f!=='function')return undefined;const e=o?.__clip?.engine;if(e)e.executing++;try{return f.apply(o,a);}finally{if(e)e.executing--;} };
const update=(o:any,k:any,d:number,p:boolean)=>{const v=Number(get(o,k));set(o,k,v+d);return p?v+d:v;};
const del=(o:any,k:any)=>o==null?true:delete o[k];
const identity=():Matrix=>[1,0,0,1,0,0];
export function multiply(a:Matrix,b:Matrix):Matrix { return [a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]]; }
export function point(m:Matrix,p:{x:number;y:number}) {return {x:m[0]*p.x+m[2]*p.y+m[4],y:m[1]*p.x+m[3]*p.y+m[5]};}
export function inverse(m:Matrix):Matrix { const d=m[0]*m[3]-m[1]*m[2];return d?[m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,(m[2]*m[5]-m[3]*m[4])/d,(m[1]*m[4]-m[0]*m[5])/d]:identity(); }
const f32=Math.fround;
const mulAdd=(a:number,b:number,c:number,d:number)=>f32(f32(a*b)+f32(c*d));
const roundEven=(n:number)=>{const lower=Math.floor(n),fraction=n-lower;return fraction===.5?(lower%2===0?lower:lower+1):Math.round(n);};
function flashMultiply(a:Matrix,b:Matrix):Matrix {return [mulAdd(a[0],b[0],a[2],b[1]),mulAdd(a[1],b[0],a[3],b[1]),mulAdd(a[0],b[2],a[2],b[3]),mulAdd(a[1],b[2],a[3],b[3]),(roundEven(mulAdd(a[0],b[4]*20,a[2],b[5]*20))+Math.round(a[4]*20))/20,(roundEven(mulAdd(a[1],b[4]*20,a[3],b[5]*20))+Math.round(a[5]*20))/20];}
function flashInverse(m:Matrix):Matrix {const [a,b,c,d,x,y]=m,det=mulAdd(a,d,-b,c);if(!det)return identity();return [f32(d/det),f32(-b/det),f32(-c/det),f32(a/det),roundEven(f32(mulAdd(c,y*20,-d,x*20)/det))/20,roundEven(f32(mulAdd(b,x*20,-a,y*20)/det))/20];}
function flashPoint(m:Matrix,p:{x:number;y:number}){const x=Math.trunc(p.x*20),y=Math.trunc(p.y*20);return {x:(roundEven(mulAdd(m[0],x,m[2],y))+Math.round(m[4]*20))/20,y:(roundEven(mulAdd(m[1],x,m[3],y))+Math.round(m[5]*20))/20};}
function union(a:Rect|undefined,b:Rect):Rect {if(!a)return b;const x=Math.min(a[0],b[0]),y=Math.min(a[1],b[1]);return [x,y,Math.max(a[0]+a[2],b[0]+b[2])-x,Math.max(a[1]+a[3],b[1]+b[3])-y];}
export function transformRect(r:Rect,m:Matrix):Rect {const ps=[[r[0],r[1]],[r[0]+r[2],r[1]],[r[0],r[1]+r[3]],[r[0]+r[2],r[1]+r[3]]].map(([x,y])=>point(m,{x,y}));const x=Math.min(...ps.map(p=>p.x)),y=Math.min(...ps.map(p=>p.y));return[x,y,Math.max(...ps.map(p=>p.x))-x,Math.max(...ps.map(p=>p.y))-y];}

export interface PersistentData { version:1;maps:Record<string,any>;settings:{volume:number;channels:number[];soundOn:boolean};scores:{name:string;score:number;map:number;mode:number;wave:number;date:string}[] }
export const emptySave=():PersistentData=>({version:1,maps:{},settings:{volume:80,channels:[80,60,80,80,80,80,80],soundOn:true},scores:[]});
export class Persistence {
  data:PersistentData=emptySave(); warning='';
  private last='';
  constructor(private storage?:Pick<Storage,'getItem'|'setItem'>) {try {const s=storage?.getItem('temple-guardian:v1');if(s)this.data=Persistence.validate(JSON.parse(s));}catch{this.warning='本地数据未能读取，请导入备份。';}}
  static validate(d:any):PersistentData {
    if(!d||d.version!==1||!d.maps||!Array.isArray(d.scores)||!d.settings||!Number.isFinite(d.settings.volume)||d.settings.volume<0||d.settings.volume>100||!Array.isArray(d.settings.channels)||d.settings.channels.length!==7||d.settings.channels.some((v:any)=>!Number.isFinite(v)||v<0||v>100))throw new Error('备份格式或音量设置无效');
    if(d.scores.length>200||d.scores.some((s:any)=>typeof s.name!=='string'||s.name.length>40||!Number.isFinite(s.score)||s.score<0||![1,2,3].includes(s.mode)||!Number.isInteger(s.map)||s.map<0||s.map>10||!Number.isInteger(s.wave)||s.wave<1||s.wave>50||typeof s.date!=='string'))throw new Error('成绩数据无效');
    if(d.settings.soundOn===undefined)d.settings.soundOn=true;
    if(typeof d.settings.soundOn!=='boolean')throw new Error('音效开关数据无效');
    for(const [k,v] of Object.entries(d.maps) as [string,any][]) {
      if(!/^MapSave[1-5]$/.test(k)||!v||typeof v!=='object'||(Object.keys(v).length>0&&(!validMap(v.DiTuArr)||typeof v.TimeStr!=='string')))throw new Error('自编地图无效');
    }
    return JSON.parse(JSON.stringify(d));
  }
  flush(){try{const s=JSON.stringify(this.data);if(s!==this.last){this.storage?.setItem('temple-guardian:v1',s);this.last=s;}}catch{this.warning='浏览器禁止保存或存储已满，请导出备份。';}}
  import(text:string){const data=Persistence.validate(JSON.parse(text));this.data=data;this.flush();}
}
export function validMap(map:any):boolean {
  if(!Array.isArray(map)||map.length!==13||map.some((r:any)=>!Array.isArray(r)||r.length!==13||r.some((v:any)=>![0,1,2,9].includes(v))))return false;
  const flat=map.flat();if(flat.filter((v:number)=>v===9).length!==1||flat.filter((v:number)=>v===2).length!==1)return false;
  let current=flat.indexOf(9);const seen=new Set([current]);
  while(seen.size<=169){const next:number[]=[];for(const [dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=current%13+dx,y=Math.floor(current/13)+dy,n=y*13+x;if(x>=0&&x<13&&y>=0&&y<13&&(flat[n]===1||flat[n]===2)&&!seen.has(n))next.push(n);}if(flat[current]===2)return next.length===0&&flat.every((v:number,i:number)=>v!==1||seen.has(i));if(next.length!==1)return false;current=next[0];seen.add(current);}return false;
}
export interface SoundPort {start(id:string,channel:number,offset:number,loops:number,volume:number,complete?:()=>void):void;stop(channel:number):void;volume(channel:number,value:number):void}
class GameSound {
  symbol=''; volumeValue=100; onSoundComplete?:()=>void; channel:number;
  constructor(private engine:GameEngine,clip?:any){this.channel=Number(String(clip?._name||'').replace(/\D/g,''))||++engine.soundSerial;}
  attachSound(symbol:string){this.symbol=symbol;}
  setVolume(v:number){this.volumeValue=Number(v);if(!this.engine.initializing&&!this.engine.globalAudioToggle&&this.channel>=1&&this.channel<=7&&this.engine.root.props.SoundOn!==false)this.engine.save.data.settings.channels[this.channel-1]=Math.max(0,Math.min(100,this.volumeValue));this.engine.audio?.volume(this.channel,this.volumeValue);}
  getVolume(){return this.volumeValue;}
  start(offset=0,loops=1){this.engine.audio?.start(this.symbol,this.channel,offset,loops,this.volumeValue,()=>this.onSoundComplete?.());}
  stop(){this.engine.audio?.stop(this.channel);}
}
export class NativeClip {
  readonly uid:number; readonly proxy:any; readonly scope:any;
  children=new Map<number,NativeClip>(); bindings=new Map<string,NativeClip>(); props:Record<string,any>={}; matrix:Matrix=identity(); color=[1,1,1,1,0,0,0,0]; filters:any[]=[];
  frame=1; playing=true; removed=false; initialized=false; dynamic=false; timelineStart=0; ratio=0;clipDepth=0; hovered=false; pressed=false;
  graphics:{type:string;args:number[]}[]=[]; private bound=new Map<string,Function>();
  private scaleState?:{rotation:number;x:number;y:number};
  private transformValues(){return this.scaleState??= {rotation:Math.atan2(this.matrix[1],this.matrix[0])*180/Math.PI,x:Math.hypot(this.matrix[0],this.matrix[1])*100,y:Math.hypot(this.matrix[2],this.matrix[3])*100*(this.matrix[0]*this.matrix[3]-this.matrix[1]*this.matrix[2]<0?-1:1)};}
  constructor(public engine:GameEngine,public id:number,public parent:NativeClip|null,public name:string,public depth:number,public def:Definition) {
    this.uid=++engine.serial;
    this.proxy=new Proxy(this,{get:(_,k)=>this.read(String(k)),set:(_,k,v)=>{this.write(String(k),v);return true;},deleteProperty:(_,k)=>{delete this.props[String(k)];return true;},ownKeys:()=>[...new Set([...this.children.values()].sort((a,b)=>b.depth-a.depth).filter(c=>c.name).map(c=>c.name).concat(Object.keys(this.props).filter(k=>!this.child(k))))],getOwnPropertyDescriptor:()=>({enumerable:true,configurable:true}),has:(_,k)=>this.has(String(k))});
    this.scope=new Proxy({}, {get:(_,k)=>this.resolve(String(k)),set:(_,k,v)=>{this.write(String(k),v);return true;},deleteProperty:(_,k)=>delete this.props[String(k)]});
    if(def.kind==='edit')this.props.text=def.text||'';
  }
  // Parent references created by attachMovie survive display-name changes.
  // F_MapSuSiRan exchanges _name values while still accessing those references.
  child(name:string){const bound=this.bindings.get(name);if(bound&&!bound.removed)return bound;return [...this.children.values()].reverse().find(c=>c.name===name&&!c.removed);}
  has(k:string){return k in this.props||!!this.child(k)||k in this||['_root','_parent','_name','_x','_y','_alpha','_visible','_rotation','_xscale','_yscale','_width','_height','_currentframe','_totalframes','_xmouse','_ymouse'].includes(k);}
  resolve(k:string):any {if(k==='__clip')return this;if(k==='_global')return this.engine.globals;if(this.has(k))return this.read(k);return this.parent?this.parent.resolve(k):this.engine.globals[k];}
  textBinding(){const parts=(this.def.variable||'').split('.');let obj:any=this.parent?.scope||this.scope;if(parts.length===1&&parts[0]==='')return undefined;while(parts.length>1)obj=get(obj,parts.shift());return {obj,key:parts[0]};}
  textValue(){const bind=this.textBinding();const v=bind?get(bind.obj,bind.key):undefined;return v===undefined?String(this.props.text||''):String(v);}
  read(k:string):any {
    if(k==='__clip')return this;
    if(k==='_visible'&&this.removed)return false;
    if(k==='text'||k==='htmlText')return this.textValue();
    if(k in this.props)return this.props[k];
    const child=this.child(k);if(child)return child.proxy;
    if(k==='_root')return this.engine.root.proxy;if(k==='_parent')return this.parent?.proxy;if(k==='_name')return this.name;
    if(k==='_x')return this.matrix[4];if(k==='_y')return this.matrix[5];
    if(k==='_rotation')return this.transformValues().rotation;
    if(k==='_xscale')return this.transformValues().x;if(k==='_yscale')return this.transformValues().y;
    if(k==='_alpha')return this.color[3]*100;if(k==='_visible'||k==='enabled')return true;
    if(k==='_width'||k==='_height'){const r=transformRect(this.bounds(),[...this.matrix.slice(0,4),0,0] as Matrix);return r[k==='_width'?2:3];}
    if(k==='_currentframe')return this.frame;if(k==='_totalframes')return this.def.frames?.length||1;
    if(k==='_xmouse'||k==='_ymouse'){const p=point(inverse(this.world()),this.engine.mouse);return k==='_xmouse'?p.x:p.y;}
    const value=(this as any)[k];if(typeof value==='function'){if(!this.bound.has(k))this.bound.set(k,value.bind(this));return this.bound.get(k);}return undefined;
  }
  write(k:string,v:any) {
    if(k==='_name'){this.name=String(v);return;}
    if(k==='_x'||k==='_y'){this.matrix[k==='_x'?4:5]=Math.trunc(Number(v)*20)/20;return;}
    if(k==='_rotation'){const state=this.transformValues(),a=(Number(v)-state.rotation)*Math.PI/180,co=Math.cos(a),si=Math.sin(a);const [x,y,z,w]=this.matrix;this.matrix[0]=x*co-y*si;this.matrix[1]=x*si+y*co;this.matrix[2]=z*co-w*si;this.matrix[3]=z*si+w*co;let rotation=Number(v)%360;if(rotation>180)rotation-=360;if(rotation<-180)rotation+=360;state.rotation=rotation;return;}
    if(k==='_xscale'||k==='_yscale'){const i=k==='_xscale'?0:2,state=this.transformValues(),axis=i===0?'x':'y',old=state[axis],next=Number(v);if(old){const scale=next/old;this.matrix[i]*=scale;this.matrix[i+1]*=scale;}else{const angle=(state.rotation+(i===2?90:0))*Math.PI/180;this.matrix[i]=Math.cos(angle)*next/100;this.matrix[i+1]=Math.sin(angle)*next/100;}state[axis]=next;return;}
    if(k==='_width'||k==='_height'){const size=this.read(k);if(size)this.write(k==='_width'?'_xscale':'_yscale',this.read(k==='_width'?'_xscale':'_yscale')*Number(v)/size);return;}
    if(k==='_alpha'){this.color[3]=Number(v)/100;return;}
    if(k==='htmlText'||k==='text'){this.props.text=String(v);const bind=this.textBinding();if(bind)set(bind.obj,bind.key,String(v));return;}
    this.props[k]=v;
  }
  world():Matrix{return this.parent?multiply(this.parent.world(),this.matrix):this.matrix;}
  private flashWorld():Matrix{const m=this.matrix.map((v,i)=>i<4?f32(v):v) as Matrix;return this.parent?flashMultiply(this.parent.flashWorld(),m):m;}
  bounds():Rect {
    if(this.def.bounds)return this.def.bounds;
    let r:Rect|undefined;
    for(const c of this.children.values()){if(c.removed)continue;const b=c.bounds();if(b[2]&&b[3])r=union(r,transformRect(b,c.matrix));}
    return r||[0,0,0,0];
  }
  getBounds(target?:any){const r=transformRect(this.bounds(),target?.__clip?multiply(inverse(target.__clip.world()),this.world()):this.world());return{xMin:r[0],yMin:r[1],xMax:r[0]+r[2],yMax:r[1]+r[3]};}
  private hitShape(p:{x:number;y:number}):boolean{if(this.removed)return false;const world=this.flashWorld();if(world[0]*world[3]-world[1]*world[2]===0)return false;const matrix=flashInverse(world),local=flashPoint(matrix,p),shape=this.engine.data.hitShapes?.[this.id]?.[this.ratio];if(shape)return containsOutline(shape,local.x,local.y,20*Math.max(Math.hypot(matrix[0],matrix[1]),Math.hypot(matrix[2],matrix[3])));if(this.def.kind==='edit'){const [x,y,w,h]=this.bounds();return local.x>=x&&local.x<=x+w&&local.y>=y&&local.y<=y+h;}return [...this.children.values()].some(c=>c.hitShape(p));}
  hitTest(other:any,y?:number,shape=false){const a=this.getBounds();if(typeof other==='number'){if(shape)return this.hitShape(flashPoint(this.engine.root.flashWorld(),{x:other,y:Number(y)}));return other>=a.xMin&&other<=a.xMax&&Number(y)>=a.yMin&&Number(y)<=a.yMax;}const b=other?.__clip?.getBounds();return !!b&&a.xMin<=b.xMax&&a.xMax>=b.xMin&&a.yMin<=b.yMax&&a.yMax>=b.yMin;}
  localToGlobal(p:{x:number;y:number}){if(typeof p.x==='number'&&typeof p.y==='number')Object.assign(p,flashPoint(this.flashWorld(),p));}
  globalToLocal(p:{x:number;y:number}){if(typeof p.x==='number'&&typeof p.y==='number')Object.assign(p,flashPoint(flashInverse(this.flashWorld()),p));}
  stop(){this.playing=false;} play(){this.playing=true;}
  gotoAndStop(frame:any){this.seek(frame,false);} gotoAndPlay(frame:any){this.seek(frame,true);}
  nextFrame(){this.seek(this.frame+1,false);} prevFrame(){this.seek(this.frame-1,false);}
  getDepth(){return this.depth;} getNextHighestDepth(){return Math.max(-1,...[...this.children.keys()].filter(d=>d>=0))+1;}
  getInstanceAtDepth(n:number){return this.children.get(Number(n))?.proxy;}
  swapDepths(other:any){if(!this.parent)return;const n=typeof other==='number'?other:other?.__clip?.depth;if(n===undefined)return;const target=this.parent.children.get(n);this.parent.children.delete(this.depth);this.parent.children.delete(n);if(target){target.depth=this.depth;this.parent.children.set(target.depth,target);}this.depth=n;this.parent.children.set(n,this);}
  removeMovieClip(){if(this===this.engine.root||this.removed)return;this.removed=true;if(this.parent?.children.get(this.depth)===this)this.parent.children.delete(this.depth);if(this.parent)for(const [name,clip] of this.parent.bindings)if(clip===this)this.parent.bindings.delete(name);for(const c of this.children.values())c.removeMovieClip();this.engine.event(this,'unload');}
  attachMovie(symbol:string,name:string,depth:number,init?:Record<string,any>){const id=this.engine.data.symbols[symbol];if(id===undefined){this.engine.errors.push(`Missing symbol ${symbol}`);return undefined;}return this.engine.create(id,this,name,depth,init,true).proxy;}
  createEmptyMovieClip(name:string,depth:number){return this.engine.create(-1,this,name,depth,{},true).proxy;}
  duplicateMovieClip(name:string,depth:number,init?:any){return this.parent?this.engine.create(this.id,this.parent,name,depth,{...this.props,...init},true).proxy:undefined;}
  startDrag(lock=false,x1?:number,y1?:number,x2?:number,y2?:number){const p=point(this.parent?inverse(this.parent.world()):identity(),this.engine.mouse);this.engine.drag={clip:this,offset:lock?{x:0,y:0}:{x:this.read('_x')-p.x,y:this.read('_y')-p.y},bounds:x1===undefined?undefined:[x1,y1||0,x2||0,y2||0]};}stopDrag(){this.engine.drag=undefined;}
  setMask(other:any){this.props.$mask=other?.__clip;}
  lineStyle(...args:number[]){this.graphics.push({type:'lineStyle',args});} moveTo(...args:number[]){this.graphics.push({type:'moveTo',args});}lineTo(...args:number[]){this.graphics.push({type:'lineTo',args});}beginFill(...args:number[]){this.graphics.push({type:'beginFill',args});}endFill(){this.graphics.push({type:'endFill',args:[]});}clear(){this.graphics=[];}
  getBytesLoaded(){return 2849402;}getBytesTotal(){return 2849402;}
  setFocus(){}
  apply(op:Placement,defer=false) {
    if(op.remove){this.children.get(op.depth)?.removeMovieClip();return;}
    let child=this.children.get(op.depth);
    if(op.id!==undefined&&(!child||!op.move||child.id!==op.id)){child=this.engine.create(op.id,this,op.name||'',op.depth,{},false);child.timelineStart=this.frame;}
    if(!child)return;
    if(op.name!==undefined)child.name=op.name;
    if(op.matrix){child.matrix=[...op.matrix];child.scaleState=undefined;}if(op.color)child.color=[...op.color];if(op.ratio!==undefined)child.ratio=op.ratio;if(op.clipDepth!==undefined)child.clipDepth=op.clipDepth;if(op.filters)child.filters=op.filters;if(op.events)child.props.$events=op.events;
    if(!child.initialized){child.initialize(defer);}
  }
  initialize(defer=false) {
    this.initialized=true;
    if(this.def.kind==='clip'){
      const index=this.engine.pending.length;
      this.frame=1;for(const op of this.def.frames?.[0]?.ops||[])this.apply(op,true);
      this.engine.queue(this,index);
    }else if(this.def.kind==='button')this.buttonState('up');
    this.engine.event(this,'initialize');this.engine.event(this,'load');
  }
  buttonState(state:string){for(const c of this.children.values())c.removeMovieClip();for(const op of this.def.states?.[state]||[])this.apply(op,false);}
  seek(frame:any,playing:boolean) {
    const next=typeof frame==='string'&&this.def.labels?.[frame]?this.def.labels[frame]:Number(frame);
    if(!Number.isFinite(next)||!this.def.frames)return;
    const n=Math.min(this.def.frames.length,Math.max(1,Math.floor(next)));
    this.playing=playing;
    if(this.initialized&&n===this.frame)return;
    const desired=new Map<number,Placement>(),starts=new Map<number,number>();
    for(let i=0;i<n;i++)for(const op of this.def.frames[i].ops){if(op.remove){desired.delete(op.depth);starts.delete(op.depth);}else{const old=desired.get(op.depth);if(!op.move||!old||(op.id!==undefined&&old.id!==op.id))starts.set(op.depth,i+1);desired.set(op.depth,op.move?{...old,...op}:op);}}
    // A seek retains an instance present in both frames, including its script
    // properties. The original property popup loops back to its first frame.
    for(const c of [...this.children.values()])if(!c.dynamic&&(desired.get(c.depth)?.id!==c.id||starts.get(c.depth)!==c.timelineStart))c.removeMovieClip();
    const index=this.engine.pending.length;
    this.frame=n;for(const op of desired.values()){this.apply({...op,move:!!this.children.get(op.depth)},true);const child=this.children.get(op.depth);if(child&&!child.dynamic)child.timelineStart=starts.get(op.depth)||n;}this.engine.queue(this,index);if(!this.engine.executing)this.engine.drain();
  }
  runFrame(){const f=this.def.frames?.[this.frame-1];if(!f)return;for(const i of f.scripts)this.engine.run(i,this);for(const s of f.sounds)this.engine.audio?.start(String(s.id),10000+this.uid,0,Number(s.info.loopCount||1),Number(this.engine.root.props.SoundVol??80));}
  advance(){if(!this.playing||!this.def.frames||this.def.frames.length<2)return;if(this.frame===this.def.frames.length){this.seek(1,true);return;}this.frame++;for(const op of this.def.frames[this.frame-1].ops)this.apply(op,true);this.runFrame();}
}

export class GameEngine {
  root:NativeClip;globals:Record<string,any>={};serial=0;soundSerial=100;ticks=0;time=0;frameTime=0;errors:string[]=[];pending:NativeClip[]=[];executing=0;initializing=true;globalAudioToggle=false;
  private pausedCountdown?:{date:Date;frameTime:number};
  mouse={x:0,y:0};keys=new Set<number>();drag?:{clip:NativeClip;offset:{x:number;y:number};bounds?:number[]};audio?:SoundPort;
  onRanking?:()=>void;onScore?:()=>void;onTextInput?:(clip:NativeClip)=>void;onNotice?:(text:string)=>void;private upgrading=false;
  constructor(public data:GameData,public save=new Persistence(),random:()=>number=Math.random,audio?:SoundPort) {
    this.audio=audio;
    const engine=this;
    const initialTime=Date.now();
    class ClockDate extends Date {constructor(...args:any[]){super(args.length?args[0]:initialTime+engine.frameTime);}}
    class Sound extends GameSound {constructor(clip?:any){super(engine,clip);}}
    class ColorTransform {values:number[];constructor(...v:number[]){this.values=v.length?v:[1,1,1,1,0,0,0,0];}}
    class Transform {constructor(private target:any){}set colorTransform(v:ColorTransform){if(this.target?.__clip)this.target.__clip.color=[...v.values];}get colorTransform(){return new ColorTransform(...(this.target?.__clip?.color||[]));}}
    class Color {constructor(private target:any){}setTransform(t:any){if(this.target?.__clip)this.target.__clip.color=[Number(t.ra??100)/100,Number(t.ga??100)/100,Number(t.ba??100)/100,Number(t.aa??100)/100,t.rb||0,t.gb||0,t.bb||0,t.ab||0];}setRGB(rgb:number){if(this.target?.__clip)this.target.__clip.color=[0,0,0,1,(rgb>>16)&255,(rgb>>8)&255,rgb&255,0];}}
    const math=Object.create(Math);math.random=random;
    this.globals={Math:math,Date:ClockDate,Sound,Color,Number,String,Boolean,Array,Object,parseInt,parseFloat,isNaN,isFinite,escape,unescape,Infinity,NaN,undefined,flash:{geom:{ColorTransform,Transform}},Key:{isDown:(k:number)=>this.keys.has(k),addListener:()=>{},removeListener:()=>{}},Selection:{setFocus:()=>{}},Stage:{width:650,height:500},Mouse:{hide:()=>{},show:()=>{}},SharedObject:{getLocal:(name:string)=>{const existing=this.save.data.maps[name]||{};this.save.data.maps[name]=existing;return {data:existing,clear:()=>{Object.keys(existing).forEach(k=>delete existing[k]);},flush:()=>this.save.flush()};}},getTimer:()=>this.frameTime,trace:(...a:any[])=>console.debug(...a),getURL:(url:string)=>{if(url.includes('game_score_set')){const query=new URL(url).searchParams;this.submitScore(query.get('player')||undefined,Number(query.get('score')));}else if(url.includes('score_rank'))this.onRanking?.();},fscommand:()=>{}};
    this.root=new NativeClip(this,0,null,'_root',0,{kind:'clip',...data.root});this.root.initialized=true;
    this.root.seek(22,false);
    this.root.props.SoundVol=this.save.data.settings.volume;this.root.props.SoundVolTem=this.save.data.settings.volume;
    for(let i=1;i<=7;i++)call(this.root.proxy,'S_Sound'+i,[]);
    this.initializing=false;this.applyVolumes();
  }
  applyVolumes(){const on=this.save.data.settings.soundOn;this.root.props.SoundOn=on;this.root.props.SoundVol=on?this.save.data.settings.volume:0;const icon=this.root.proxy.M_ToolB4?.M_SoundClose;if(icon)icon._visible=!on;for(let i=1;i<=7;i++)get(this.root.proxy,'S_Sound'+i)?.setVolume(on?this.save.data.settings.channels[i-1]:0);}
  create(id:number,parent:NativeClip,name:string,depth:number,init:Record<string,any>={},dynamic=false) {
    parent.children.get(depth)?.removeMovieClip();const def=id===-1?{kind:'clip' as const,frames:[],labels:{}}:this.data.defs[id]||{kind:'image' as const,bounds:[0,0,0,0] as Rect};
    const c=new NativeClip(this,id,parent,name,depth,def);c.dynamic=dynamic;parent.children.set(depth,c);if(dynamic&&name)parent.bindings.set(name,c);Object.entries(init).forEach(([k,v])=>c.write(k,v));if(dynamic)c.initialize(false);return c;
  }
  queue(clip:NativeClip,index=this.pending.length){if(!this.pending.includes(clip))this.pending.splice(index,0,clip);}
  run(i:number,clip:NativeClip){this.executing++;try{(programs[i] as any)?.call(clip.proxy,clip.scope,get,set,call,update,del);}catch(e){const message=`script ${i} at ${clip.name} frame ${clip.frame}: ${e instanceof Error?e.message:e}`;if(!this.errors.includes(message)){this.errors.push(message);console.error(message);}}finally{this.executing--;}}
  drain(){let guard=0;while(this.pending.length&&guard++<20000){const c=this.pending.shift()!;if(!c.removed)c.runFrame();}if(guard>=20000)this.errors.push('Timeline initialization overflow');}
  walk(clip=this.root):NativeClip[]{return [clip,...[...clip.children.values()].sort((a,b)=>b.depth-a.depth).flatMap(c=>this.walk(c))];}
  event(clip:NativeClip,event:string){if(clip.removed&&event!=='unload')return;if(clip.id===346&&event==='release'&&!this.upgrading){this.upgrade();return;}if(clip.read('enabled')===false)return;const handler=clip.props['on'+event[0].toUpperCase()+event.slice(1)];if(typeof handler==='function'){this.executing++;try{handler.call(clip.proxy);}catch(e){const msg=`${event} ${clip.name}: ${e instanceof Error?e.message:e}`;if(!this.errors.includes(msg)){this.errors.push(msg);console.error(msg);}}finally{this.executing--;}}for(const i of clip.props.$events?.[event]||clip.def.events?.[event]||[])this.run(i,clip.def.kind==='button'&&clip.parent?clip.parent:clip);}
  private advanceClock(){const r=this.root.proxy,freezePreparation=r.GameStar&&r.GamePause&&r.B_GuanStar.enabled&&(r.MySellID===2||r.MySellID===3);if(freezePreparation){if(!this.pausedCountdown)this.pausedCountdown={date:r.NowTimeZL,frameTime:this.frameTime};}else if(this.pausedCountdown){const paused=this.pausedCountdown;if(r.NowTimeZL===paused.date)r.NowTimeZL=new this.globals.Date(Number(paused.date)+this.frameTime-paused.frameTime);this.pausedCountdown=undefined;}this.frameTime+=1000/28;if(!r.GamePause)this.time+=1000/28;}
  step(count=1) {for(let n=0;n<count;n++){this.drain();this.ticks++;this.advanceClock();const list=this.walk().sort((a,b)=>b.uid-a.uid);this.executing++;try{for(const c of list)if(!c.removed){this.event(c,'enterFrame');if(!c.removed)c.advance();}}finally{this.executing--;}this.drain();}this.save.flush();}
  movePointer(p:{x:number;y:number}){this.mouse=p;if(!this.drag)return;const d=this.drag,q=point(d.clip.parent?inverse(d.clip.parent.world()):identity(),p),b=d.bounds,x=q.x+d.offset.x,y=q.y+d.offset.y;d.clip.write('_x',b?Math.min(b[2],Math.max(b[0],x)):x);d.clip.write('_y',b?Math.min(b[3],Math.max(b[1],y)):y);}
  key(code:number){this.keys.add(code);this.globalAudioToggle=code===83;this.event(this.root,'keyDown');this.keys.delete(code);this.globalAudioToggle=false;if(code===83){this.save.data.settings.soundOn=!!this.root.props.SoundOn;this.applyVolumes();this.save.flush();}}
  dispatch(command:GameCommand) {
    const r=this.root.proxy;
    switch(command.type){
      case 'start':
        call(r,'F_UpdateVar',[1]);call(r,'F_UpdateCang',[1]);set(r,'NowDiTuID',command.map);set(r,'MySellID',command.mode);call(r,'F_GameStar',[]);call(r,'F_UpdateButton',[]);break;
      case 'wave':this.key(32);break;case 'pause':this.key(80);break;
      case 'resume':set(r,'GamePause',false);get(r,'M_ShowCang')?.M_GamePause?.removeMovieClip();get(r,'M_ShowCang')?.M_DHKStar?.removeMovieClip();break;
      case 'quit':call(r,'F_BackMenu',[]);break;case 'chase':this.key(65);break;
      case 'research':{const c=get(r,'M_RuanJiao'+command.id)?.__clip;const b=c&&this.walk(c).find(n=>n.def.kind==='button'&&n.def.events?.release);if(b&&!r.GamePause)this.event(b,'release');break;}
      case 'upgrade':this.upgrade();break;
      case 'sell':{const c=get(r,'M_ShowCang')?.M_DHKSuSing?.__clip;const b=c&&this.walk(c).find(n=>n.id===353);if(b&&!r.GamePause)this.event(b,'release');break;}
      case 'select':{const disabled=get(r,'B2_ShowSeSi'+command.facility)?._visible;const b=get(r,'B_ShowSeSi'+command.facility)?.__clip;if(b&&r.GameStar&&!r.GamePause&&!disabled)this.event(b,'release');break;}
      case 'cell':{const grid=get(r,'M_DiTu1')?.__clip;const c=grid&&[...grid.children.values()].find(c=>c.props.Myix===command.x&&c.props.Myiy===command.y);if(c){this.event(c,'rollOver');this.event(c,'release');this.event(c,'rollOut');}break;}
      case 'key':this.key(command.code);break;
      case 'help':this.key(72);break;
      case 'settings':this.showPage(4);break;
      case 'editor':if(r.GameStar){this.dispatch({type:'quit'});}r.attachMovie('Mf_EditDiTu','M_EditDiTu',10);break;
    }
    this.drain();this.save.flush();
  }
  upgradeInfo():UpgradeInfo|undefined {
    const r=this.root.proxy,popup=r.M_ShowCang?.M_DHKSuSing,target=popup?.M_SenJiBan?.MivObject;
    if(!target||target.__clip?.removed)return;
    const number=(v:any)=>parseFloat(String(v??'').replace(/<[^>]*>/g,''));
    const level=number(target.Level),nextLevel=number(target.LevelB)||0,money=Math.round(number(target.SJMoney)*r.BuyLu)||0,miracles=number(target.SJSenJiDian)||0;
    const requiredMoney=Math.max(money,number(target.SJMoney)||0),missing:string[]=[];if(r.Money<requiredMoney)missing.push(`${requiredMoney-r.Money} 金钱`);if(r.SenJiDian<miracles)missing.push(`${miracles-r.SenJiDian} 神迹`);
    const reason=nextLevel<=0?'已达到最高等级':r.GamePause?'游戏已暂停，请继续后升级':missing.length?`资源不足，还差 ${missing.join('、')}${requiredMoney>money?`（升级需要 ${requiredMoney} 金钱，消耗 ${money}）`:''}`:'';
    const changes=[['攻击力','Attack','AttackB'],['攻击速度','JianSuDu','JianSuDuB'],[popup.MivObject?.SeSiID!==undefined?'耐久':'生命','HP','HPB'],['射程','FanWei','FanWeiB']].flatMap(([label,current,next])=>{const from=number(popup[current]),to=next==='JianSuDuB'?(this.data.upgradeSpeeds?.[target.__clip.id]?.[nextLevel]??number(popup[next])):number(popup[next]);return Number.isFinite(from)&&Number.isFinite(to)&&nextLevel>0?[{label,from,to}]:[];});
    return {title:String(popup.Title||popup.MivObject?.Title||'设施').replace(/<[^>]*>/g,''),level,nextLevel,money,miracles,available:!reason,reason,changes};
  }
  upgrade(){
    this.drain();const info=this.upgradeInfo();if(!info){this.onNotice?.('请先选择需要升级的设施');return;}if(!info.available){this.onNotice?.(info.reason);return;}
    const band=this.root.proxy.M_ShowCang.M_DHKSuSing.M_SenJiBan,target=band.MivObject,button=band.B_SenJi?.__clip;
    if(!button)return;band.__clip.runFrame();this.upgrading=true;try{this.event(button,'release');}finally{this.upgrading=false;}this.drain();
    if(Number(target.Level)>info.level){const changes=info.changes.filter(c=>c.from!==c.to).map(c=>`${c.label} ${c.from}→${c.to}`).join('，');this.onNotice?.(`${info.title}升级成功：${info.level}级→${target.Level}级。消耗 ${info.money} 金钱${info.miracles?'、'+info.miracles+' 神迹':''}。${changes}`);}
    else this.onNotice?.('升级未完成，请确认当前资源');
  }
  showPage(page:number){const r=this.root.proxy;if(r.GameStar)r.GamePause=true;let menu=get(r,'M_ShowCang')?.M_DHKStar;if(!menu)menu=get(r,'M_ShowCang')?.attachMovie('Mf_DHKStar','M_DHKStar',1000,{_x:325,_y:250});menu?.M_NeiRong?.gotoAndStop('a'+page);}
  submitScore(name?:string,score?:number){const r=this.root.proxy;this.save.data.scores.push({name:String(name||r.SumitUserS||'玩家').slice(0,40),score:Math.max(0,score??(Number(r.AllDeFen)||0)),map:Number(r.NowDiTuID)||0,mode:Number(r.MySellID)||1,wave:Number(r.NowGuanSu)||1,date:new Date().toISOString()});this.save.data.scores=this.save.data.scores.sort((a,b)=>b.score-a.score).slice(0,200);this.save.flush();this.onScore?.();}
  snapshot():GameSnapshot {const r=this.root.proxy;const temple=get(r,'M_DiTu8')?.M_GongDian;return{tick:this.ticks,playing:!!r.GameStar,paused:!!r.GamePause,wave:r.NowGuanSu||1,money:r.Money||0,miracles:r.SenJiDian||0,score:r.AllDeFen||0,remaining:r.DiRenMaxZL||0,templeHP:temple?.HP||0,templeMaxHP:temple?.MaxHP||0,map:r.NowDiTuID,mode:r.MySellID,facilities:this.walk().filter(c=>c.dynamic&&c.props.SeSiID!==undefined).map(c=>({id:c.props.SeSiID,x:c.read('_x'),y:c.read('_y'),level:c.props.Level,hp:c.props.HP,attack:c.props.Attack})),enemies:[...(get(r,'M_DiTu0')?.__clip?.children.values()||[])].filter((c:NativeClip)=>c.props.NowDiRenID!==undefined).map((c:NativeClip)=>({id:c.props.ID,kind:c.props.NowDiRenID,x:c.read('_x'),y:c.read('_y'),hp:c.props.HP,dead:c.props.Die}))};}
}
