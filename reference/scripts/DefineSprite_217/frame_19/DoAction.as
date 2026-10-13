var §\x01§ = 491;
var §\x0f§ = 1;
M_JeDang._visible = _root.GameStar;
M_SoundClose._visible = !_root.SoundOn;
_root.NowDiTuID = -1;
if(_root.NowDiTuID >= 0 && _root.NowDiTuID <= 9)
{
   M_MapShow.gotoAndStop(_root.NowDiTuID + 1);
}
else
{
   M_MapShow.gotoAndStop(11);
}
stop();
