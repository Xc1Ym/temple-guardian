import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { GameEngine, Persistence } from './engine';
import { GameTrainer, TrainerCode } from './trainer';

const data=JSON.parse(readFileSync(new URL('../public/game-data.json',import.meta.url),'utf8'));
function scene(mode:1|2|3=1){
  const e=new GameEngine(data,new Persistence(),()=>.5),t=new GameTrainer(e),r=e.root.proxy;
  e.dispatch({type:'start',map:0,mode});t.step();return {e,t,r};
}
function arrow(mode:1|2|3=1){
  const s=scene(mode),{e,t,r}=s;r.Money=10000;r.SenJiDian=10000;
  const cell=[...r.M_DiTu1.__clip.children.values()].find(c=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&c.props.SeSi===''&&Math.hypot(c.read('_x')-r.M_DiTu2.M_RuKo._x,c.read('_y')-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.read('_x')-r.M_DiTu8.M_GongDian._x,c.read('_y')-r.M_DiTu8.M_GongDian._y)>=48)!;
  e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});t.step();
  const tower=t.facilities()[0].proxy;return {...s,tower};
}
function target(e:GameEngine,t:GameTrainer,tower:any){
  e.dispatch({type:'wave'});
  for(const c of t.enemies())c.props.onEnterFrame=()=>{};
  const enemy=t.enemies()[0].proxy;enemy._x=tower._x;enemy._y=tower._y+40;enemy._visible=true;enemy.Die=false;enemy.HP=10000;enemy.MaxHP=10000;return enemy;
}

describe('Trainer entry code',()=>{
  it('accepts both cases without Enter, with a rolling prefix',()=>{
    const c=new TrainerCode();let opened=0;for(const key of 'xxxGoDmOdE')if(c.feed(key,100))opened++;expect(opened).toBe(1);
    expect(c.feed('e',101)).toBe(false);
  });
  it('rejects slow, interrupted, composing or input-field sequences',()=>{
    const c=new TrainerCode();for(const key of 'god')c.feed(key,100);expect(c.feed('m',6000)).toBe(false);for(const key of 'ode')expect(c.feed(key,6010)).toBe(false);
    for(const key of 'god')c.feed(key,7000);c.feed('m',7001,true);for(const key of 'ode')expect(c.feed(key,7002)).toBe(false);
    for(const key of 'god')c.feed(key,8000);c.feed('ArrowLeft',8001);for(const key of 'mode')expect(c.feed(key,8002)).toBe(false);
  });
});

