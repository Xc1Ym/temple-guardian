var §\x01§ = 964;
var §\x0f§ = 1;
var NowPoint = {x:0,y:0};
this.M_Jian.localToGlobal(NowPoint);
if(_root.MySellID == 3)
{
   _parent.HPmini--;
   _parent.HP = Math.round(_parent.HPmini / _root.SeSiHPmini);
   if(_parent.HP <= 1)
   {
      _root.S_Sound4.stop();
      _root.S_Sound4.attachSound("Sf_Sound123");
      _root.S_Sound4.start(0,1);
      _parent.DiTuObject.SeSi = "";
      _parent.removeMovieClip();
   }
   _parent.Money--;
   if(_parent.Money < 0)
   {
      _parent.Money = 0;
   }
}
_root.F_SeiJian(_parent.DiRenName,_parent.Attack,"Mf_Jian4",_parent.FanWei + 10,_parent.JianSuDu,this._rotation,NowPoint.x,NowPoint.y,5,this);
_parent.TemFaSieJJ = 0;
play();
