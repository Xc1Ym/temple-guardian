import type { SoundPort } from './engine';
import type { AssetManifest } from './renderer';
import { assetUrl } from './asset-url';
export class AudioPlayer implements SoundPort {
  unlocked=false; channels=new Map<number,HTMLAudioElement>();pending=new Map<number,()=>void>();volumes=new Map<number,number>();
  constructor(private assets:AssetManifest){}
  unlock(){if(this.unlocked)return;this.unlocked=true;for(const action of this.pending.values())action();this.pending.clear();}
  start(id:string,channel:number,offset:number,loops:number,volume:number,complete?:()=>void){const play=()=>{const url=this.assets.sounds[id]||this.assets.soundIds[id];if(!url)return;this.stop(channel);const audio=new Audio(assetUrl(url));audio.volume=Math.max(0,Math.min(1,(this.volumes.get(channel)??volume)/100));audio.loop=loops>1000;let count=Math.max(1,loops);audio.addEventListener('loadedmetadata',()=>{if(offset>0&&offset<audio.duration)audio.currentTime=offset;});audio.addEventListener('ended',()=>{if(--count>0){audio.currentTime=0;void audio.play().catch(()=>{});}else complete?.();});this.channels.set(channel,audio);void audio.play().catch(()=>{});};if(this.unlocked)play();else this.pending.set(channel,play);}
  stop(channel:number){this.channels.get(channel)?.pause();this.channels.delete(channel);this.pending.delete(channel);}
  volume(channel:number,value:number){this.volumes.set(channel,value);const audio=this.channels.get(channel);if(audio)audio.volume=Math.max(0,Math.min(1,value/100));}
  suspend(){for(const audio of this.channels.values())audio.pause();}
  resume(){if(this.unlocked)for(const audio of this.channels.values())void audio.play().catch(()=>{});}
}
