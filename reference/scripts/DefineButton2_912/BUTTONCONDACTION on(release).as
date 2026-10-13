on(release){
   var §\x01§ = 889;
   var §\x0f§ = 1;
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   _root.GamePause = true;
   _root.M_ShowCang.attachMovie("Mf_GamePause","M_GamePause",999,{_x:325,_y:250});
}
