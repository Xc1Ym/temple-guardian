var §\x01§ = 952;
var §\x0f§ = 1;
var S_Sound1 = new Sound(_root.M_Sound1);
var S_Sound2 = new Sound(_root.M_Sound2);
var S_Sound3 = new Sound(_root.M_Sound3);
var S_Sound4 = new Sound(_root.M_Sound4);
var S_Sound5 = new Sound(_root.M_Sound5);
var S_Sound6 = new Sound(_root.M_Sound6);
var S_Sound7 = new Sound(_root.M_Sound7);
S_Sound2.onSoundComplete = function()
{
   _root.M_Sound2Star = false;
};
var i = 1;
while(i <= 7)
{
   var NowSetVol = _root.SoundVol;
   if((i == 1 || i == 2) && _root.SoundVol > 0)
   {
      NowSetVol = Math.round(_root.SoundVol / 1.1);
   }
   _root["S_Sound" + i].setVolume(NowSetVol);
   i++;
}
_root.B2_ShowSeSi1._visible = false;
_root.B2_ShowSeSi2._visible = false;
_root.B2_ShowSeSi3._visible = false;
_root.B2_ShowSeSi4._visible = false;
_root.B2_ShowSeSi5._visible = false;
_root.B2_ShowSeSi6._visible = false;
_root.B2_ShowSeSi101._visible = false;
_root.B2_ShowSeSi201._visible = false;
_root.B2_ShowSeSi202._visible = false;
_root.B2_ShowSeSi102._visible = false;
_root.M_ShowSeSi1.Star = false;
_root.M_ShowSeSi2.Star = false;
_root.M_ShowSeSi3.Star = false;
_root.M_ShowSeSi4.Star = false;
_root.M_ShowSeSi5.Star = false;
_root.M_ShowSeSi6.Star = false;
_root.M_ShowSeSi101.Star = false;
_root.M_ShowSeSi201.Star = false;
_root.M_ShowSeSi202.Star = false;
_root.M_ShowSeSi102.Star = false;
_root.M_NowTimeGO.M_TimeScal.StarSound = false;
_root.onEnterFrame = function()
{
   var _loc3_;
   var _loc2_;
   if(_root.GameStar && _root.GamePause == false)
   {
      _root.F_UpdateButton();
      if(_root.B_GuanStar.enabled && (_root.MySellID == 2 || _root.MySellID == 3))
      {
         _root.NowTimeGO++;
         _loc3_ = new Date();
         _loc2_ = (_loc3_ - _root.NowTimeZL) / 1000;
         _root.M_NowTimeGO.M_TimeScal._yscale = 100 - _loc2_ * (100 / _root.AllTimeGO);
         if(_root.M_NowTimeGO.M_TimeScal._yscale < 25 && _root.M_NowTimeGO.M_TimeScal.StarSound == false)
         {
            _root.S_Sound7.stop();
            _root.S_Sound7.attachSound("Sf_Sound105");
            _root.S_Sound7.start(0,1);
            _root.M_NowTimeGO.M_TimeScal.StarSound = true;
         }
         if(_loc2_ >= _root.AllTimeGO)
         {
            _root.F_StarArrFun();
         }
      }
      if(_root.B_GuanStar.enabled == false)
      {
         _root.F_GuanPass();
      }
   }
};
_root.M_ShowCang.attachMovie("Mf_DHKStar","M_DHKStar",1000,{_x:325,_y:250});
_root.onKeyDown = function()
{
   if(Key.isDown(80) && _root.GameStar && _root.GamePause == false)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      _root.GamePause = true;
      _root.M_ShowCang.attachMovie("Mf_GamePause","M_GamePause",999,{_x:325,_y:250});
   }
   var _loc2_;
   var _loc3_;
   if(Key.isDown(83) && _root.GameStar && _root.GamePause == false)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      _root.SoundOn = !_root.SoundOn;
      _root.M_ToolB4.M_SoundClose._visible = !_root.SoundOn;
      if(_root.SoundOn)
      {
         _root.SoundVol = _root.SoundVolTem;
      }
      else
      {
         _root.SoundVolTem = _root.SoundVol;
         _root.SoundVol = 0;
      }
      _loc2_ = 1;
      while(_loc2_ <= 7)
      {
         _loc3_ = _root.SoundVol;
         if((_loc2_ == 1 || _loc2_ == 2) && _root.SoundVol > 0)
         {
            _loc3_ = Math.round(_root.SoundVol / 1.2);
         }
         _root["S_Sound" + _loc2_].setVolume(_loc3_);
         _loc2_ = _loc2_ + 1;
      }
   }
   if(Key.isDown(72) && _root.GameStar && _root.GamePause == false)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      _root.GamePause = true;
      _root.M_ShowCang.attachMovie("Mf_DHKStar","M_DHKStar",1000,{_x:325,_y:250});
   }
   if(Key.isDown(81) && _root.GameStar && _root.GamePause == false)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      _root.GamePause = true;
      _root.M_ShowCang.attachMovie("Mf_DHKSunWen","M_DHKSunWen",999,{_x:325,_y:250});
   }
   if(Key.isDown(32) && _root.GameStar && _root.B_GuanStar.enabled)
   {
      _root.F_StarArrFun();
   }
   if(Key.isDown(65) && _root.GameStar && _root.GamePause == false)
   {
      if(_root.LieRingCount > 0 && _root.M_ShowCang.M_DHKSuSing.MivObject.Die == false && (_root.M_ShowCang.M_DHKSuSing.MivObject.TyleStr == "陆军" || _root.M_ShowCang.M_DHKSuSing.MivObject.TyleStr == "空军"))
      {
         _root.S_Sound3.stop();
         _root.S_Sound3.attachSound("Sf_Sound131");
         _root.S_Sound3.start(1,1);
         _root.ADiRenName = _root.M_ShowCang.M_DHKSuSing.MivObject._name;
      }
   }
};
Key.addListener(_root);
