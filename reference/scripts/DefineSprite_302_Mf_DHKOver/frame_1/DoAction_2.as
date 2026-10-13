var §\x01§ = 133;
var §\x0f§ = 1;
if(this.GoToID > 1)
{
   gotoAndStop("a" + this.GoToID);
}
else
{
   _root.S_Sound1.stop();
   _root.S_Sound1.attachSound("Sf_Sound102");
   _root.S_Sound1.start(0,1);
   _root.F_NumShow(this,_root.GuanEWDeFen,8,-70,1,80);
   _root.F_NumShow(this,_root.AllEWDeFen,8,-43,2,80);
   _root.F_NumShow(this,_root.AllDeFen,8,-17,3,88);
   if(_root.NowGuanSu > 1)
   {
      M_SanTiao._visible = true;
      M_SanTiao.M_NieTiao._xscale = 1;
      var OpenTime = new Date();
      this.onEnterFrame = function()
      {
         var _loc3_ = new Date();
         M_SanTiao.M_NieTiao._xscale = (_loc3_ - OpenTime) / 20;
         if(_loc3_ - OpenTime > 2000)
         {
            _root.S_Sound3.stop();
            _root.S_Sound3.attachSound("Sf_Sound131");
            _root.S_Sound3.start(0,1);
            _root.F_GuanStar();
            this.removeMovieClip();
         }
      };
   }
   else
   {
      M_SanTiao._visible = false;
   }
   stop();
}
