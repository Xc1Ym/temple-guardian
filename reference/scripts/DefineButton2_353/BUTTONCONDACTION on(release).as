on(release){
   var §\x01§ = 727;
   var §\x0f§ = 1;
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   _root.Money += Math.round(MivObject.Money * _root.SellLu);
   if(MivObject.TaTyle == 5)
   {
      _root.LieRingCount--;
   }
   if(MivObject.TaTyle == 6)
   {
      _root.SenLongCount--;
   }
   MivObject.DiTuObject.SeSi = "";
   _root.SeSiDephNext = MivObject.getDepth();
   MivObject.removeMovieClip();
   _parent.removeMovieClip();
}
