import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { GameEngine, Persistence, validMap } from './engine';
const data=JSON.parse(readFileSync(new URL('../public/game-data.json',import.meta.url),'utf8'));
const create=()=>new GameEngine(data,new Persistence(),()=>0.5);
const selectedArrow=()=>{
  const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});e.step();
  const cell=[...r.M_DiTu1.__clip.children.values()].find((c:any)=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&Math.hypot(c.proxy._x-r.M_DiTu2.M_RuKo._x,c.proxy._y-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.proxy._x-r.M_DiTu8.M_GongDian._x,c.proxy._y-r.M_DiTu8.M_GongDian._y)>=48)!;
  e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});const tower=e.walk().find(c=>c.props.SeSiID===1)!;e.event(tower.proxy.B_Button.__clip,'release');e.step();return e;
};
describe('Original game migration',()=>{
  it('reports upgrade costs, attribute changes and success for the original desktop callback',()=>{
    const e=selectedArrow(),notices:string[]=[];e.onNotice=t=>notices.push(t);const info=e.upgradeInfo()!;
    expect(info).toMatchObject({level:1,nextLevel:2,money:25,miracles:0,available:true});expect(info.changes).toContainEqual({label:'攻击力',from:12,to:32});expect(info.changes).toContainEqual({label:'攻击速度',from:10,to:12});
    const button=e.root.proxy.M_ShowCang.M_DHKSuSing.M_SenJiBan.B_SenJi.__clip;e.event(button,'release');e.step(2);
    expect(e.snapshot().money).toBe(46);expect(e.snapshot().facilities[0].level).toBe(2);expect(notices).toHaveLength(1);expect(notices[0]).toContain('升级成功：1级→2级');expect(notices[0]).toContain('消耗 25 金钱');expect(notices[0]).toContain('攻击力 12→32');expect(notices[0]).toContain('攻击速度 10→12');expect(e.root.proxy.M_ShowCang.M_DHKSuSing.MivObject.JianSuDu).toBe(12);expect(e.errors).toEqual([]);
  });
  it('reports missing money and refuses the native disabled upgrade button without spending',()=>{
    const e=selectedArrow(),r=e.root.proxy,notices:string[]=[];e.onNotice=t=>notices.push(t);r.Money=10;e.step(60);
    expect(e.upgradeInfo()).toMatchObject({available:false,reason:'资源不足，还差 15 金钱'});e.event(r.M_ShowCang.M_DHKSuSing.M_SenJiBan.B_SenJi.__clip,'release');
    expect(notices).toEqual(['资源不足，还差 15 金钱']);expect(r.Money).toBe(10);expect(e.snapshot().facilities[0].level).toBe(1);
  });
  it('reports missing miracles for temple upgrades through the shared command interface',()=>{
    const e=create(),r=e.root.proxy,notices:string[]=[];e.onNotice=t=>notices.push(t);e.dispatch({type:'start',map:0,mode:1});e.step();r.Money=1000;e.event(r.M_DiTu8.M_GongDian.B_Button.__clip,'release');e.step();
    const info=e.upgradeInfo()!;expect(info.available).toBe(false);expect(info.miracles).toBe(70);e.dispatch({type:'upgrade'});expect(notices[0]).toContain('70 神迹');expect(r.Money).toBe(1000);expect(r.M_DiTu8.M_GongDian.Level).toBe(1);
  });
  it('preserves the original discounted cost and original money gate while explaining both',()=>{
    const e=selectedArrow(),r=e.root.proxy;r.BuyLu=.5;r.Money=20;expect(e.upgradeInfo()).toMatchObject({money:13,available:false});expect(e.upgradeInfo()!.reason).toContain('升级需要 25 金钱，消耗 13');e.dispatch({type:'upgrade'});expect(r.Money).toBe(20);
    r.Money=25;e.dispatch({type:'upgrade'});e.step(2);expect(r.Money).toBe(12);expect(e.snapshot().facilities[0].level).toBe(2);
  });
  it('reports paused, maximum level and missing-selection cases without upgrading',()=>{
    const e=selectedArrow(),notices:string[]=[];e.onNotice=t=>notices.push(t);e.dispatch({type:'pause'});e.dispatch({type:'upgrade'});expect(notices.at(-1)).toContain('暂停');e.dispatch({type:'resume'});
    const r=e.root.proxy;r.Money=100000;for(let i=0;i<12&&e.upgradeInfo()!.nextLevel>0;i++){e.dispatch({type:'upgrade'});e.step(6);}
    expect(e.upgradeInfo()).toMatchObject({nextLevel:0,available:false,reason:'已达到最高等级'});const money=r.Money;e.dispatch({type:'upgrade'});expect(r.Money).toBe(money);expect(notices.at(-1)).toBe('已达到最高等级');
    e.dispatch({type:'quit'});e.dispatch({type:'upgrade'});expect(notices.at(-1)).toBe('请先选择需要升级的设施');expect(e.errors).toEqual([]);
  });
  it.each(Array.from({length:10},(_,i)=>[i]))('map %i keeps every grass and road cell at its original coordinate after random decoration swaps',(map)=>{
    for(const initialSeed of [75432,1,0xffffffff]){
      let seed=initialSeed;const e=new GameEngine(data,new Persistence(),()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;});
      for(let restart=0;restart<2;restart++){
        e.dispatch({type:'start',map,mode:1});const r=e.root.proxy,expected=r.Arr_DiTu[map];
        const cells=[1,2,8].flatMap(n=>[...r['M_DiTu'+n].__clip.children.values()]).filter(c=>c.props.Myix!==undefined);
        expect(cells).toHaveLength(169);
        const positions=cells.map(c=>`${c.props.Myix},${c.props.Myiy}`);expect(new Set(positions).size).toBe(169);
        for(const c of cells){expect(c.props.DiTuTyle).toBe(expected[c.props.Myiy][c.props.Myix]);expect(c.read('_x')).toBe(6+c.props.Myix*32);expect(c.read('_y')).toBe(6+c.props.Myiy*32);}
        expect(e.errors).toEqual([]);
      }
    }
  });
  it('initializes all original scripts, map data and prices',()=>{
    const e=create(),r=e.root.proxy;
    expect(e.errors).toEqual([]);
    expect(r.Arr_DiTu).toHaveLength(11);
    expect(r.Arr_DiTu.slice(0,10).every(validMap)).toBe(true);
    expect(r.MoneyStar).toBe(80);expect(r.SellLuStar).toBe(0.7);
    expect(r.M_ShowSeSi1.Money).toBe(9);expect(r.M_ShowSeSi1.Attack).toBe(12);
    expect(r.M_ShowSeSi6.Money).toBe(999);
    expect(r.M_ShowCang.M_DHKStar).toBeTruthy();
  });
  it('starts a map and preserves the first wave enemy numbers',()=>{
    const e=create();e.dispatch({type:'start',map:0,mode:1});
    expect(e.snapshot().templeMaxHP).toBe(50);
    e.dispatch({type:'wave'});e.step(100);
    expect(e.snapshot().enemies).toHaveLength(7);
    expect(e.errors).toEqual([]);
    expect(e.snapshot().enemies.some(v=>!v.dead&&v.x!==6)).toBe(true);
  });
  it('pause freezes game time and movements while timelines remain available',()=>{
    const e=create();e.dispatch({type:'start',map:2,mode:2});e.dispatch({type:'wave'});e.step(30);e.dispatch({type:'pause'});
    const time=e.time,positions=e.snapshot().enemies.map(v=>[v.x,v.y]);e.step(20);
    expect(e.time).toBe(time);expect(e.snapshot().enemies.map(v=>[v.x,v.y])).toEqual(positions);
  });
  it('rejects damaged backups without replacing saved data',()=>{
    const s=new Persistence();expect(()=>s.import('{"version":1}')).toThrow();expect(s.data.maps).toEqual({});
  });
  it('original start button removes its containing menu, not the button alone',()=>{
    const e=create();const menu=e.root.proxy.M_ShowCang.M_DHKStar;
    e.event(menu.B_GameStar.__clip,'release');
    expect(e.root.proxy.GameStar).toBe(true);expect(e.root.proxy.M_ShowCang.M_DHKStar).toBeUndefined();
  });
  it('builds, upgrades and sells through the original callbacks',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});e.step();
    const cell=[...r.M_DiTu1.__clip.children.values()].find((c:any)=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&Math.hypot(c.proxy._x-r.M_DiTu2.M_RuKo._x,c.proxy._y-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.proxy._x-r.M_DiTu8.M_GongDian._x,c.proxy._y-r.M_DiTu8.M_GongDian._y)>=48)!;
    e.dispatch({type:'select',facility:1});expect(r.TemSeSiShow).toBe(1);
    e.dispatch({type:'cell',x:cell.props.Myix,y:cell.props.Myiy});
    expect(e.snapshot().facilities).toHaveLength(1);expect(r.Money).toBe(71);
    const tower=e.walk().find(c=>c.props.SeSiID===1)!;
    e.event(tower.proxy.B_Button.__clip,'release');e.step();
    const popup=r.M_ShowCang.M_DHKSuSing.__clip;
    const upgrade=e.walk(popup).find(c=>c.id===346)!;e.event(upgrade,'release');e.step(2);
    expect(e.snapshot().facilities[0].level).toBe(2);
    const sell=e.walk(popup).find(c=>c.id===353)!;e.event(sell,'release');
    expect(e.snapshot().facilities).toHaveLength(0);expect(e.errors).toEqual([]);
  });
  it.each(Array.from({length:30},(_,i)=>[i%10,Math.floor(i/10)+1]))('runs map %i in original mode %i without missing APIs',(map,mode)=>{
    const e=create();e.dispatch({type:'start',map,mode:mode as 1|2|3});e.dispatch({type:'wave'});e.step(260);
    expect(e.errors).toEqual([]);expect(e.snapshot().enemies).toHaveLength(7);
  });
  it('all 50 waves retain source enemy counts and late chapter mage callbacks',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});
    for(let wave=1;wave<=50;wave++){
      r.NowGuanSu=wave;r.F_UpdateVar(0);r.F_UpdateCang(0);r.M_DiTu8.M_GongDian.HP=1e9;r.GamePause=false;r.B_GuanStar.enabled=true;
      e.dispatch({type:'wave'});e.step(160);
      expect(e.snapshot().enemies).toHaveLength(wave<=30?7:7+wave-30);
      expect(e.errors).toEqual([]);
    }
  },15000);
  it.each([[30,2],[50,4]])('settles chapter wave %i with result %i',(wave,result)=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});r.NowGuanSu=wave;r.DiRenMaxZL=0;r.B_GuanStar.enabled=false;r.DiRenGoPD=true;e.step(65);
    expect(r.M_ShowCang.M_DHKOver.GoToID).toBe(result);expect(r.GamePause).toBe(true);expect(e.errors).toEqual([]);
  });
  it('editor validates and stores an original map in a browser-compatible slot',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'editor'});const editor=r.M_EditDiTu;
    expect(editor).toBeTruthy();expect(e.errors).toEqual([]);
    const p=new Persistence();p.data.maps.MapSave1={ID:1,TimeStr:'2026-10-12',DiTuArr:r.Arr_DiTu[0]};
    const copy=Persistence.validate(p.data);expect(validMap(copy.maps.MapSave1.DiTuArr)).toBe(true);
  });
  it('rejects forked roads, disconnected roads and invalid setting data on import',()=>{
    const e=create(),map=e.root.proxy.Arr_DiTu[0].map((r:number[])=>r.slice());map[0][2]=1;
    expect(validMap(map)).toBe(false);const p=new Persistence();p.data.settings.soundOn=true;
    const previous=JSON.stringify(p.data);expect(()=>p.import(JSON.stringify({...p.data,maps:{MapSave1:{TimeStr:'today',DiTuArr:map}}}))).toThrow();expect(JSON.stringify(p.data)).toBe(previous);
  });
  it('persists channel settings and retains them across the global mute switch',()=>{
    let stored='';const storage={getItem:()=>stored||null,setItem:(_k:string,v:string)=>{stored=v;}};
    const e=new GameEngine(data,new Persistence(storage),()=>0.5);e.dispatch({type:'start',map:0,mode:1});
    e.root.proxy.S_Sound3.setVolume(17);e.save.flush();e.key(83);expect(e.save.data.settings.channels[2]).toBe(17);expect(e.save.data.settings.soundOn).toBe(false);
    const restored=new GameEngine(data,new Persistence(storage),()=>0.5);expect(restored.root.proxy.S_Sound3.getVolume()).toBe(0);restored.dispatch({type:'start',map:0,mode:1});restored.key(83);expect(restored.root.proxy.S_Sound3.getVolume()).toBe(17);
  });
  it('can restart after menu animations and repeatedly replace source-named clips',()=>{
    const e=create();e.step(280);e.dispatch({type:'start',map:1,mode:1});e.step(3);e.dispatch({type:'quit'});e.step(40);e.dispatch({type:'start',map:3,mode:3});
    expect(e.snapshot().map).toBe(3);expect(e.snapshot().mode).toBe(3);expect(e.errors).toEqual([]);
  });
  it('research follows the original upgrade price and attack multiplier',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});e.step();
    r.Money=10000;e.step();const before=r.M_RuanJiao1.Level;e.dispatch({type:'research',id:1});e.step();
    expect(r.M_RuanJiao1.Level).toBe(before+1);expect(r.All_Attack).toBeGreaterThan(1);expect(r.Money).toBeLessThan(10000);expect(e.errors).toEqual([]);
  });
  it('the command interface respects original affordability and paused selection',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});e.dispatch({type:'select',facility:5});expect(r.TemSeSiShow).toBe(0);
    e.dispatch({type:'pause'});e.dispatch({type:'select',facility:1});expect(r.TemSeSiShow).toBe(0);expect(r.Money).toBe(80);
  });
  it.each([[1,1110],[2,1242],[3,1308]])('mode %i retains the source settlement rounding and score %i',(mode,score)=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:mode as 1|2|3});
    r.Money=160;r.GuanEWDeFen=100;r.AllDeFen=1000;r.DiRenMaxZL=0;r.B_GuanStar.enabled=false;r.DiRenGoPD=true;e.step(65);
    expect(r.Money).toBe(195);expect(r.AllDeFen).toBe(score);expect(r.M_ShowCang.M_DHKOver.GoToID).toBe(1);expect(e.errors).toEqual([]);
  });
  it('failure uses the original delay and smaller remaining-money score bonus',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});
    r.Money=160;r.GuanEWDeFen=100;r.AllDeFen=1000;r.DiRenMaxZL=1;r.DiRenGoPD=true;r.B_GuanStar.enabled=false;r.M_DiTu8.M_GongDian.HP=0;e.step(55);
    expect(r.M_ShowCang.M_DHKOver.GoToID).toBe(3);expect(r.AllDeFen).toBe(1102);expect(r.Money).toBe(160);expect(e.errors).toEqual([]);
  });
  it('creates a valid custom road using editor callbacks and persists all five original save slots',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'editor'});const editor=r.M_EditDiTu;
    const click=(x:number,y:number,count=1)=>{const c=editor.M_EDDiTu['M_EDTK'+(y*13+x+1)].__clip;for(let i=0;i<count;i++){e.event(c,'release');e.drain();}};
    click(0,6);for(let x=1;x<10;x++)click(x,6);click(10,6,2);editor.F_TestDiTu();e.drain();
    expect(editor.B_TEdit3.enabled).toBe(true);expect(validMap(editor.SaveDiTuArr)).toBe(true);
    editor.F_SaveDiTu();e.drain();for(let i=1;i<=5;i++)e.event(editor.M_MapSave['M_SaveTiao'+i].__clip,'release');
    const saved=Persistence.validate(e.save.data);for(let i=1;i<=5;i++)expect(saved.maps['MapSave'+i].DiTuArr).toEqual(editor.SaveDiTuArr);expect(e.errors).toEqual([]);
  });
  it('replays actual projectile combat deterministically with a fixed random sequence',()=>{
    const replay=()=>{let seed=12345;const e=new GameEngine(data,new Persistence(),()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;});const r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});e.step();r.Money=500;
      const cells=[...r.M_DiTu1.__clip.children.values()].filter((c:any)=>c.props.DiTuTyle===0&&c.props.SeSiSetPD&&Math.hypot(c.proxy._x-r.M_DiTu2.M_RuKo._x,c.proxy._y-r.M_DiTu2.M_RuKo._y)>=58&&Math.hypot(c.proxy._x-r.M_DiTu8.M_GongDian._x,c.proxy._y-r.M_DiTu8.M_GongDian._y)>=48).slice(0,8);
      for(const c of cells){e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x:c.props.Myix,y:c.props.Myiy});}e.dispatch({type:'wave'});e.step(1100);expect(e.errors).toEqual([]);return e.snapshot();};
    const a=replay(),b=replay();expect(a).toEqual(b);expect(a.score).toBeGreaterThan(0);expect(a.facilities.length).toBe(8);
  });
});
