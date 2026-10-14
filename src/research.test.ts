import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { GameEngine, Persistence } from './engine';
import { GameRenderer } from './renderer';

const data=JSON.parse(readFileSync(new URL('../public/game-data.json',import.meta.url),'utf8'));
const tiers=JSON.parse(readFileSync(new URL('../tools/audit/original-baseline.json',import.meta.url),'utf8')).filter((c:any)=>c.kind==='facility');
const emptyGrass=(r:any)=>[...r.M_DiTu1.__clip.children.values()].find(c=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&c.props.SeSi===''&&Math.hypot(c.read('_x')-r.M_DiTu2.M_RuKo._x,c.read('_y')-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.read('_x')-r.M_DiTu8.M_GongDian._x,c.read('_y')-r.M_DiTu8.M_GongDian._y)>=48)!;
const withArrow=(mode:1|2|3=1)=>{
  const e=new GameEngine(data,new Persistence(),()=>.5),r=e.root.proxy;
  e.dispatch({type:'start',map:0,mode});e.step();r.Money=10000;r.SenJiDian=10000;
  const cell=emptyGrass(r);
  e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});e.step();
  const tower=e.walk().find(c=>c.props.SeSiID===1)!.proxy;
  return {e,r,tower};
};
const stationaryTarget=(e:GameEngine,tower:any)=>{
  e.dispatch({type:'wave'});const r=e.root.proxy;
  for(const c of r.M_DiTu0.__clip.children.values())c.props.onEnterFrame=()=>{};
  const enemy=r.M_DiTu0.M_DiRen1;enemy._x=tower._x;enemy._y=tower._y+40;enemy._visible=true;enemy.Die=false;enemy.HP=10000;enemy.MaxHP=10000;
  return enemy;
};

