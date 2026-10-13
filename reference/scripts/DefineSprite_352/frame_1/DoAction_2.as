var §\x01§ = 928;
var §\x0f§ = 1;
this.SJMoney = "<b>" + Math.round(Number(MivObject.SJMoney * _root.BuyLu)) + "</b>" + " [" + MivObject.SJMoney + "×" + _root.BuyLu + "]";
this.SJSenJiDian = "<b>" + MivObject.SJSenJiDian + "</b>";
if(MivObject.LevelB > 0)
{
   if(_root.Money < Math.round(MivObject.SJMoney * _root.BuyLu) || _root.SenJiDian < MivObject.SJSenJiDian)
   {
      B_SenJi.enabled = false;
      var colorTrans_1 = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
      var trans = new flash.geom.Transform(B_SenJi);
      trans.colorTransform = colorTrans_1;
      var QeiStr = "金钱";
      if(_root.SenJiDian < MivObject.SJSenJiDian)
      {
         QeiStr = "神迹";
      }
      MyMess = "<font color=\'#FF0000\'>没有足够的" + QeiStr + "用以升级！</font>";
   }
   else
   {
      B_SenJi.enabled = true;
      var colorTrans_1 = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      var trans = new flash.geom.Transform(B_SenJi);
      trans.colorTransform = colorTrans_1;
      MyMess = "当前可以升级！";
   }
}
else
{
   this._visible = false;
}
