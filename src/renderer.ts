import { Application, Assets, Container, Sprite, Texture, Graphics, Matrix, ColorMatrixFilter, CanvasSource, type Filter } from 'pixi.js';
import { DropShadowFilter, GlowFilter } from 'pixi-filters';
import { assetUrl } from './asset-url';
import { GameEngine, NativeClip, point, inverse, transformRect, type Rect } from './engine';
export interface AssetManifest {icons?:Record<string,string>;images:Record<string,{url:string;x:number;y:number;width:number;height:number;scale:number}>;morphs:Record<string,any>;sounds:Record<string,string>;soundIds:Record<string,string>;font:{url:string;family:string;characters?:string;characterCount?:number;subsetSha256?:string}}
interface Visual {node:Container;leaf?:Sprite;graphics?:Graphics;texture?:Texture;value?:string;ratio?:number;filter?:ColorMatrixFilter;color?:string;authored?:Filter[];filterKey?:string}
function richCanvas(clip:NativeClip,family:string,text=clip.textValue()):HTMLCanvasElement {
  const d=clip.def,b=d.bounds||[0,0,60,20],canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.ceil(b[2]*2));canvas.height=Math.max(1,Math.ceil(b[3]*2));const ctx=canvas.getContext('2d')!;ctx.scale(2,2);ctx.textBaseline='top';
  const size=d.size||12,leading=d.leading||0;
  const doc=new DOMParser().parseFromString(text, 'text/html');
  const rows:{c:string;font:string;color:string;size:number}[][]=[[]];
  const walk=(n:Node,style:{size:number;weight:string;color:string})=>{
    if(n.nodeType===Node.TEXT_NODE){for(const c of n.textContent||''){if(c==='\n')rows.push([]);else rows.at(-1)!.push({c,font:`${style.weight} ${style.size}px "${family}"`,color:style.color,size:style.size});}return;}
    if(n instanceof Element){if(n.tagName==='BR'){rows.push([]);return;}const s={...style};if(n.tagName==='B'||n.tagName==='STRONG')s.weight='bold';if(n.tagName==='FONT'){const v=Number(n.getAttribute('size'));if(v>0&&v<80)s.size=v;const color=n.getAttribute('color');if(color&&/^#[0-9a-f]{3,8}$/i.test(color))s.color=color;}for(const c of n.childNodes)walk(c,s);if(n.tagName==='P'&&rows.at(-1)!.length)rows.push([]);return;}
    for(const c of n.childNodes)walk(c,style);
  };
  walk(doc.body,{size,weight:'normal',color:'#'+(d.color||0).toString(16).padStart(6,'0')});
  const lines:typeof rows=[];
  for(const row of rows){let line:typeof row=[],width=0;for(const c of row){ctx.font=c.font;const w=ctx.measureText(c.c).width;if(d.wrap&&width+w>b[2]-4&&line.length){lines.push(line);line=[];width=0;}line.push(c);width+=w;}lines.push(line);}
  let y=2;for(const line of lines){const widths=line.map(c=>{ctx.font=c.font;return ctx.measureText(c.c).width;});const width=widths.reduce((a,b)=>a+b,0);let x=d.align===2?(b[2]-width)/2:d.align===1?b[2]-width-2:2;for(let i=0;i<line.length;i++){const c=line[i];ctx.font=c.font;ctx.fillStyle=c.color;ctx.fillText(c.c,x,y);x+=widths[i];}y+=Math.max(size,...line.map(c=>c.size))+leading;}
  return canvas;
}
export class GameRenderer {
  app=new Application(); visuals=new Map<number,Visual>();textures:Record<string,Texture>={};morph:any;hover?:NativeClip;pressed?:NativeClip;
  constructor(public engine:GameEngine,public manifest:AssetManifest,public host:HTMLElement){}
  async initialize(){
    await this.app.init({width:650,height:500,resolution:Math.min(devicePixelRatio||1,2),autoDensity:true,antialias:true,background:'#a78735',preference:'webgl'});this.app.stop();this.host.append(this.app.canvas);
    const entries=Object.entries(this.manifest.images);const urls=[...new Set(entries.map(([,a])=>assetUrl(a.url)))];const loaded=await Assets.load(urls);for(const [id,a]of entries)this.textures[id]=loaded[assetUrl(a.url)];
    this.morph=await import('./generated/morphs.js');
    this.attachInput();this.render();
  }
  private create(clip:NativeClip):Visual {
    const node=new Container();node.label=clip.name;const v:Visual={node};
    const a=this.manifest.images[clip.id];
    if(clip.def.kind==='image'&&a){v.leaf=new Sprite(this.textures[clip.id]);v.leaf.position.set(a.x,a.y);v.leaf.width=a.width;v.leaf.height=a.height;node.addChild(v.leaf);}
    if(clip.def.kind==='edit'||clip.def.kind==='morph'){v.leaf=new Sprite(Texture.EMPTY);node.addChild(v.leaf);}
    this.visuals.set(clip.uid,v);return v;
  }
  private sync(clip:NativeClip,parent:Container,live:Set<number>){
    live.add(clip.uid);const v=this.visuals.get(clip.uid)||this.create(clip);if(v.node.parent!==parent)parent.addChild(v.node);v.node.zIndex=clip.depth;v.node.sortableChildren=true;
    const m=clip.matrix;v.node.setFromMatrix(new Matrix(...m));v.node.visible=clip.read('_visible')!==false&&Number.isFinite(m[4])&&Number.isFinite(m[5]);v.node.alpha=Math.max(0,Math.min(1,clip.color[3]));
    const color=clip.color.slice(0,3).concat(clip.color.slice(4,7)).join(',');const filterKey=JSON.stringify(clip.filters);if(v.color!==color||v.filterKey!==filterKey){v.color=color;if(v.filterKey!==filterKey){v.authored?.forEach(f=>f.destroy());v.filterKey=filterKey;v.authored=clip.filters.flatMap<Filter>(f=>{const c=f.color||{},rgb=Number(c.red||0)*65536+Number(c.green||0)*256+Number(c.blue||0),alpha=Number(c.alpha??255)/255,blur=(Number(f.blurX||0)+Number(f.blurY||0))/4;if(f.type==='DROPSHADOWFILTER')return[new DropShadowFilter({offset:{x:Math.cos(Number(f.angle))*Number(f.distance),y:Math.sin(Number(f.angle))*Number(f.distance)},color:rgb,alpha:Math.min(1,alpha*Number(f.strength||1)),blur,quality:Number(f.passes)||1,shadowOnly:f.knockout==='true'})];if(f.type==='GLOWFILTER')return[new GlowFilter({distance:Math.max(1,blur*2),color:rgb,alpha,outerStrength:f.innerGlow==='true'?0:Number(f.strength||1),innerStrength:f.innerGlow==='true'?Number(f.strength||1):0,quality:.3,knockout:f.knockout==='true'})];return[];});}const filters:Filter[]=[];if(color!=='1,1,1,0,0,0'){v.filter||=new ColorMatrixFilter();v.filter.matrix=[clip.color[0],0,0,0,clip.color[4]/255,0,clip.color[1],0,0,clip.color[5]/255,0,0,clip.color[2],0,clip.color[6]/255,0,0,0,1,0];filters.push(v.filter);}v.node.filters=[...filters,...(v.authored||[])];}
    if(clip.def.kind==='edit'&&v.leaf){let text=clip.textValue();if(clip.def.variable==='JianSuDuB'){const speed=this.engine.upgradeInfo()?.changes.find(c=>c.label==='攻击速度');if(speed)text=`<b>${speed.to}</b>`;}if(v.value!==text){v.value=text;const canvas=richCanvas(clip,this.manifest.font.family,text);const t=new Texture({source:new CanvasSource({resource:canvas,resolution:2})});v.texture?.destroy(true);v.texture=t;v.leaf.texture=t;const b=clip.def.bounds!;v.leaf.position.set(b[0],b[1]);v.leaf.width=b[2];v.leaf.height=b[3];}}
    if(clip.def.kind==='morph'&&v.leaf&&v.ratio!==clip.ratio){v.ratio=clip.ratio;const canvas=this.morph.createMorphCanvas(clip.id,clip.ratio,2);if(canvas){const t=new Texture({source:new CanvasSource({resource:canvas,resolution:2})});v.texture?.destroy(true);v.texture=t;v.leaf.texture=t;const b=this.morph.morphBounds[clip.id];v.leaf.position.set(b.x,b.y);v.leaf.width=canvas.width/2;v.leaf.height=canvas.height/2;}}
    if(clip.graphics.length){v.graphics||=new Graphics();if(!v.graphics.parent)v.node.addChild(v.graphics);const key=JSON.stringify(clip.graphics);if(v.value!==key){v.value=key;v.graphics.clear();let stroke={width:1,color:0xffffff,alpha:1};for(const cmd of clip.graphics){if(cmd.type==='lineStyle')stroke={width:cmd.args[0],color:cmd.args[1],alpha:(cmd.args[2]??100)/100};if(cmd.type==='moveTo')v.graphics.moveTo(cmd.args[0],cmd.args[1]);if(cmd.type==='lineTo'){v.graphics.lineTo(cmd.args[0],cmd.args[1]).stroke(stroke);}}}}
    const children=[...clip.children.values()].sort((a,b)=>a.depth-b.depth);for(const c of children)this.sync(c,v.node,live);
    let mask:NativeClip|undefined;for(const c of children){const childVisual=this.visuals.get(c.uid)!;if(c.clipDepth){mask=c;childVisual.node.visible=false;}else if(mask&&c.depth<=mask.clipDepth){childVisual.node.mask=this.visuals.get(mask.uid)!.node;}else{childVisual.node.mask=null;mask=undefined;}}
    const explicit=clip.props.$mask;if(explicit&&this.visuals.has(explicit.uid))v.node.mask=this.visuals.get(explicit.uid)!.node;
  }
  render(){const live=new Set<number>();this.sync(this.engine.root,this.app.stage,live);for(const [uid,v]of this.visuals)if(!live.has(uid)){v.texture?.destroy(true);v.authored?.forEach(f=>f.destroy());v.filter?.destroy();v.node.destroy({children:false});this.visuals.delete(uid);}this.app.render();}
  hit(x:number,y:number):NativeClip|undefined {
    const visit=(c:NativeClip):NativeClip|undefined=>{
      if(c.removed||c.read('_visible')===false||c.read('enabled')===false)return;
      for(const child of [...c.children.values()].sort((a,b)=>b.depth-a.depth)){const h=visit(child);if(h)return h;}
      const interactive=c.def.kind==='button'||(!c.def.readOnly&&c.def.kind==='edit')||['onRelease','onPress','onRollOver'].some(k=>typeof c.props[k]==='function')||!!c.props.$events;
      if(!interactive)return;
      const p=point(inverse(c.world()),{x,y});let b=c.bounds();
      if(c.def.kind==='button'){let hit:Rect|undefined;for(const op of c.def.states?.hit||[]){const def=this.engine.data.defs[op.id!];let bounds=def?.bounds;if(!bounds&&def?.kind==='clip'){const existing=c.children.get(op.depth);bounds=existing?.bounds();}if(bounds){const r=transformRect(bounds,op.matrix!);hit=hit?[Math.min(hit[0],r[0]),Math.min(hit[1],r[1]),Math.max(hit[0]+hit[2],r[0]+r[2])-Math.min(hit[0],r[0]),Math.max(hit[1]+hit[3],r[1]+r[3])-Math.min(hit[1],r[1])]:r;}}if(hit)b=hit;}
      if(p.x>=b[0]&&p.x<=b[0]+b[2]&&p.y>=b[1]&&p.y<=b[1]+b[3])return c;
    };return visit(this.engine.root);
  }
  private coords(e:PointerEvent){const r=this.app.canvas.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*this.app.screen.width,y:(e.clientY-r.top)/r.height*this.app.screen.height};}
  private move(e:PointerEvent){this.engine.drain();const p=this.coords(e);this.engine.movePointer(p);const h=this.hit(p.x,p.y);if(h!==this.hover){if(this.hover){this.engine.event(this.hover,'rollOut');if(this.hover.def.kind==='button')this.hover.buttonState('up');}if(h){this.engine.event(h,'rollOver');if(h.def.kind==='button')h.buttonState('over');}this.hover=h;}this.engine.drain();this.app.canvas.style.cursor=h?'pointer':'default';}
  private attachInput(){const canvas=this.app.canvas;canvas.addEventListener('pointermove',e=>this.move(e));canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);this.move(e);this.pressed=this.hover;if(this.pressed){this.engine.event(this.pressed,'press');if(this.pressed.def.kind==='button')this.pressed.buttonState('down');}});canvas.addEventListener('pointerup',e=>{this.move(e);const c=this.pressed;if(c){if(c.def.kind==='edit'&&!c.def.readOnly)this.engine.onTextInput?.(c);else if(c===this.hover)this.engine.event(c,'release');else this.engine.event(c,'releaseOutside');if(c.def.kind==='button'&&!c.removed)c.buttonState(c===this.hover?'over':'up');}this.pressed=undefined;this.engine.drain();this.render();});canvas.addEventListener('pointercancel',()=>{if(this.pressed)this.engine.event(this.pressed,'releaseOutside');this.pressed=undefined;this.engine.drag=undefined;});canvas.addEventListener('pointerleave',()=>{if(this.hover)this.engine.event(this.hover,'rollOut');this.hover=undefined;});}
}
