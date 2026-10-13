var §\x01§ = 125;
var §\x0f§ = 1;
_root.NowDiTuID = 10;
if(_root.NowDiTuID >= 0 && _root.NowDiTuID <= 9)
{
   _parent.M_MapShow.gotoAndStop(_root.NowDiTuID + 1);
}
else
{
   _parent.M_MapShow.gotoAndStop(11);
}
stop();
