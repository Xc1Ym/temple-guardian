import { call, type NativeClip, type GameEngine } from './engine';

export const TRAINER_CODE='godmode';
export class TrainerCode {
  private buffer='';private at=0;
  feed(key:string,time:number,blocked=false){
    if(blocked||key.length!==1||!/^[a-z]$/i.test(key)){this.reset();return false;}
    if(time-this.at>5000)this.buffer='';this.at=time;
    this.buffer=(this.buffer+key.toLowerCase()).slice(-TRAINER_CODE.length);
    if(this.buffer===TRAINER_CODE){this.reset();return true;}return false;
  }
  reset(){this.buffer='';this.at=0;}
}

export interface TrainerOptions {
  lockMoney:boolean;lockMiracles:boolean;money:number;miracles:number;
  templeInvincible:boolean;facilitiesInvincible:boolean;freeCosts:boolean;oneHit:boolean;
  unlockFacilities:boolean;freezeCountdown:boolean;
  attack:number;range:number;fireRate:number;enemySpeed:number;gameSpeed:number;
}
export const defaultTrainerOptions=():TrainerOptions=>({lockMoney:false,lockMiracles:false,money:999999,miracles:999999,templeInvincible:false,facilitiesInvincible:false,freeCosts:false,oneHit:false,unlockFacilities:false,freezeCountdown:false,attack:1,range:1,fireRate:1,enemySpeed:1,gameSpeed:1});
export interface TrainerValues {money:number;miracles:number;score:number;templeHP:number;templeMaxHP:number}
const bounded=(value:number,min:number,max:number,integer=false)=>{
  if(!Number.isFinite(value)||value<min||value>max||(integer&&!Number.isInteger(value)))throw new Error(`请输入 ${min}～${max} 的${integer?'整数':'数值'}`);
  return value;
};

