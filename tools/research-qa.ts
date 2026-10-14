import { GameEngine, Persistence } from '/src/engine.ts';
import { GameRenderer } from '/src/renderer.ts';
const [data,manifest]=await Promise.all([fetch('/game-data.json').then(r=>r.json()),fetch('/assets/manifest.json').then(r=>r.json())]);
const font=await new FontFace(manifest.font.family,`url(${manifest.font.url})`).load();document.fonts.add(font);
const e=new GameEngine(data,new Persistence(),()=>.5),r=e.root.proxy;e.onNotice=t=>r.ButtonMess=t;
e.dispatch({type:'start',map:0,mode:1});e.step();r.Money=10000;r.SenJiDian=10000;r.F_UpdateButton();
const cell=[...r.M_DiTu1.__clip.children.values()].find(c=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&Math.hypot(c.read('_x')-r.M_DiTu2.M_RuKo._x,c.read('_y')-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.read('_x')-r.M_DiTu8.M_GongDian._x,c.read('_y')-r.M_DiTu8.M_GongDian._y)>=48);
e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});e.step();
const renderer=new GameRenderer(e,manifest,document.querySelector('#game'));await renderer.initialize();
let last=performance.now(),pending=0;
function loop(t:number){pending+=Math.min(250,t-last);last=t;while(pending>=1000/28){e.step();pending-=1000/28;}renderer.render();document.querySelector('#metrics').textContent=['研究等级：'+Array.from({length:5},(_,i)=>r['M_RuanJiao'+(i+1)].Level).join(' / '),'攻击×'+r.All_Attack+'；普通射程×'+r.All_FanWei+'；最大耐久×'+r.All_MaxHP+'；神御射程×'+r.AllSen_FanWei,'建造/升级费用：'+Math.round(r.BuyLu*100)+'%；出售价格：'+Math.round(r.SellLu*100)+'%',...e.walk().filter(c=>c.props.SeSiID!==undefined).map(c=>'设施 '+c.props.Title+'：攻击 '+Number(c.props.Attack).toFixed(1)+'；射程 '+Number(c.props.FanWei).toFixed(1)+'；耐久 '+c.props.HP+'/'+c.props.MaxHP),'运行错误：'+e.errors.length].join('\n');requestAnimationFrame(loop);}
requestAnimationFrame(loop);

document.addEventListener('keydown',event=>{if(['Space','KeyP','KeyS','KeyA','KeyH','KeyQ'].includes(event.code)){event.preventDefault();e.key(event.code==='Space'?32:event.code.charCodeAt(3));}});
