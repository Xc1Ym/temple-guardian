on(release){
   var §\x01§ = 152;
   var §\x0f§ = 1;
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   if(JianRanKong(T_UserName) == false)
   {
      SubmitUserName = escape(T_UserName.text);
      SumitURL = "http://www.9mine.com/game_score_set.php?score=" + ZiFen + "&player=" + SubmitUserName + "&game_title=Temple%20Guardian&map=" + _root.SumitMap;
      getURL(SumitURL,"_blank");
      B_SubitScore.enabled = false;
      B_SubitScore._alpha = 45;
      _root.SumitFen = false;
      _root.SumitUserS = T_UserName.text;
   }
   else
   {
      T_UserName.text = "";
      Selection.setFocus(T_UserName);
   }
}
