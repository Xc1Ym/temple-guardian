import { defineConfig } from 'vite';
import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
let outputDirectory='dist';
export default defineConfig({
  base:process.env.GAME_BASE_PATH||'/',
  plugins:[{
    name:'exclude-development-font-files',
    configResolved(config){outputDirectory=config.build.outDir;},
    closeBundle(){
      rmSync(resolve(outputDirectory,'assets/fonts/source'),{recursive:true,force:true});
      rmSync(resolve(outputDirectory,'assets/fonts/Songti-reference.swf'),{force:true});
    }
  }]
});
