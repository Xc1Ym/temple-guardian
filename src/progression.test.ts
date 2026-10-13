import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { GameEngine, Persistence } from './engine';

const data=JSON.parse(readFileSync(new URL('../public/game-data.json',import.meta.url),'utf8'));

describe('Wave progression',()=>{
  it.each([1,2,3])('moves from a naturally completed first wave to moving enemies in wave two through original controls in mode %i',(mode)=>{
    const e=new GameEngine(data,new Persistence(),()=>0.5),r=e.root.proxy;
    e.dispatch({type:'start',map:0,mode:1});e.dispatch({type:'wave'});
    let elapsed=0;while(!r.M_ShowCang.M_DHKOver&&elapsed<10000){e.step(28);elapsed+=28;}
    expect(r.M_ShowCang.M_DHKOver?.GoToID).toBe(1);
    const next=e.walk(r.M_ShowCang.M_DHKOver.__clip).find(c=>c.id===262||c.id===277)!;
    expect(next).toBeTruthy();e.event(next,'release');e.drain();
    expect([...r.M_ShowCang.__clip.children.values()]).toContain(r.M_ShowCang.M_NanDuSet.__clip);
    e.event(r.M_ShowCang.M_NanDuSet['M_NanSel'+mode].__clip,'release');
    const choice=e.walk(r.M_ShowCang.M_NanDuSet.__clip).find(c=>c.id===60)!;
    expect(choice).toBeTruthy();e.event(choice,'release');e.drain();
    expect(e.snapshot()).toMatchObject({wave:2,playing:true,paused:false,mode});
    expect(r.B_GuanStar.enabled).toBe(true);
    e.dispatch({type:'wave'});e.step(160);
    expect(e.snapshot().enemies).toHaveLength(7);
    const before=e.snapshot().enemies.map(v=>[v.x,v.y]);e.step(28);
    expect(e.snapshot().enemies.map(v=>[v.x,v.y])).not.toEqual(before);
    expect(e.errors).toEqual([]);
  });
});