export class GameTrainer {
  options=defaultTrainerOptions();private inGame=false;private armed=new WeakSet<NativeClip>();private cleared=new WeakSet<NativeClip>();
  constructor(public engine:GameEngine){}
  get running(){return this.engine.root.props.GameStar===true;}
  get active(){const o=this.options;return o.lockMoney||o.lockMiracles||o.templeInvincible||o.facilitiesInvincible||o.freeCosts||o.oneHit||o.unlockFacilities||o.freezeCountdown||o.attack!==1||o.range!==1||o.fireRate!==1||o.enemySpeed!==1||o.gameSpeed!==1;}
  private requireGame(){if(!this.running)throw new Error('请先开始游戏');}
  private temple():NativeClip|undefined{return this.engine.root.child('M_DiTu8')?.child('M_GongDian');}
  facilities():NativeClip[]{return ['M_SeSiQang','M_SeSiQangB'].flatMap(name=>[...(this.engine.root.child(name)?.children.values()||[])]).filter(c=>!c.removed&&Number.isFinite(c.props.MaxHP));}
  enemies():NativeClip[]{return [...(this.engine.root.child('M_DiTu0')?.children.values()||[])].filter(c=>!c.removed&&c.props.NowDiRenID!==undefined);}
  private friendly(c:NativeClip){return c.parent===this.engine.root.child('M_SeSiQang')||c.parent===this.engine.root.child('M_SeSiQangB');}
  private enemy(c:NativeClip){return c.parent===this.engine.root.child('M_DiTu0')&&c.props.NowDiRenID!==undefined;}
  configure(patch:Partial<TrainerOptions>){
    this.requireGame();const next={...this.options,...patch};
    for(const key of ['lockMoney','lockMiracles','templeInvincible','facilitiesInvincible','freeCosts','oneHit','unlockFacilities','freezeCountdown'] as const)if(typeof next[key]!=='boolean')throw new Error('加持开关无效');
    bounded(next.money,0,1e9,true);bounded(next.miracles,0,1e9,true);bounded(next.attack,1,1000);bounded(next.range,1,50);bounded(next.fireRate,1,100);bounded(next.enemySpeed,0,1);bounded(next.gameSpeed,.25,8);
    if(this.options.lockMoney)this.engine.root.props.Money=this.options.money;if(this.options.lockMiracles)this.engine.root.props.SenJiDian=this.options.miracles;
    if(this.options.templeInvincible&&!next.templeInvincible)this.healTemple();
    if(!this.options.templeInvincible&&next.templeInvincible)this.healTemple();
    if(this.options.facilitiesInvincible&&!next.facilitiesInvincible)this.healFacilities();
    const unlocked=this.options.unlockFacilities;this.options=next;
    if(next.lockMoney)this.engine.root.props.Money=next.money;if(next.lockMiracles)this.engine.root.props.SenJiDian=next.miracles;
    if(unlocked&&!next.unlockFacilities)this.restoreCounts();
    this.install();this.refresh();
  }
  private install(){
    this.engine.readOverride=this.active?(c,k,v)=>this.read(c,k,v):undefined;
    this.engine.writeOverride=this.active?(c,k,v)=>this.write(c,k,v):undefined;
  }
  private read(c:NativeClip,k:string,v:any):any {
    if(!this.running)return v;const o=this.options,r=this.engine.root;
    if(c===r){if(k==='Money'&&o.lockMoney)return o.money;if(k==='SenJiDian'&&o.lockMiracles)return o.miracles;if(o.unlockFacilities&&(k==='SenLongCount'||k==='LieRingCount'))return 0;}
    if(k==='HP'&&((o.templeInvincible&&c===this.temple())||(o.facilitiesInvincible&&this.friendly(c))))return c.props.MaxHP;
    if(k==='HPmini'&&o.facilitiesInvincible&&this.friendly(c))return c.props.MaxHP*r.props.SeSiHPmini;
    if(this.friendly(c)&&Number.isFinite(v)){
      if(k==='Attack')return v*o.attack;if(k==='FanWei')return v*o.range;if(k==='FaSieJJ')return v/o.fireRate;
    }
    if(this.enemy(c)){if(k==='TemSudu'&&Number.isFinite(v))return v*o.enemySpeed;if(k==='HudunNum'&&o.oneHit)return 0;}
    if(o.freeCosts){
      if(k==='SJMoney'||k==='SJSenJiDian')return 0;
      if((k==='Money'||k==='SenJiDian')&&c.name.startsWith('M_ShowSeSi'))return 0;
      if(k==='MoneyZ'&&c.props.Myix!==undefined)return 0;
    }
    return v;
  }
  private write(c:NativeClip,k:string,v:any):any {
    if(!this.running)return v;
    if(c===this.engine.root){if(k==='Money'&&this.options.lockMoney)return this.options.money;if(k==='SenJiDian'&&this.options.lockMiracles)return this.options.miracles;}
    if(this.options.freeCosts&&c===this.engine.root&&(k==='Money'||k==='SenJiDian')&&Number.isFinite(v)&&v<c.props[k])return c.props[k];
    if(this.options.oneHit&&k==='HP'&&this.enemy(c)&&this.armed.has(c)&&!c.props.Die&&Number.isFinite(v)&&v<c.props.HP)return 0;
    return v;
  }
  applyValues(values:TrainerValues){
    this.requireGame();bounded(values.money,0,1e9,true);bounded(values.miracles,0,1e9,true);bounded(values.score,0,1e9,true);bounded(values.templeMaxHP,1,1e6,true);bounded(values.templeHP,1,values.templeMaxHP,true);
    const r=this.engine.root.props,t=this.temple();if(!t)throw new Error('神殿不存在');if(t.props.Die)this.healTemple();
    r.Money=values.money;r.SenJiDian=values.miracles;r.AllDeFen=values.score;t.props.MaxHP=values.templeMaxHP;t.props.HP=values.templeHP;
    this.options.money=values.money;this.options.miracles=values.miracles;this.refresh();
  }
  setResources(money:number,miracles:number){this.requireGame();bounded(money,0,1e9,true);bounded(miracles,0,1e9,true);this.engine.root.props.Money=money;this.engine.root.props.SenJiDian=miracles;this.options.money=money;this.options.miracles=miracles;this.refresh();}
  healTemple(){const t=this.temple();if(t){const max=t.props.MaxHP;if(t.props.Die){t.gotoAndStop('a'+t.props.Level);this.engine.drain();t.props.MaxHP=max;t.props.Die=false;}t.props.HP=max;}}
  healFacilities(){for(const c of this.facilities()){c.props.HP=c.props.MaxHP;c.props.HPmini=c.props.MaxHP*this.engine.root.props.SeSiHPmini;}}
  healAll(){this.requireGame();this.healTemple();this.healFacilities();this.refresh();}
  setResearch(levels:number[]){
    this.requireGame();if(levels.length!==5)throw new Error('研究等级无效');levels.forEach(n=>bounded(n,0,6,true));const r=this.engine.root.proxy;
    r.All_Attack=[1,1.4,1.8,2.2,2.6,3,3.4][levels[0]];r.All_FanWei=1+levels[1]*.1;r.All_MaxHP=[1,1.3,1.6,1.9,2.2,2.5,2.8][levels[2]];r.AllSen_FanWei=1+levels[3]*.1;r.BuyLu=1-levels[4]*.05;r.SellLu=.7+levels[4]*.05;
    for(let i=0;i<5;i++){const c=r['M_RuanJiao'+(i+1)],n=levels[i]+1;c.Level=levels[i];c.SJMoney=[n*150+(n-1)*220,n*130+(n-1)*100,n*120+(n-1)*80,n*500+(n-1)*66,n*99][i];c.SJSenJiDian=i===3?n*120+(n-1)*50:0;}
    call(r,'F_UpdateSeSi',[9]);for(const c of this.facilities()){c.props.HP=Math.max(1,c.props.HP);c.props.HPmini=Math.max(3,c.props.HPmini);}this.refresh();
  }
  maxFacilities(){
    this.requireGame();for(const c of this.facilities()){const p=c.proxy;for(let n=0;n<6&&p.M_Ta&&p.LevelB>p.Level;n++){const level=p.Level;p.M_Ta.gotoAndStop('a'+p.LevelB);this.engine.drain();if(p.Level===level)break;}}
    call(this.engine.root.proxy,'F_UpdateSeSi',[9]);this.healFacilities();this.refresh();
  }
  clearObstacles(){
    this.requireGame();const grid=this.engine.root.proxy.M_DiTu1?.__clip;
    for(const c of grid?.children.values()||[])if(c.props.DiTuTyle===0&&!c.props.SeSiSetPD){c.proxy.gotoAndStop('a2');c.props.SeSiSetPD=true;}
    this.engine.drain();this.refresh();
  }
  clearWave(){
    this.requireGame();const r=this.engine.root.proxy;if(r.B_GuanStar.enabled)call(r,'F_StarArrFun',[]);this.engine.drain();
    for(const c of this.enemies()){this.cleared.add(c);c.props.StarPD=true;if(c.props.UpdateNPD)c.props.HP=0;}
    this.refresh();
  }
  jumpWave(wave:number){
    this.requireGame();bounded(wave,1,50,true);const r=this.engine.root.proxy;
    for(const c of [...(r.M_ShowCang?.__clip.children.values()||[])])c.removeMovieClip();
    for(const c of this.facilities()){c.proxy.M_Selled?.removeMovieClip();c.proxy.M_FanGiang?.gotoAndStop('a0');}
    call(r,'F_UpdateCang',[0]);for(const c of [...(r.M_GuDanQang?.__clip.children.values()||[])])c.removeMovieClip();
    r.NowGuanSu=wave;call(r,'F_UpdateVar',[0]);r.DiRenGoPD=false;r.B_GuanStar.enabled=true;r.B_GuanStar.__clip.color=[1,1,1,1,0,0,0,0];this.engine.drain();
    if(this.temple()?.props.Die||this.temple()?.props.HP<=0)this.healTemple();
    r.GamePause=false;this.refresh();
  }
  private restoreCounts(){const p=this.engine.root.props,f=this.facilities();p.SenLongCount=f.filter(c=>c.props.SeSiID===6).length;p.LieRingCount=f.filter(c=>c.props.SeSiID===5).length;}
  reset(){
    if(this.running){if(this.options.lockMoney)this.engine.root.props.Money=this.options.money;if(this.options.lockMiracles)this.engine.root.props.SenJiDian=this.options.miracles;}
    if(this.options.templeInvincible)this.healTemple();if(this.options.facilitiesInvincible)this.healFacilities();if(this.options.unlockFacilities)this.restoreCounts();
    this.options=defaultTrainerOptions();this.engine.readOverride=undefined;this.engine.writeOverride=undefined;this.refresh();
  }
  refresh(updateButtons=true){
    const r=this.engine.root.proxy;if(!this.running)return;
    // The source callback recreates the HUD number clips. Complete their
    // initialization on explicit edits; normal steps already update the HUD.
    if(updateButtons){call(r,'F_UpdateButton',[]);this.engine.drain();}
    if(this.options.unlockFacilities)for(const id of [1,2,3,4,5,6,101,102,201,202]){const b=r['B_ShowSeSi'+id];if(b){b.enabled=true;b.__clip.color=[1,1,1,1,0,0,0,0];}const cover=r['B2_ShowSeSi'+id];if(cover)cover._visible=false;}
    const t=this.temple();if(t)r.SDHPstr=t.proxy.HP+' / '+t.proxy.MaxHP;
    for(const c of this.facilities()){const ring=c.proxy.M_FanGiang;if(ring&&Number.isFinite(c.props.FanWei)){const range=c.proxy.FanWei;ring._width=range*2;ring._height=range*2;}}
  }
  step(count=1){for(let n=0;n<count;n++){
    if(!this.running&&this.inGame){this.reset();this.inGame=false;}
    if(this.running&&this.active){const r=this.engine.root.props;if(this.options.lockMoney)r.Money=this.options.money;if(this.options.lockMiracles)r.SenJiDian=this.options.miracles;if(this.options.freezeCountdown&&this.engine.root.proxy.B_GuanStar.enabled)r.NowTimeZL=new this.engine.globals.Date();for(const c of this.enemies())this.armed.add(c);}
    this.engine.step();
    for(const c of this.enemies())if(this.cleared.has(c)&&c.props.UpdateNPD){c.props.HP=0;c.props.StarPD=true;}
    if(this.running){this.inGame=true;if(this.active){for(const c of this.enemies())this.armed.add(c);this.refresh(false);}}
    else if(this.inGame){this.reset();this.inGame=false;}
  }}
}
