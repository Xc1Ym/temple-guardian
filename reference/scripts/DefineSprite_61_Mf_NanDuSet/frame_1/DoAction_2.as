var §\x01§ = 303;
var §\x0f§ = 1;
B_OK.enabled = false;
var colorTrans_1 = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
var trans = new flash.geom.Transform(B_OK);
trans.colorTransform = colorTrans_1;
var MySellID = 0;
var NowThis = this;
var i = 1;
while(i <= 3)
{
   this["M_NanSel" + i].ID = i;
   this["M_NanSel" + i].onRollOver = function()
   {
      var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,200,0,0,0);
      var _loc3_ = new flash.geom.Transform(this);
      _loc3_.colorTransform = _loc2_;
   };
   this["M_NanSel" + i].onRollOut = function()
   {
      var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      var _loc3_ = new flash.geom.Transform(this);
      _loc3_.colorTransform = _loc2_;
   };
   this["M_NanSel" + i].onReleaseOutside = function()
   {
      var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      var _loc3_ = new flash.geom.Transform(this);
      _loc3_.colorTransform = _loc2_;
   };
   this["M_NanSel" + i].onRelease = function()
   {
      var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      var _loc3_ = new flash.geom.Transform(this);
      _loc3_.colorTransform = _loc2_;
      NowThis["M_NanSel" + MySellID].M_SellKang._visible = false;
      this.M_SellKang._visible = true;
      MySellID = this.ID;
      _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      _loc3_ = new flash.geom.Transform(B_OK);
      _loc3_.colorTransform = _loc2_;
      B_OK.enabled = true;
   };
   i++;
}