describe('Research propagation and original formulas',()=>{
  it('new towers retain the researched maximum durability',()=>{
    const {e,r}=withArrow();e.dispatch({type:'research',id:3});
    const tower=r.M_SeSiQang.attachMovie('Mf_SeSi1','testNewArrow',1000,{FanGiangV:false,Star:false});e.step(2);
    expect(tower.HP).toBe(65);expect(tower.MaxHP).toBe(65);
  });
  it('new god towers use god-range research rather than ordinary range research',()=>{
    const {e,r}=withArrow();e.dispatch({type:'research',id:4});
    const tower=r.M_SeSiQang.attachMovie('Mf_SeSi3','testNewGodTower',1000,{FanGiangV:false,Star:false});e.step(2);
    expect(r.AllSen_FanWei).toBe(1.1);expect(tower.FanWei).toBeCloseTo(104.5);
  });
  it('durability research persists when the tower first fires in durability mode',()=>{
    const {e,tower}=withArrow(3),before=tower.HPmini;e.dispatch({type:'research',id:3});const researched=tower.HPmini;stationaryTarget(e,tower);
    for(let i=0;i<140&&tower.HPmini===researched;i++)e.step();
    expect(researched).toBe(195);expect(tower.HPmini).toBe(researched-1);expect(tower.HPmini).toBeGreaterThan(before);expect(tower.HP).toBe(65);expect(e.errors).toEqual([]);
  });
  it.each([[0,12],[1,24],[2,40]])('attack research level %i deals the original projectile damage %i', (level,damage)=>{
    const {e,tower}=withArrow();for(let n=0;n<level;n++)e.dispatch({type:'research',id:1});const enemy=stationaryTarget(e,tower);
    for(let n=0;n<140&&enemy.HP===10000;n++)e.step();
    expect(enemy.HP).toBe(10000-damage);expect(e.errors).toEqual([]);
  });
  it('newly constructed towers inherit existing attack and range research',()=>{
    const {e,r}=withArrow();e.dispatch({type:'research',id:1});e.dispatch({type:'research',id:2});e.step();
    const cell=emptyGrass(r);
    e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});e.step();
    const towers=e.walk().filter(c=>c.props.SeSiID===1);
    expect(towers).toHaveLength(2);
    for(const tower of towers){expect(tower.props.Attack).toBeGreaterThan(12);expect(tower.props.FanWei).toBe(88);}
    expect(e.errors).toEqual([]);
  });
  it.each([1,2,3,4,5])('the actual research %i hit region targets its original upgrade button',id=>{
    const {e,r}=withArrow(),research=r['M_RuanJiao'+id];
    const renderer=Object.create(GameRenderer.prototype) as GameRenderer;renderer.engine=e;
    const p={x:0,y:0};research.B_Up.localToGlobal(p);
    const hit=renderer.hit(p.x,p.y)!;
    expect(hit?.id).toBe(research.B_Up.__clip.id);
    e.event(hit,'rollOver');hit.buttonState('over');e.event(hit,'press');hit.buttonState('down');e.event(hit,'release');hit.buttonState('over');e.step(28);
    expect(research.Level).toBe(1);expect(e.errors).toEqual([]);
  });
  it('updates an existing arrow tower when attack research is purchased',()=>{
    const {e,r,tower}=withArrow();expect(tower.Attack).toBe(12);
    e.dispatch({type:'research',id:1});e.step();
    expect(r.All_Attack).toBe(1.4);expect(tower.Attack).toBe(17);expect(e.errors).toEqual([]);
  });
  it('updates an existing arrow tower range when range research is purchased',()=>{
    const {e,r,tower}=withArrow();const base=tower.rFanWei;
    e.dispatch({type:'research',id:2});e.step();
    expect(r.All_FanWei).toBe(1.1);expect(tower.FanWei).toBe(Math.round(base*1.1));expect(e.errors).toEqual([]);
  });
  it('adds the original maximum-health difference to an existing damaged tower',()=>{
    const {e,r,tower}=withArrow();tower.HP=30;
    e.dispatch({type:'research',id:3});e.step();
    expect(r.All_MaxHP).toBe(1.3);expect(tower.MaxHP).toBe(65);expect(tower.HP).toBe(45);expect(e.errors).toEqual([]);
  });
  it('keeps partially spent durability and does not refill it on unrelated research',()=>{
    const {e,tower}=withArrow(3);tower.HPmini=146;tower.HP=49;
    e.dispatch({type:'research',id:3});expect(tower.HPmini).toBe(191);expect(tower.HP).toBe(64);
    e.dispatch({type:'research',id:1});expect(tower.HPmini).toBe(191);expect(tower.HP).toBe(64);
  });
  it('retains research through facility upgrades and synchronizes the durability counter',()=>{
    const {e,tower}=withArrow(3);e.dispatch({type:'research',id:1});e.dispatch({type:'research',id:3});
    e.event(tower.B_Button.__clip,'release');e.step();e.dispatch({type:'upgrade'});e.step(2);
    expect(tower.Level).toBe(2);expect(tower.Attack).toBe(45);expect(tower.MaxHP).toBe(117);expect(tower.HP).toBe(117);expect(tower.HPmini).toBe(351);expect(e.errors).toEqual([]);
  });
  it('does not apply ordinary range research to new god towers',()=>{
    const {e,r}=withArrow();e.dispatch({type:'research',id:2});
    const tower=r.M_SeSiQang.attachMovie('Mf_SeSi3','testNewGodTower',1000,{FanGiangV:false,Star:false});e.step(2);
    expect(tower.FanWei).toBe(95);
  });
  it('keeps temple upgrades separate from facility durability research',()=>{
    const {e,r}=withArrow();e.dispatch({type:'research',id:3});const temple=r.M_DiTu8.M_GongDian;
    expect(temple.MaxHP).toBe(50);e.event(temple.B_Button.__clip,'release');e.step();e.dispatch({type:'upgrade'});e.step();
    expect(temple.MaxHP).toBe(100);expect(temple.HP).toBe(100);expect(e.errors).toEqual([]);
  });
  it('discount research changes actual construction, upgrade and sale transactions',()=>{
    const {e,r,tower}=withArrow(),notices:string[]=[];e.onNotice=t=>notices.push(t);
    e.dispatch({type:'research',id:5});expect(notices.at(-1)).toContain('费用95%');
    const cell=emptyGrass(r),beforeBuild=r.Money;e.dispatch({type:'select',facility:2});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});e.step();expect(beforeBuild-r.Money).toBe(24);
    e.event(tower.B_Button.__clip,'release');e.step();const beforeUpgrade=r.Money;e.dispatch({type:'upgrade'});e.step(2);
    expect(beforeUpgrade-r.Money).toBe(24);const beforeSale=r.Money;e.dispatch({type:'sell'});e.step();
    expect(r.Money-beforeSale).toBe(26);expect(e.errors).toEqual([]);
  });
  it.each([1,2,3])('all five research branches reach six levels in original mode %i',mode=>{
    const {e,r,tower}=withArrow(mode as 1|2|3);r.Money=1000000;r.SenJiDian=1000000;
    for(let id=1;id<=5;id++)for(let level=1;level<=6;level++){
      e.step();const money=r.Money,miracles=r.SenJiDian;e.dispatch({type:'research',id});
      expect(r['M_RuanJiao'+id].Level).toBe(level);
      const cost=[0,level*150+(level-1)*220,level*130+(level-1)*100,level*120+(level-1)*80,level*500+(level-1)*66,level*99][id];
      expect(money-r.Money).toBe(cost);expect(miracles-r.SenJiDian).toBe(id===4?level*150+(level-1)*50:0);
    }
    expect(r.All_Attack).toBe(3.4);expect(r.All_FanWei).toBe(1.6);expect(r.All_MaxHP).toBe(2.8);expect(r.AllSen_FanWei).toBe(1.6);expect(r.BuyLu).toBeCloseTo(.7);expect(r.SellLu).toBe(1);
    expect(tower.Attack).toBe(41);expect(tower.FanWei).toBe(128);expect(tower.MaxHP).toBe(140);expect(tower.HP).toBe(140);if(mode===3)expect(tower.HPmini).toBe(420);
    e.step();const money=r.Money;e.dispatch({type:'research',id:1});expect(r.Money).toBe(money);expect(r.M_RuanJiao1.Level).toBe(6);expect(e.errors).toEqual([]);
  });
  it.each(tiers)('original facility $id tier $level keeps durability research on initialization',c=>{
    const {e,r}=withArrow();e.dispatch({type:'research',id:3});e.dispatch({type:'research',id:4});
    const parent=r[c.id>=200||c.id===101?'M_SeSiQangB':'M_SeSiQang'];
    const tower=parent.attachMovie('Mf_SeSi'+c.id,'tierResearchTest',1000,{FanGiangV:false,Star:false});e.step();
    if(c.level>1)tower.M_Ta.gotoAndStop('a'+c.level);e.step();
    const maxHP=Math.round(c.values.MaxHP*1.3);expect(tower.MaxHP).toBe(maxHP);expect(tower.HP).toBe(maxHP);
    if(tower.TaTyle===3||tower.TaTyle===4)expect(tower.FanWei).toBeCloseTo(c.values.FanWei*1.1);
    expect(e.errors).toEqual([]);
  });
});
