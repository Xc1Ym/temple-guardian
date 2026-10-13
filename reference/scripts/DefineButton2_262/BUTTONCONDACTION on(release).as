on(release){
   var §\x01§ = 355;
   var §\x0f§ = 1;
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   if(_root.NowGuanSu == 1)
   {
      _root.M_ShowCang.attachMovie("Mf_NanDuSet","M_NanDuSet",1000,{_x:325,_y:250});
   }
   else
   {
      _root.F_GuanStar();
   }
   this.removeMovieClip();
}
