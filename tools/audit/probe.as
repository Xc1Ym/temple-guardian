// Runs original bytecode. Audit setup and reports are the only added actions.
ASSetPropFlags(Math,"random",0,7);
Math.random = function() { return 0.5; };
flash.external.ExternalInterface.call("probeProgress","started");
var qaFields = ["Level","LevelB","Money","SenJiDian","SJMoney","SJSenJiDian","Attack","AttackB","MaxHP","MaxHPB","HP","HPB","FanWei","FanWeiB","JianSuDu","JianSuDuB","FaSieJJ","FaSieJJB","MAXAngle","Tyle","SeSiID","NowDiRenID","Sudu","HudunNum","HideNum"];
var qaResults = [];
var qaCases = [];
var qaCase = -1;
var qaWait = 0;
var qaTick = 0;
var qaCurrent;
var qaOldEnter = this.onEnterFrame;
var qaOriginalDate = Date;
var qaJson = function(value) {
   if (value == undefined || value == null) return "null";
   if (typeof value == "number") return isFinite(value) ? String(value) : "null";
   if (typeof value == "boolean") return value ? "true" : "false";
   if (typeof value == "string") return "\"" + value + "\"";
   var pieces = [];
   var k;
   if (value instanceof Array) {
      for (k = 0; k < value.length; k++) pieces.push(qaJson(value[k]));
      return "[" + pieces.join(",") + "]";
   }
   for (k in value) pieces.push(qaJson(k) + ":" + qaJson(value[k]));
   return "{" + pieces.join(",") + "}";
};
var qaValues = function(clip) {
   var out = {};
   for (var i = 0; i < qaFields.length; i++) {
      var k = qaFields[i];
      if (clip[k] != undefined) out[k] = clip[k];
   }
   return out;
};
var qaAPI = function() {
   var box = this.createEmptyMovieClip("qaBox",20000);
   box._xscale = 0; box._xscale = 100;
   var restored = box._xscale;
   box._xscale = -100;
   var mirrored = box._xscale;
   box._x = 1.234; box._y = -1.234;
   var position = [box._x,box._y];
   box._x = 0.03;
   var subTwip = box._x;
   var a = box.createEmptyMovieClip("a",1);
   var b = box.createEmptyMovieClip("b",2);
   var keys = [];
   for (var key in box) { if (key == "a" || key == "b") keys.push(key); }
   _root.qaOrder = [];
   a.onEnterFrame = function() { _root.qaOrder.push("a"); };
   b.onEnterFrame = function() { _root.qaOrder.push("b"); };
   a.swapDepths(b);
   qaResults.push({kind:"runtime",restored:restored,mirrored:mirrored,keys:keys,position:position,subTwip:subTwip,random:Math.random()});
};
var qaFacilityIds = [1,2,3,4,5,6,101,102,201,202];
var qaFacilityLevels = [3,3,2,2,3,1,3,3,3,3];
for (var qaI = 0; qaI < qaFacilityIds.length; qaI++) {
   for (var qaLevel = 1; qaLevel <= qaFacilityLevels[qaI]; qaLevel++) qaCases.push({kind:"facility",id:qaFacilityIds[qaI],level:qaLevel});
}
for (var qaWave = 1; qaWave <= 50; qaWave++) qaCases.push({kind:"wave",wave:qaWave});
this.onEnterFrame = function() {
   qaTick++;
   if(qaTick%30==0)flash.external.ExternalInterface.call("probeProgress",String(qaTick));
   if (qaTick == 1) {
      _root.F_UpdateVar(1);_root.F_UpdateCang(1);_root.NowDiTuID=0;_root.MySellID=1;_root.F_GameStar();_root.GamePause=true;
      qaAPI.call(this);
   }
   qaOldEnter.call(this);
   if (qaWait > 0) {
      qaWait--;
      if (qaWait == 0) {
         if (qaCurrent.kind == "facility") {
            qaResults.push({kind:"facility",id:qaCurrent.id,level:qaCurrent.level,values:qaValues(_root["M_ShowSeSi"+qaCurrent.id])});
         } else {
            var enemies=[];
            for(var n=1;n<=_root.DiRenMax;n++) enemies.push(qaValues(_root.M_DiTu0["M_DiRen"+n]));
            qaResults.push({kind:"wave",wave:qaCurrent.wave,count:_root.DiRenMax,enemies:enemies});
         }
      }
      return;
   }
   qaCase++;
   if (qaCase >= qaCases.length) {
      qaResults.push({kind:"order",order:_root.qaOrder.slice(0,2)});
      flash.external.ExternalInterface.call("probeReport",qaJson(qaResults));
      delete this.onEnterFrame;
      return;
   }
   qaCurrent=qaCases[qaCase];
   if(qaCurrent.kind=="facility") {
      var qaTower = _root["M_ShowSeSi"+qaCurrent.id];
      if(qaCurrent.id != 6) qaTower.M_Ta.gotoAndStop("a"+qaCurrent.level);
   } else {
      _root.NowGuanSu=qaCurrent.wave;_root.F_UpdateVar(0);_root.F_UpdateCang(0);_root.F_CreaDiRenS();
   }
   qaWait=2;
};
