// Sample original hitTest(...,true) over enemy silhouettes and hidden children.
ASSetPropFlags(Math,"random",0,7);
Math.random=function(){return 0.5;};
var qaJson = function(value) {
   if(value==undefined||value==null)return "null";
   if(typeof value=="number")return String(value);
   if(typeof value=="boolean")return value?"true":"false";
   if(typeof value=="string")return "\""+value+"\"";
   var parts=[];
   if(value instanceof Array){for(var i=0;i<value.length;i++)parts.push(qaJson(value[i]));return "["+parts.join(",")+"]";}
   for(var k in value)parts.push(qaJson(k)+":"+qaJson(value[k]));return "{"+parts.join(",")+"}";
};
var qaTick=0;
var qaResults=[];
var qaIds=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,101,102,9999];
_root.GamePause=true;
this.onEnterFrame=function(){
   qaTick++;
   if(qaTick==1){
      for(var i=0;i<qaIds.length;i++)_root.attachMovie("Mf_DiRen"+qaIds[i],"qaEnemy"+qaIds[i],30000+i,{_x:200,_y:200});
      return;
   }
   if(qaTick==3){
      for(var i=0;i<qaIds.length;i++){
         var clip=_root["qaEnemy"+qaIds[i]];
         for(var angle=0;angle<=90;angle+=45){
            clip._rotation=angle;
            var bits="";
            for(var y=-24;y<=24;y+=2)for(var x=-24;x<=24;x+=2)bits+=clip.hitTest(200+x,200+y,true)?"1":"0";
            qaResults.push({id:qaIds[i],angle:angle,bits:bits});
         }
      }
      flash.external.ExternalInterface.call("probeReport",qaJson(qaResults));delete this.onEnterFrame;
   }
};
