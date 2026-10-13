import './style.css';
import { GameEngine, Persistence, type GameData, type NativeClip } from './engine';
import { GameRenderer, type AssetManifest } from './renderer';
import { AudioPlayer } from './audio';
import { assetUrl } from './asset-url';

const app=document.querySelector<HTMLDivElement>('#app')!;
const escapeHTML=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const modeNames=['','回合制','限时制','耐久制'];
let engine:GameEngine,renderer:GameRenderer,audio:AudioPlayer,save:Persistence;
let stopped=false,lastFrame=0,accumulator=0;
let textInput:{clip:NativeClip;input:HTMLInputElement}|undefined;

// Keep feedback inside the original single-line message strip.
function notice(text:string){engine.root.props.ButtonMess=text.split('。').slice(0,2).join('。');}

// The original ranking button opened a now unavailable external website.
function ranking(){
  if(document.querySelector('dialog'))return;
  const paused=!!engine.root.props.GameStar&&!engine.root.props.GamePause;
  if(paused)engine.root.props.GamePause=true;
  const rows=[...save.data.scores].sort((a,b)=>b.score-a.score),dialog=document.createElement('dialog');
  dialog.innerHTML=`<form method="dialog"><h2>本机排行榜</h2><label>玩法<select id="rank-mode"><option value="0">全部玩法</option>${[1,2,3].map(v=>`<option value="${v}">${modeNames[v]}</option>`).join('')}</select></label><label>地图<select id="rank-map"><option value="-1">全部地图</option>${Array.from({length:11},(_,i)=>`<option value="${i}">${i===10?'自编地图':i+1}</option>`).join('')}</select></label><div class="table-scroll"><table><thead><tr><th>玩家</th><th>总分</th><th>地图</th><th>玩法</th><th>关</th></tr></thead><tbody id="scores"></tbody></table></div><button>返回游戏</button></form>`;
  const update=()=>{
    const mode=Number((dialog.querySelector('#rank-mode') as HTMLSelectElement).value),map=Number((dialog.querySelector('#rank-map') as HTMLSelectElement).value);
    dialog.querySelector('#scores')!.innerHTML=rows.filter(r=>(!mode||r.mode===mode)&&(map===-1||r.map===map)).map(s=>`<tr><td>${escapeHTML(s.name)}</td><td>${s.score}</td><td>${s.map===10?'自编':s.map+1}</td><td>${modeNames[s.mode]}</td><td>${s.wave}</td></tr>`).join('')||'<tr><td colspan="5">暂无成绩</td></tr>';
  };
  dialog.querySelectorAll('select').forEach(e=>e.addEventListener('change',update));
  dialog.addEventListener('close',()=>{if(paused&&!document.hidden)engine.root.props.GamePause=false;dialog.remove();lastFrame=performance.now();accumulator=0;});
  document.body.append(dialog);update();dialog.showModal();
}

function inputText(clip:NativeClip){
  if(textInput?.clip===clip){textInput.input.focus();return;}
  textInput?.input.blur();
  const input=document.createElement('input');input.className='native-text-input';input.type='text';input.autocomplete='off';input.spellcheck=false;
  input.setAttribute('aria-label','英文或拼音');input.maxLength=clip.def.maxLength||20;input.value=clip.textValue();
  input.addEventListener('input',()=>{input.value=input.value.replace(/[^a-zA-Z0-9 _-]/g,'');clip.write('text',input.value);});
  input.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();input.blur();}});
  input.addEventListener('blur',()=>{input.remove();if(textInput?.input===input)textInput=undefined;});
  textInput={clip,input};renderer.host.append(input);updateInput();input.focus();input.select();
}
function updateInput(){
  if(!textInput)return;
  const {clip,input}=textInput;
  for(let parent:NativeClip|null=clip;parent;parent=parent.parent)if(parent.removed||parent.read('_visible')===false){input.blur();return;}
  const bounds=clip.getBounds(engine.root.proxy),scale=renderer.app.canvas.getBoundingClientRect().width/engine.data.width;
  Object.assign(input.style,{left:bounds.xMin/engine.data.width*100+'%',top:bounds.yMin/engine.data.height*100+'%',width:(bounds.xMax-bounds.xMin)/engine.data.width*100+'%',height:(bounds.yMax-bounds.yMin)/engine.data.height*100+'%',fontSize:(clip.def.size||12)*scale+'px',color:'#'+(clip.def.color||0).toString(16).padStart(6,'0')});
}
function loop(time:number){
  if(stopped)return;
  const dt=Math.min(250,time-(lastFrame||time));lastFrame=time;
  if(!document.hidden&&!document.querySelector('dialog')){
    accumulator+=dt;while(accumulator>=1000/28){engine.step();accumulator-=1000/28;}
    renderer.render();updateInput();
  }
  requestAnimationFrame(loop);
}
async function initialize(){
  const [data,manifest]=await Promise.all([
    fetch(assetUrl('/game-data.json'),{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error('游戏数据加载失败');return r.json() as Promise<GameData>;}),
    fetch(assetUrl('/assets/manifest.json'),{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error('素材清单加载失败');return r.json() as Promise<AssetManifest>;})
  ]);
  const font=new FontFace(manifest.font.family,`url(${assetUrl(manifest.font.url)}?v=${manifest.font.subsetSha256||manifest.font.characterCount||'1'})`,{display:'block'});
  await font.load();document.fonts.add(font);await document.fonts.ready;
  const loading=app.querySelector('.loading')!;loading.textContent='正在加载原版游戏素材…';
  const host=document.createElement('div');host.id='game';host.setAttribute('aria-label','神殿守护者游戏画面');host.hidden=true;app.append(host);
  let storage:Storage|undefined;try{storage=localStorage;}catch{}
  save=new Persistence(storage);if(!storage)save.warning='浏览器禁止本地保存';
  audio=new AudioPlayer(manifest);engine=new GameEngine(data,save,Math.random,audio);engine.applyVolumes();
  renderer=new GameRenderer(engine,manifest,host);await renderer.initialize();
  engine.onNotice=notice;engine.onRanking=ranking;engine.onScore=()=>notice('成绩已保存到本机排行榜');engine.onTextInput=inputText;
  document.addEventListener('pointerdown',()=>{audio.unlock();audio.resume();});
  document.addEventListener('keydown',e=>{
    if(document.querySelector('dialog')||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement)return;
    if(['Space','KeyP','KeyS','KeyA','KeyH','KeyQ'].includes(e.code)){e.preventDefault();audio.unlock();engine.key(e.code==='Space'?32:e.code.charCodeAt(3));}
  });
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){if(engine.root.props.GameStar&&!engine.root.props.GamePause)engine.dispatch({type:'pause'});audio.suspend();}
    else{lastFrame=performance.now();accumulator=0;}
  });
  loading.remove();host.hidden=false;if(save.warning)notice(save.warning);requestAnimationFrame(loop);
}
function fail(error:unknown){
  stopped=true;console.error(error);
  app.innerHTML=`<div class="loading"><h1>游戏资源或中文字体加载失败</h1><p>请检查连接后重试。</p><p>${escapeHTML(error instanceof Error?error.message:String(error))}</p><button id="retry">重试</button></div>`;
  document.querySelector('#retry')!.addEventListener('click',()=>location.reload());
}
void initialize().catch(fail);
