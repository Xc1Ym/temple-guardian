on(release){
   var §\x01§ = 254;
   var §\x0f§ = 1;
   _root.SoundOn = !_root.SoundOn;
   M_SoundClose._visible = !_root.SoundOn;
   if(_root.SoundOn)
   {
      _root.SoundVol = _root.SoundVolTem;
   }
   else
   {
      _root.SoundVolTem = _root.SoundVol;
      _root.SoundVol = 0;
   }
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
}
