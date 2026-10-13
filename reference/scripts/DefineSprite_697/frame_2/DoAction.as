var §\x01§ = 230;
var §\x0f§ = 1;
_parent.TemFaSieJJ++;
if(_parent.TemFaSieJJ > _parent.FaSieJJ)
{
   if(_parent.DiRenName != "" && _parent.RotionedPD && _root.GamePause == false)
   {
      gotoAndStop("a1");
      play();
   }
   else
   {
      gotoAndStop("a0");
      play();
   }
}
else
{
   gotoAndStop("a0");
   play();
}
