on(release){
   var §\x01§ = 768;
   var §\x0f§ = 1;
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   GoToID--;
   if(GoToID < 0)
   {
      GoToID = _root.DiTuCount;
   }
   _root.NowDiTuID = GoToID - 1;
   if(_root.NowDiTuID >= 0 && _root.NowDiTuID <= 9)
   {
      _parent.M_MapShow.gotoAndStop(_root.NowDiTuID + 1);
   }
   else
   {
      _parent.M_MapShow.gotoAndStop(11);
   }
   gotoAndStop("a" + GoToID);
}
