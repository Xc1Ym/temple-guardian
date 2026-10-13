var §\x01§ = 978;
var §\x0f§ = 1;
if(this.FanGiangV)
{
   M_FanGiang.gotoAndStop("a1");
}
else
{
   M_FanGiang.gotoAndStop("a0");
}
B_Button._visible = this.Star;
M_FanGiang._width = M_FanGiang._height = this.FanWei * 2;
this.onEnterFrame = _root.F_JianTaRot;
