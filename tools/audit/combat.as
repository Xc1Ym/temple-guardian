// Deterministic combat probe. All build, move, attack and reward code is original.
ASSetPropFlags(Math,"random",0,7);
Math.random = function() { return 0.5; };
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
var qaResults = [];
var qaTick = -1;
var qaOldEnter = this.onEnterFrame;
// Ruffle changes child lookup during the original decoration name swaps.
// Keep decoration in its authored cells in this controlled combat fixture.
_root.F_MapSuSiRan = function() {};
this.onEnterFrame = function() {
   qaTick++;
   if (qaTick == 0) {
      _root.F_UpdateVar(1);_root.F_UpdateCang(1);_root.NowDiTuID=0;_root.MySellID=1;_root.F_GameStar();
      _root.Money=500;
      var built=0;
      var entry=_root.M_DiTu2.M_RuKo;
      var temple=_root.M_DiTu8.M_GongDian;
      var cells=[];
      for(var gridName in _root.M_DiTu1) {
         var cell=_root.M_DiTu1[gridName];
         var d1=Math.sqrt(Math.pow(cell._x-entry._x,2)+Math.pow(cell._y-entry._y,2));
         var d2=Math.sqrt(Math.pow(cell._x-temple._x,2)+Math.pow(cell._y-temple._y,2));
         if(built<8 && cell.DiTuTyle==0 && cell.SeSiSetPD && d1>=58 && d2>=48) {
            _root.TemSeSiShow=1;cell.onRollOver();cell.onRelease();cell.onRollOut();
            cells.push([cell.Myix,cell.Myiy]);built++;
         }
      }
      qaResults.push({kind:"setup",cells:cells,random:Math.random(),money:_root.Money,entry:[entry._x,entry._y],temple:[temple._x,temple._y]});
      _root.F_StarArrFun();
      return;
   }
   qaOldEnter.call(this);
   // Every frame through first damage, then spaced samples through the wave.
   if(qaTick<=220 || qaTick%28==0) {
      var enemies=[];
      for(var i=1;i<=_root.DiRenMax;i++) {
         var enemy=_root.M_DiTu0["M_DiRen"+i];
         enemies.push({id:enemy.ID,x:enemy._x,y:enemy._y,hp:enemy.HP,dead:enemy.Die,visible:enemy._visible,frame:enemy._currentframe});
      }
      var towers=[];
      for(var name in _root.M_SeSiQang) {
         var tower=_root.M_SeSiQang[name];
         if(tower.SeSiID!=undefined) towers.push({name:name,hp:tower.HP,gun:tower.M_Gong._currentframe,rotation:tower.M_Gong._rotation});
      }
      var missiles=[];
      for(var m in _root.M_DanQang) {
         var missile=_root.M_DanQang[m];
         if(typeof missile=="movieclip") missiles.push({name:m,x:missile._x,y:missile._y,frame:missile._currentframe});
      }
      qaResults.push({kind:"combat",tick:qaTick,money:_root.Money,score:_root.AllDeFen,remaining:_root.DiRenMaxZL,templeHP:_root.M_DiTu8.M_GongDian.HP,enemies:enemies,towers:towers,missiles:missiles});
   }
   if(qaTick%56==0)flash.external.ExternalInterface.call("probeProgress",String(qaTick));
   if(qaTick==840) {
      flash.external.ExternalInterface.call("probeReport",qaJson(qaResults));
      delete this.onEnterFrame;
   }
};
