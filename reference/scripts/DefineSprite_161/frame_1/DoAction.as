var §\x01§ = 211;
var §\x0f§ = 1;
var PressSet = false;
M_VomRB.onPress = function()
{
   if(_root.SoundOn)
   {
      PressSet = true;
      this.startDrag(false,8,0,75,0);
   }
};
M_VomRB.onRelease = function()
{
   if(_root.SoundOn)
   {
      PressSet = false;
      this.stopDrag();
   }
};
M_VomRB.onReleaseOutside = function()
{
   if(_root.SoundOn)
   {
      PressSet = false;
      this.stopDrag();
   }
};
M_VomRB.onEnterFrame = function()
{
   var _loc3_;
   var _loc4_;
   if(_root.SoundOn)
   {
      if(PressSet)
      {
         _root.SoundVolTem = _root.SoundVol = (this._x - 8) * 1.492537313432836;
         _loc3_ = 1;
         while(_loc3_ <= 7)
         {
            _loc4_ = _root.SoundVol;
            if((_loc3_ == 1 || _loc3_ == 2) && _root.SoundVol > 0)
            {
               _loc4_ = Math.round(_root.SoundVol / 1.1);
            }
            _root["S_Sound" + _loc3_].setVolume(_loc4_);
            _loc3_ = _loc3_ + 1;
         }
      }
      else
      {
         this._x = 8 + _root.SoundVolTem / 1.492537313432836;
      }
   }
};
