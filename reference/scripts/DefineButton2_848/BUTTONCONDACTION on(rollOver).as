on(rollOver){
   var §\x01§ = 882;
   var §\x0f§ = 1;
   _root.MessText = _root.M_ShowSeSi201.MessText;
   _root.M_MainSSBan.MessAttack = "<font color=\'#FF0000\'><b>" + _root.M_ShowSeSi201.Attack + "</b></font>";
   _root.M_MainSSBan.MessMoney = "<font color=\'#FF0000\'><b>" + Math.round(Number(_root.M_ShowSeSi201.Money * _root.BuyLu)) + "</b></font>" + "[" + _root.M_ShowSeSi201.Money + "×" + _root.BuyLu + "]";
   _root.M_MainSSBan.MessHP = "<font color=\'#FF0000\'><b>" + Math.round(Number(_root.M_ShowSeSi201.MaxHP * _root.All_MaxHP)) + "</b></font>" + "[" + _root.M_ShowSeSi201.MaxHP + "×" + _root.All_MaxHP + "]";
   _root.M_MainSSBan.MessSenJi = "<font color=\'#FF0000\'><b>" + _root.M_ShowSeSi201.SenJiDian + "</b></font>";
}
