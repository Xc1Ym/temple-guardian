import { describe,it,expect } from 'vitest';
import { assetUrl } from './asset-url';
describe('Static deployment resource paths',()=>{
  it.each(['game-data.json','/assets/manifest.json','/assets/images/466.png','/assets/fonts/temple-cjk.woff2?v=abc','/assets/sounds/779.mp3'])('resolves %s under the site root and a Pages project path',(path)=>{
    const local=path.replace(/^\//,'');
    expect(assetUrl(path,'/')).toBe('/'+local);
    expect(assetUrl(path,'/temple-guardian/')).toBe('/temple-guardian/'+local);
  });
  it('normalizes a base path without a trailing slash',()=>{
    expect(assetUrl('/game-data.json','/renamed-repository')).toBe('/renamed-repository/game-data.json');
  });
});
