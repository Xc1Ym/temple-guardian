on(release){
   var §\x01§ = 199;
   var §\x0f§ = 1;
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   _root.GamePause = false;
   _root.S_Sound1.stop();
   if(_root.DiRenGoPD)
   {
      _root.S_Sound1.attachSound("Sf_Sound117");
   }
   else
   {
      _root.S_Sound1.attachSound("Sf_Sound101");
   }
   _root.S_Sound1.start(0,1);
   this.removeMovieClip();
}
