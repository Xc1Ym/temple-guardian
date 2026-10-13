var §\x01§ = 729;
var §\x0f§ = 1;
GoNexSecne = function()
{
   gotoAndStop(22);
};
var PianTou = false;
M_HanZheng._alpha = 0;
M_HanZheng.GoToPD = false;
M_HanZheng.GoPlay = false;
M_HanZheng.GoSound = false;
M_HanZheng.LSZsudu = 1;
var nowMicthis = this;
nowMicthis.PianTou = true;
nowMicthis.M_LSZ.StarPD = false;
M_HanZheng.onEnterFrame = function()
{
   var _loc2_;
   if(nowMicthis.PianTou)
   {
      if(this.GoToPD == false)
      {
         if(this._alpha < 100)
         {
            this._alpha += 1;
         }
         else
         {
            this._alpha = 100;
            this.GoToPD = true;
         }
         if(this.GoSound == false && this._alpha >= 30)
         {
            _loc2_ = new Sound(this);
            _loc2_.attachSound("S_Hanzheng");
            _loc2_.start(0,1);
            this.GoSound = true;
         }
         if(this.GoPlay == false && this._alpha >= 50)
         {
            this.gotoAndPlay("a1");
            this.GoPlay = true;
         }
      }
      else if(this._alpha > 0)
      {
         this._alpha -= 2;
         nowMicthis.M_LSZ._alpha -= 2;
         nowMicthis.M_Back._alpha -= 2;
      }
      else
      {
         this._alpha = 0;
         gotoAndStop(22);
         delete this.onEnterFrame;
      }
   }
};
