var §\x01§ = 836;
var §\x0f§ = 1;
var NowDiRenBB = _root.M_DiTu0[_root.ADiRenName];
if(_root.ADiRenName != "" && NowDiRenBB._visible && NowDiRenBB.Die == false && _parent.Star && _parent._name != "M_ShowSeSi5" && _root.GamePause == false)
{
   _parent.DiRenName = _root.ADiRenName;
   gotoAndStop("a1");
   play();
}
else
{
   _root.ADiRenName = _parent.DiRenName = "";
   gotoAndStop("a0");
   play();
}
