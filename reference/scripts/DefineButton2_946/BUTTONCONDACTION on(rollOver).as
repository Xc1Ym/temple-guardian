on(rollOver){
   var §\x01§ = 981;
   var §\x0f§ = 1;
   _root.MessText = _root.M_ShowSeSi102.MessText;
   _root.M_MainSSBan.MessAttack = "<font color=\'#FF0000\'><b>" + _root.M_ShowSeSi102.Attack + "</b></font>";
   _root.M_MainSSBan.MessMoney = "<font color=\'#FF0000\'><b>" + Math.round(Number(_root.M_ShowSeSi102.Money * _root.BuyLu)) + "</b></font>" + "[" + _root.M_ShowSeSi102.Money + "×" + _root.BuyLu + "]";
   _root.M_MainSSBan.MessHP = "<font color=\'#FF0000\'><b>" + _root.M_ShowSeSi102.MaxHP + "</b></font>" + " [×" + _root.All_MaxHP + "]";
   _root.M_MainSSBan.MessSenJi = "<font color=\'#FF0000\'><b>" + _root.M_ShowSeSi102.SenJiDian + "</b></font>";
}
