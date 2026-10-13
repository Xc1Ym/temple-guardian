import { describe,it,expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { GameEngine,Persistence,call } from './engine';
const data=JSON.parse(readFileSync(new URL('../public/game-data.json',import.meta.url),'utf8'));
const create=()=>new GameEngine(data,new Persistence(),()=>.5);
const baseline=JSON.parse(readFileSync(new URL('../tools/audit/original-baseline.json',import.meta.url),'utf8'));
const values=(clip:any,fields:Record<string,number>)=>Object.fromEntries(Object.keys(fields).map(key=>[key,clip[key]]));

describe('AVM1 fidelity',()=>{
  it('automatically leaves a later-wave result after the original two-second delay',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});
    r.NowGuanSu=2;r.DiRenMaxZL=0;r.B_GuanStar.enabled=false;r.DiRenGoPD=true;e.step(65);
    expect(r.M_ShowCang.M_DHKOver?.GoToID).toBe(1);expect(r.GamePause).toBe(true);
    e.step(60);expect(r.NowGuanSu).toBe(3);expect(r.GamePause).toBe(false);expect(r.M_ShowCang.M_DHKOver).toBeUndefined();expect(e.errors).toEqual([]);
  });
  it('freezes preparation countdown during user pause while result windows retain their own clock',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:2});e.step(56);
    const before=r.M_NowTimeGO.M_TimeScal._yscale;e.dispatch({type:'pause'});e.step(280);
    expect(r.M_NowTimeGO.M_TimeScal._yscale).toBe(before);e.dispatch({type:'resume'});e.step();
    const decrement=before-r.M_NowTimeGO.M_TimeScal._yscale;
    expect(decrement).toBeGreaterThan(0);expect(Math.abs(decrement-100/r.AllTimeGO/28)).toBeLessThan(100/r.AllTimeGO/1000);expect(r.B_GuanStar.enabled).toBe(true);
  });
  it('does not reinitialize facility stats when gotoAndStop targets the current frame',()=>{
    const e=create(),tower=e.root.proxy.M_ShowSeSi1;
    expect(tower.M_Ta.__clip.def.labels.a1).toBe(1);
    tower.M_Ta.gotoAndStop('a2');e.drain();expect(tower.Level).toBe(2);tower.Attack=777;
    tower.M_Ta.gotoAndStop('a2');e.drain();expect(tower.Attack).toBe(777);
  });
  it('keeps the original creation order for frame events after swapping display depths',()=>{
    const e=create(),r=e.root.proxy,order:string[]=[];
    const a=r.createEmptyMovieClip('auditA',30000),b=r.createEmptyMovieClip('auditB',30001);
    a.onEnterFrame=()=>order.push('a');b.onEnterFrame=()=>order.push('b');a.swapDepths(b);
    e.step();expect(order).toEqual(['b','a']);
  });
  it('can restore a zero-sized scale and reports negative mirror scales',()=>{
    const e=create(),box=e.root.proxy.createEmptyMovieClip('auditScale',30000);
    box._xscale=0;box._xscale=100;expect(box._xscale).toBe(100);
    box._xscale=-100;expect(box._xscale).toBe(-100);expect(box._rotation).toBe(0);
  });
  it('uses original twip precision when script code sets coordinates',()=>{
    const e=create(),box=e.root.proxy.createEmptyMovieClip('auditPosition',30000),expected=baseline[0];
    box._x=1.234;box._y=-1.234;expect([box._x,box._y]).toEqual(expected.position);
    box._x=.03;expect(box._x).toBe(expected.subTwip);
  });
  it('keeps the grab offset of the original sound slider and clamps its bounds',()=>{
    const e=create(),box=e.root.proxy.createEmptyMovieClip('auditDrag',30000);box._x=30;box._y=0;
    e.movePointer({x:33,y:4});box.startDrag(false,8,0,75,0);e.movePointer({x:43,y:4});
    expect([box._x,box._y]).toEqual([40,0]);e.movePointer({x:100,y:50});expect([box._x,box._y]).toEqual([75,0]);
    box.stopDrag();e.movePointer({x:0,y:0});expect(box._x).toBe(75);
  });
  it('matches all 26 original facility tier records',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});r.GamePause=true;
    const cases=baseline.filter((c:any)=>c.kind==='facility');expect(cases).toHaveLength(26);
    for(const c of cases){const tower=r['M_ShowSeSi'+c.id];if(c.id!==6)tower.M_Ta.gotoAndStop('a'+c.level);e.step(2);expect(values(tower,c.values),`facility ${c.id} level ${c.level}`).toEqual(c.values);}
    expect(e.errors).toEqual([]);
  });
  it('matches the original spawned enemies for all 50 waves with fixed random input',()=>{
    const e=create(),r=e.root.proxy;e.dispatch({type:'start',map:0,mode:1});r.GamePause=true;
    const cases=baseline.filter((c:any)=>c.kind==='wave');expect(cases).toHaveLength(50);
    for(const c of cases){r.NowGuanSu=c.wave;r.F_UpdateVar(0);r.F_UpdateCang(0);r.F_CreaDiRenS();e.step(2);expect(r.DiRenMax,`wave ${c.wave} count`).toBe(c.count);for(let n=1;n<=c.count;n++)expect(values(r.M_DiTu0['M_DiRen'+n],c.enemies[n-1]),`wave ${c.wave} enemy ${n}`).toEqual(c.enemies[n-1]);}
    expect(e.errors).toEqual([]);
  });
  it('matches the original 840-frame combat fixture, including movement, damage and rewards',()=>{
    const original=JSON.parse(readFileSync(new URL('../tools/audit/original-combat.json',import.meta.url),'utf8'));
    const e=create(),r=e.root.proxy;r.F_MapSuSiRan=()=>{};e.dispatch({type:'start',map:0,mode:1});r.Money=500;
    expect(original[0].cells).toHaveLength(8);
    for(const [x,y]of original[0].cells){e.dispatch({type:'select',facility:1});e.dispatch({type:'cell',x,y});}
    expect(r.Money).toBe(original[0].money);call(r,'F_StarArrFun',[]);e.drain();
    const fields=(c:any,keys:string[])=>Object.fromEntries(keys.map(k=>[k,c?.[k]??null]));
    const history:any[]=[],sampleTicks=new Set(original.slice(1).map((c:any)=>c.tick)),oldEnter=r.onEnterFrame;let at=0;
    r.onEnterFrame=function(){
      oldEnter.call(this);if(!sampleTicks.has(at))return;
      history.push({kind:'combat',tick:at,money:r.Money,score:r.AllDeFen,remaining:r.DiRenMaxZL,templeHP:r.M_DiTu8.M_GongDian.HP,
        enemies:Array.from({length:r.DiRenMax},(_,i)=>{const c=r.M_DiTu0['M_DiRen'+(i+1)];return {id:c?.ID??null,x:c?._x??null,y:c?._y??null,hp:c?.HP??null,dead:c?.Die??null,visible:c?._visible??null,frame:c?._currentframe??null};}),
        towers:[...r.M_SeSiQang.__clip.children.values()].sort((a:any,b:any)=>b.depth-a.depth).filter((c:any)=>c.props.SeSiID!==undefined).map((c:any)=>({name:c.name,hp:c.props.HP,gun:c.proxy.M_Gong._currentframe,rotation:c.proxy.M_Gong._rotation})),
        missiles:[...r.M_DanQang.__clip.children.values()].sort((a:any,b:any)=>b.depth-a.depth).map((c:any)=>({name:c.name,...fields(c.proxy,['_x','_y','_currentframe'])})).map((c:any)=>({name:c.name,x:c._x,y:c._y,frame:c._currentframe}))});
    };
    for(at=1;at<=840;at++)e.step();
    for(let i=0;i<history.length;i++){
      const actual=history[i],expected=original[i+1];
      for(let n=0;n<actual.towers.length;n++){expect(actual.towers[n].rotation,`tick ${actual.tick} tower ${n} rotation`).toBeCloseTo(expected.towers[n].rotation,7);actual.towers[n].rotation=expected.towers[n].rotation;}
      expect(actual,`combat tick ${actual.tick}`).toEqual(expected);
    }
    expect(r.AllDeFen).toBeGreaterThan(0);expect(e.errors).toEqual([]);
  });
  it('matches original enemy shape collisions across three rotations',()=>{
    const original=JSON.parse(readFileSync(new URL('../tools/audit/original-collision.json',import.meta.url),'utf8'));
    expect(original).toHaveLength(54);
    const e=create(),r=e.root.proxy;r.GamePause=true;
    const ids=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,101,102,9999];
    for(const [i,id]of ids.entries())r.attachMovie('Mf_DiRen'+id,'qaEnemy'+id,30000+i,{_x:200,_y:200});e.drain();e.step(2);
    const differences:any[]=[];
    for(const c of original){const clip=r['qaEnemy'+c.id];clip._rotation=c.angle;let at=0;for(let y=-24;y<=24;y+=2)for(let x=-24;x<=24;x+=2){const actual=clip.hitTest(200+x,200+y,true)?'1':'0';if(actual!==c.bits[at])differences.push({id:c.id,angle:c.angle,x,y,expected:c.bits[at],actual});at++;}}
    expect(differences).toEqual([]);
    r.qaEnemy1._xscale=0;expect(r.qaEnemy1.hitTest(0,0,true)).toBe(false);
    expect(e.errors).toEqual([]);
  });
});
