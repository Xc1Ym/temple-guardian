import { GameTrainer, TRAINER_CODE, type TrainerOptions } from './trainer';

const toggles: [keyof TrainerOptions,string][]=[['lockMoney','锁定金钱'],['lockMiracles','锁定神迹'],['templeInvincible','神殿无敌'],['facilitiesInvincible','设施无敌 / 无限耐久'],['freeCosts','建造、升级、研究免费'],['oneHit','一击必杀 / 无视护盾'],['unlockFacilities','解锁设施 / 解除数量限制'],['freezeCountdown','冻结准备倒计时']];
const factors: [keyof TrainerOptions,string,number,number][]=[['attack','攻击倍率',1,1000],['range','射程倍率',1,50],['fireRate','攻击加速',1,100],['enemySpeed','敌人速度',0,1],['gameSpeed','游戏速度',.25,8]];
const researchNames=['锻造','抛射','土木','神恩','神算'];

export class TrainerUI {
  button:HTMLButtonElement;
  constructor(private trainer:GameTrainer,app:HTMLElement,private redraw:()=>void,private resetClock:()=>void){
    const bar=document.createElement('div');bar.className='trainer-bar';
    this.button=document.createElement('button');this.button.type='button';this.button.className='trainer-launcher';this.button.textContent='修改器';this.button.title=`修改器 · 也可输入 ${TRAINER_CODE}`;
    this.button.addEventListener('click',()=>this.open());bar.append(this.button);app.prepend(bar);
  }
  open(){
    if(document.querySelector('dialog'))return;
    const t=this.trainer,e=t.engine,r=e.root.proxy,s=e.snapshot();let resume=t.running&&!s.paused;
    if(resume)r.GamePause=true;
    const d=document.createElement('dialog');d.className='trainer-dialog';d.setAttribute('aria-labelledby','trainer-title');
    const number=(name:string,label:string,value:number,min=0,max=1e9,step:number|string=1)=>`<label>${label}<input data-value="${name}" type="number" min="${min}" max="${max}" step="${step}" value="${value}" required></label>`;
    d.innerHTML=`<div class="trainer-heading"><h2 id="trainer-title">修改器</h2><button type="button" data-close aria-label="关闭修改器">×</button></div>
      <p class="trainer-note">打开时暂停游戏；关闭后恢复之前状态。加持仅在本局生效。</p>
      <fieldset ${t.running?'':'disabled'}>
        <section><h3>数值修改</h3><div class="trainer-values">${number('money','金钱',s.money)}${number('miracles','神迹',s.miracles)}${number('score','总分',s.score)}${number('templeHP','神殿耐久',s.templeHP,1,1e6)}${number('templeMaxHP','神殿耐久上限',s.templeMaxHP,1,1e6)}</div>
          <div class="trainer-actions"><button type="button" data-action="values">应用数值</button><button type="button" data-action="rich">金钱、神迹各 999999</button></div></section>
        <section><h3>持续加持</h3><div class="trainer-toggles">${toggles.map(([key,label])=>`<label><input type="checkbox" data-toggle="${key}" ${t.options[key]?'checked':''}>${label}</label>`).join('')}</div>
          <p class="trainer-note">资源锁定使用上方金钱、神迹数值。解锁仍遵守原版地块与神殿距离要求。</p>
          <div class="trainer-values">${factors.map(([key,label,min,max])=>number(key,label,t.options[key] as number,min,max,'any')).join('')}</div><div class="trainer-actions"><button type="button" data-action="factors">应用倍率</button><button type="button" data-action="reset">关闭全部加持</button></div></section>
        <section><h3>研究等级</h3><div class="trainer-research">${researchNames.map((name,i)=>number('research'+i,name,r['M_RuanJiao'+(i+1)]?.Level||0,0,6)).join('')}</div><div class="trainer-actions"><button type="button" data-action="research">应用研究</button><button type="button" data-action="research-max">研究全部满级</button></div></section>
        <section><h3>一键操作</h3><div class="trainer-actions"><button type="button" data-action="heal">恢复全部耐久</button><button type="button" data-action="upgrade">设施全部满级</button><button type="button" data-action="obstacles">清除草地障碍</button><button type="button" data-action="clear">消灭本关敌人</button></div>
          <div class="trainer-wave">${number('wave','目标关卡',s.wave,1,50)}<button type="button" data-action="wave">跳转关卡</button></div><p class="trainer-note">跳关保留地图、设施、资源与研究，进入目标关卡准备阶段；空格开始。</p></section>
      </fieldset>
      <p class="trainer-status" role="status">${t.running?'修改后即时生效。':'请先开始游戏，再打开修改器。'}</p><button type="button" class="trainer-return" data-close>返回游戏</button>`;
    const read=(name:string)=>{const input=d.querySelector<HTMLInputElement>(`[data-value="${name}"]`)!;if(!input.checkValidity())throw new Error('请检查数值范围');return input.valueAsNumber;};
    const write=(name:string,value:number)=>{d.querySelector<HTMLInputElement>(`[data-value="${name}"]`)!.value=String(value);};
    const values=()=>({money:read('money'),miracles:read('miracles'),score:read('score'),templeHP:read('templeHP'),templeMaxHP:read('templeMaxHP')});
    const status=d.querySelector<HTMLElement>('.trainer-status')!;
    const action=(fn:()=>void,message:string)=>{try{fn();this.redraw();status.textContent=message;status.classList.remove('error');}catch(err){status.textContent=err instanceof Error?err.message:String(err);status.classList.add('error');}};
    d.querySelectorAll<HTMLInputElement>('[data-toggle]').forEach(input=>input.addEventListener('change',()=>{
      const key=input.dataset.toggle as keyof TrainerOptions;
      action(()=>{const patch:Partial<TrainerOptions>={[key]:input.checked};if(key==='lockMoney')patch.money=read('money');if(key==='lockMiracles')patch.miracles=read('miracles');t.configure(patch);},'加持已更新。');input.checked=!!t.options[key];
    }));
    const applyResearch=(max=false)=>{t.setResearch(Array.from({length:5},(_,i)=>max?6:read('research'+i)));for(let i=0;i<5;i++)write('research'+i,r['M_RuanJiao'+(i+1)].Level);};
    const actions:Record<string,[()=>void,string]>={
      values:[()=>t.applyValues(values()),'数值已更新。'],
      rich:[()=>{t.setResources(999999,999999);write('money',999999);write('miracles',999999);},'金钱、神迹已设为 999999。'],
      factors:[()=>{const patch:Partial<TrainerOptions>={};for(const [key] of factors)(patch as any)[key]=read(key);t.configure(patch);},'倍率已应用到实际战斗。'],
      reset:[()=>{t.reset();d.querySelectorAll<HTMLInputElement>('[data-toggle]').forEach(input=>input.checked=false);for(const [key] of factors)write(key,t.options[key] as number);},'全部加持已关闭；已修改的数值、研究与设施等级保留。'],
      research:[()=>applyResearch(),'研究已应用到现有及新建设施。'],
      'research-max':[()=>applyResearch(true),'五项研究已满级。'],
      heal:[()=>{t.healAll();write('templeHP',e.snapshot().templeHP);},'神殿与设施耐久已恢复。'],
      upgrade:[()=>t.maxFacilities(),'现有设施已升至最高等级。'],
      obstacles:[()=>t.clearObstacles(),'草地障碍已清除，道路保留。'],
      clear:[()=>t.clearWave(),'本关敌人已消灭；返回游戏后按原版规则结算。'],
      wave:[()=>{t.jumpWave(read('wave'));r.GamePause=true;resume=true;},'已跳至目标关卡，返回游戏后按空格开始。'],
    };
    d.querySelectorAll<HTMLButtonElement>('[data-action]').forEach(button=>button.addEventListener('click',()=>{const [fn,message]=actions[button.dataset.action!];action(fn,message);}));
    d.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>d.close()));
    d.addEventListener('close',()=>{
      d.remove();if(resume&&t.running){r.GamePause=false;if(document.hidden)e.dispatch({type:'pause'});}
      this.resetClock();this.redraw();this.button.focus();
    });
    document.body.append(d);d.showModal();
  }
}
