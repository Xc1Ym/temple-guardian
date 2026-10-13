var §\x01§ = 755;
var §\x0f§ = 1;
_root.S_Sound7.stop();
_root.S_Sound7.attachSound("Sf_Sound105");
_root.S_Sound7.start(0,1);
if(this.SaveOrLoad == 2)
{
   Title = "<b>载入自定义地图</b>";
}
else if(this.SaveOrLoad == 1)
{
   Title = "<font color=\'#FF0000\'><b>保存编辑好的地图</b></font>";
}
var NowMovDi = this;
var i = 1;
while(i <= 5)
{
   this["M_SaveTiao" + i].ID = i;
   var MySaveMapObj = SharedObject.getLocal("MapSave" + i);
   this["M_SaveTiao" + i].ID = i;
   if(MySaveMapObj.data.DiTuArr != undefined)
   {
      this["M_SaveTiao" + i].TimeStr = MySaveMapObj.data.TimeStr;
      this["M_SaveTiao" + i].DiTuArr = MySaveMapObj.data.DiTuArr.slice();
   }
   else
   {
      this["M_SaveTiao" + i].TimeStr = "该存档为空！";
      this["M_SaveTiao" + i].DiTuArr = [];
   }
   if(this.SaveOrLoad == 2)
   {
      if(MySaveMapObj.data.DiTuArr != undefined)
      {
         this["M_SaveTiao" + i]._alpha = 100;
         this["M_SaveTiao" + i].onRelease = function()
         {
            _root.MyDiTuArr = this.DiTuArr.slice();
            _root.M_ShowCang.M_DHKStar.M_NeiRong.M_DiTuSet.gotoAndStop("a11");
            _root.M_ShowCang.M_DHKStar.M_NeiRong.MyDiToIDstr = "自定义地图ID：［ <b>" + this.ID + "</b> ］";
            _root.NowDiTuID = 10;
            NowMovDi.removeMovieClip();
         };
      }
      else
      {
         this["M_SaveTiao" + i].TimeStr = "该存档为空！";
         this["M_SaveTiao" + i]._alpha = 50;
      }
   }
   else if(this.SaveOrLoad == 1)
   {
      this["M_SaveTiao" + i]._alpha = 100;
      this["M_SaveTiao" + i].DiTuArr = NowMovDi.DiTuArr;
      this["M_SaveTiao" + i].onRelease = function()
      {
         var _loc3_ = SharedObject.getLocal("MapSave" + this.ID);
         var _loc2_ = new Date();
         _loc3_.clear();
         _loc3_.data.ID = this.ID;
         _loc3_.data.TimeStr = _loc2_.getFullYear() + "-" + Number(_loc2_.getMonth() + 1) + "-" + _loc2_.getDate() + " " + _loc2_.getHours() + ":" + _loc2_.getMinutes() + ":" + _loc2_.getSeconds();
         _loc3_.data.DiTuArr = this.DiTuArr.slice();
         this.TimeStr = _loc3_.data.TimeStr;
      };
   }
   if(this["M_SaveTiao" + i].TimeStr != "该存档为空！" || this.SaveOrLoad == 1)
   {
      this["M_SaveTiao" + i].onRollOver = function()
      {
         var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,125,0,0,0);
         var _loc3_ = new flash.geom.Transform(this);
         _loc3_.colorTransform = _loc2_;
      };
      this["M_SaveTiao" + i].onRollOut = function()
      {
         var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
         var _loc3_ = new flash.geom.Transform(this);
         _loc3_.colorTransform = _loc2_;
      };
      this["M_SaveTiao" + i].onReleaseOutside = function()
      {
         var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
         var _loc3_ = new flash.geom.Transform(this);
         _loc3_.colorTransform = _loc2_;
      };
   }
   i++;
}