describe('Optional per-game trainer',()=>{
  it('leaves the normal fixed-step game unchanged when disabled',()=>{
    const {e,t}=scene(),control=scene().e;e.dispatch({type:'wave'});control.dispatch({type:'wave'});t.step(160);control.step(160);
    expect(e.snapshot()).toEqual(control.snapshot());expect(e.readOverride).toBeUndefined();expect(e.writeOverride).toBeUndefined();expect(e.errors).toEqual([]);
  });
  it('keeps original HUD digit clips initialized after edits, jumping and sustained cheats',()=>{
    const {e,t,r}=scene();t.configure({templeInvincible:true});t.jumpWave(31);t.applyValues({money:1000,miracles:1000,score:12345,templeHP:50,templeMaxHP:50});
    const digits=()=>[r.M_ShowCang.M_Number1.__clip.children.size,r.M_ShowCang.M_Number2.__clip.children.size];expect(digits()).toEqual([2,5]);
    for(let n=0;n<10;n++){t.step();expect(digits()).toEqual([2,5]);}expect(e.pending).toHaveLength(0);expect(e.errors).toEqual([]);
  });
  it('validates all edited values before mutating any game state',()=>{
    const {e,t}=scene(),before=e.snapshot();expect(()=>t.applyValues({money:123,miracles:456,score:789,templeHP:NaN,templeMaxHP:100})).toThrow();expect(e.snapshot()).toEqual(before);
    t.applyValues({money:123,miracles:456,score:789,templeHP:80,templeMaxHP:100});expect(e.snapshot()).toMatchObject({money:123,miracles:456,score:789,templeHP:80,templeMaxHP:100});expect(()=>t.configure({attack:Infinity})).toThrow();expect(t.options.attack).toBe(1);
  });
  it('locks actual resources across deductions and rewards',()=>{
    const {e,t,r}=scene();t.configure({lockMoney:true,lockMiracles:true,money:1234,miracles:5678});r.Money-=800;r.SenJiDian-=300;t.step();expect(e.snapshot()).toMatchObject({money:1234,miracles:5678});r.Money+=500;r.SenJiDian+=100;t.step();expect(e.root.props.Money).toBe(1234);expect(e.root.props.SenJiDian).toBe(5678);expect(e.errors).toEqual([]);
  });
  it('makes real construction, upgrades and research free at zero resources',()=>{
    const {e,t,r,tower}=arrow();r.Money=0;r.SenJiDian=0;t.configure({freeCosts:true});
    e.event(tower.B_Button.__clip,'release');t.step();e.dispatch({type:'upgrade'});t.step(2);expect(tower.Level).toBe(2);expect(r.Money).toBe(0);
    e.dispatch({type:'research',id:1});expect(r.M_RuanJiao1.Level).toBe(1);expect(r.Money).toBe(0);
    const cell=[...r.M_DiTu1.__clip.children.values()].find(c=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&c.props.SeSi===''&&Math.hypot(c.read('_x')-r.M_DiTu2.M_RuKo._x,c.read('_y')-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.read('_x')-r.M_DiTu8.M_GongDian._x,c.read('_y')-r.M_DiTu8.M_GongDian._y)>=48)!;
    e.dispatch({type:'select',facility:2});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});t.step();expect(t.facilities()).toHaveLength(2);expect(r.Money).toBe(0);expect(r.SenJiDian).toBe(0);expect(e.errors).toEqual([]);
  });
  it('protects the temple against lethal real enemy waves and heals on disable',()=>{
    const {e,t,r}=scene();t.configure({templeInvincible:true});e.dispatch({type:'wave'});t.step(4000);expect(e.snapshot().templeHP).toBe(50);expect(r.M_ShowCang.M_DHKOver?.GoToID).not.toBe(3);
    r.M_DiTu8.M_GongDian.HP=-9999;expect(e.snapshot().templeHP).toBe(50);t.configure({templeInvincible:false});expect(e.snapshot().templeHP).toBe(50);expect(e.errors).toEqual([]);
  },15000);
  it('keeps durability-mode facilities alive while actually firing',()=>{
    const {e,t,tower}=arrow(3);t.configure({facilitiesInvincible:true});tower.HPmini=2;tower.HP=1;const enemy=target(e,t,tower);t.step(300);
    expect(enemy.HP).toBeLessThan(10000);expect(tower.__clip.removed).toBe(false);expect(tower.HP).toBe(tower.MaxHP);expect(tower.HPmini).toBe(tower.MaxHP*3);t.configure({facilitiesInvincible:false});expect(tower.HPmini).toBe(150);expect(e.errors).toEqual([]);
  });
  it.each([[1,12],[2,24],[10,120]])('attack factor %i changes actual projectile damage to %i', (attack,damage)=>{
    const {e,t,tower}=arrow();t.configure({attack});const enemy=target(e,t,tower);
    for(let n=0;n<140&&enemy.HP===10000;n++)t.step();expect(enemy.HP).toBe(10000-damage);expect(e.snapshot().facilities[0].attack).toBe(12*attack);expect(e.errors).toEqual([]);
  });
  it('increases actual firing rate and restores the original interval',()=>{
    const normal=arrow(),fast=arrow();fast.t.configure({fireRate:10});const a=target(normal.e,normal.t,normal.tower),b=target(fast.e,fast.t,fast.tower);normal.t.step(280);fast.t.step(280);
    expect(b.HP).toBeLessThan(a.HP);fast.t.reset();expect(fast.tower.FaSieJJ).toBe(normal.tower.FaSieJJ);expect(fast.e.errors).toEqual([]);
  });
  it('extends actual target acquisition and the visible range circle, then restores both',()=>{
    const normal=arrow(),extended=arrow();extended.t.configure({range:3});const a=target(normal.e,normal.t,normal.tower),b=target(extended.e,extended.t,extended.tower);a._y=normal.tower._y+160;b._y=extended.tower._y+160;
    normal.t.step(180);extended.t.step(180);expect(a.HP).toBe(10000);expect(b.HP).toBeLessThan(10000);extended.e.event(extended.tower.B_Button.__clip,'release');extended.t.step();expect(extended.tower.M_FanGiang._width).toBeCloseTo(480);extended.t.reset();expect(extended.tower.FanWei).toBe(80);expect(extended.tower.M_FanGiang._width).toBeCloseTo(160);expect(extended.e.errors).toEqual([]);
  });
  it('kills a shielded enemy with the first actual projectile hit',()=>{
    const {e,t,tower}=arrow();t.configure({oneHit:true});const enemy=target(e,t,tower);enemy.HudunNum=10;
    for(let n=0;n<140&&enemy.HP===10000;n++)t.step();expect(enemy.HP).toBe(0);expect(e.errors).toEqual([]);
  });
  it('freezes actual enemy movement without changing the source speed',()=>{
    const {e,t}=scene();t.configure({enemySpeed:0});e.dispatch({type:'wave'});t.step(60);const enemy=t.enemies().find(c=>c.props.GoStar)!,before=[enemy.read('_x'),enemy.read('_y')],raw=enemy.props.Sudu;t.step(40);expect([enemy.read('_x'),enemy.read('_y')]).toEqual(before);expect(raw).toBeGreaterThan(0);t.configure({enemySpeed:1});t.step(40);expect([enemy.read('_x'),enemy.read('_y')]).not.toEqual(before);expect(e.errors).toEqual([]);
  });
  it.each([2,3])('freezes the preparation countdown in mode %i',mode=>{
    const {e,t,r}=scene(mode as 2|3);t.configure({freezeCountdown:true});t.step(1000);expect(r.B_GuanStar.enabled).toBe(true);t.configure({freezeCountdown:false});t.step(1000);expect(r.B_GuanStar.enabled).toBe(false);expect(e.errors).toEqual([]);
  },15000);
  it.each([1,2,3])('applies all research and highest tower tier in mode %i',mode=>{
    const {e,t,r,tower}=arrow(mode as 1|2|3);t.setResearch([6,6,6,6,6]);expect(tower.Attack).toBe(41);expect(tower.FanWei).toBe(128);expect(tower.MaxHP).toBe(140);expect(r.BuyLu).toBeCloseTo(.7);if(mode===3)expect(tower.HPmini).toBe(420);
    t.maxFacilities();expect(tower.Level).toBe(3);expect(tower.LevelB).toBe(0);expect(tower.HP).toBe(tower.MaxHP);expect(r.Money).toBe(9991);expect(e.errors).toEqual([]);
  });
  it('unlocks late facilities and removes count restrictions until reset',()=>{
    const {e,t,r}=scene();t.configure({unlockFacilities:true});expect(r.B_ShowSeSi6.enabled).toBe(true);r.SenLongCount=2;expect(r.SenLongCount).toBe(0);t.reset();expect(r.B_ShowSeSi6.enabled).toBe(false);expect(r.SenLongCount).toBe(0);expect(e.errors).toEqual([]);
  });
  it('builds three real dragon statues in the first chapter and restores their count on disable',()=>{
    const {e,t,r}=scene();t.configure({unlockFacilities:true,freeCosts:true});r.Money=0;
    const cells=[...r.M_DiTu1.__clip.children.values()].filter(c=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&c.props.SeSi===''&&Math.hypot(c.read('_x')-r.M_DiTu2.M_RuKo._x,c.read('_y')-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.read('_x')-r.M_DiTu8.M_GongDian._x,c.read('_y')-r.M_DiTu8.M_GongDian._y)>=48&&Math.hypot(c.read('_x')-r.M_DiTu8.M_GongDian._x,c.read('_y')-r.M_DiTu8.M_GongDian._y)<=r.M_DiTu8.M_GongDian.FanWei).slice(0,3);
    expect(cells).toHaveLength(3);for(const cell of cells){e.dispatch({type:'select',facility:6});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});t.step();}
    expect(t.facilities().filter(c=>c.props.SeSiID===6)).toHaveLength(3);t.configure({unlockFacilities:false});expect(r.SenLongCount).toBe(3);expect(r.B_ShowSeSi6.enabled).toBe(false);expect(e.errors).toEqual([]);
  });
  it('clears obstacles without touching the road or occupied grass',()=>{
    const {e,t,r,tower}=arrow(),grid=[...r.M_DiTu1.__clip.children.values()],before=tower.DiTuObject.SeSi;t.clearObstacles();expect(grid.filter(c=>c.props.DiTuTyle===0).every(c=>c.props.SeSiSetPD)).toBe(true);expect(tower.DiTuObject.SeSi).toBe(before);expect(r.M_DiTu2.M_RuKo).toBeTruthy();expect(e.errors).toEqual([]);
  });
  it.each([[1,1],[30,2],[31,1],[50,4]])('clears wave %i using original death, rewards and result %i', (wave,result)=>{
    const {e,t,r}=scene();t.jumpWave(wave);const money=r.Money;t.clearWave();for(let n=0;n<400&&!r.M_ShowCang.M_DHKOver;n++)t.step();expect(r.DiRenMaxZL).toBe(0);expect(r.AllDeFen).toBeGreaterThan(0);expect(r.Money).toBeGreaterThan(money);expect(r.M_ShowCang.M_DHKOver?.GoToID).toBe(result);expect(e.errors).toEqual([]);
  });
  it.each([30,31,50])('jumps to wave %i while preserving the map, facilities, resources and research',wave=>{
    const {e,t,r,tower}=arrow();t.setResearch([1,2,3,4,5]);e.dispatch({type:'wave'});t.step(10);const money=r.Money;t.jumpWave(wave);expect(r.NowGuanSu).toBe(wave);expect(r.B_GuanStar.enabled).toBe(true);expect(t.enemies()).toHaveLength(0);expect(t.facilities()[0].proxy).toBe(tower);expect(r.Money).toBe(money);expect(r.M_RuanJiao5.Level).toBe(5);e.dispatch({type:'wave'});expect(t.enemies()).toHaveLength(wave<=30?7:wave-23);expect(e.errors).toEqual([]);
  });
  it('resets all sustained cheats on leaving the current game',()=>{
    const {e,t}=scene();t.configure({freeCosts:true,attack:100,gameSpeed:8});e.dispatch({type:'quit'});t.step();expect(t.active).toBe(false);expect(e.readOverride).toBeUndefined();expect(e.writeOverride).toBeUndefined();e.dispatch({type:'start',map:0,mode:1});t.step();expect(e.snapshot().money).toBe(80);expect(e.errors).toEqual([]);
  });
  it('revives a fallen temple on retrying a wave while retaining its edited maximum health',()=>{
    const {e,t,r}=scene(),temple=r.M_DiTu8.M_GongDian;temple.gotoAndStop('Die');e.drain();temple.HP=0;temple.MaxHP=1000;r.GamePause=true;t.setResources(999999,999999);expect(r.Money).toBe(999999);t.jumpWave(1);expect(temple.Die).toBe(false);expect(temple.HP).toBe(1000);expect(temple.MaxHP).toBe(1000);expect(r.SDHPstr).toBe('1000 / 1000');expect(e.errors).toEqual([]);
  });
});
