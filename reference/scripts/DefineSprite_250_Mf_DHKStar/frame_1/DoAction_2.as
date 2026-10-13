var §\x01§ = 570;
var §\x0f§ = 1;
B_GameStar._visible = !_root.GameStar;
B_GameBack._visible = _root.GameStar;
if(_root.GameStar)
{
   B_DaoHang5.enabled = false;
   M_NeiRong.gotoAndStop("a2");
   M_JeDang._visible = true;
}
else
{
   B_DaoHang5.enabled = true;
   M_JeDang._visible = false;
}
_root.S_Sound1.stop();
_root.S_Sound1.attachSound("Sf_Sound106");
_root.S_Sound1.start(0,99999);
