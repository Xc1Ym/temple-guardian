var §\x01§ = 794;
var §\x0f§ = 1;
if(this.MivObject._visible)
{
   this.Title = this.MivObject.Title;
   this.TyleStr = this.MivObject.TyleStr;
   this.Level = this.MivObject.Level;
   var AttackStr = "<b>" + this.MivObject.Attack + "</b>";
   var AttackStrB = "<b>" + this.MivObject.AttackB + "</b>";
   if(this.MivObject.TaTyle == 1 || this.MivObject.TaTyle == 2)
   {
      AttackStr = "<b>" + this.MivObject.Attack + "</b>";
      AttackStr += " [" + this.MivObject.rAttack + "×" + _root.All_Attack + "]";
      AttackStrB = "<b>" + Math.round(this.MivObject.AttackB * _root.All_Attack) + "</b>";
      AttackStrB += " [" + this.MivObject.AttackB + "×" + _root.All_Attack + "]";
   }
   this.Attack = AttackStr;
   this.AttackB = AttackStrB;
   var MaxHPStr = "<b>" + this.MivObject.MaxHP + "</b>";
   var MaxHPStrB = "<b>" + this.MivObject.MaxHPB + "</b>";
   if(this.MivObject.Tyle != 0)
   {
      MaxHPStr = "<b>" + this.MivObject.MaxHP + "</b>";
      MaxHPStr += " [" + this.MivObject.rMaxHP + "×" + _root.All_MaxHP + "]";
      MaxHPStrB = "<b>" + Math.round(this.MivObject.MaxHPB * _root.All_MaxHP) + "</b>";
      MaxHPStrB += " [" + this.MivObject.MaxHPB + "×" + _root.All_MaxHP + "]";
   }
   this.MaxHP = MaxHPStr;
   this.MaxHPB = MaxHPStrB;
   this.HP = "<b>" + this.MivObject.HP + "</b>";
   this.HPB = "<b>" + this.MivObject.HPB + "</b>";
   this.FanWei = "<b>" + this.MivObject.FanWei + "</b>";
   this.FaSieJJ = "<b>" + this.MivObject.FaSieJJ + "</b>";
   this.JianSuDu = "<b>" + this.MivObject.JianSuDu + "</b>";
   this.LevelB = this.MivObject.LevelB;
   if(this.LevelB > 0)
   {
      this.FanWeiB = "<b>" + this.MivObject.FanWeiB + "</b>";
      this.FaSieJJB = "<b>" + this.MivObject.FaSieJJB + "</b>";
      this.JianSuDuB = "<b>" + this.MivObject.JianSuDuB + "</b>";
      this.Sudu = "<b>" + this.MivObject.Sudu + "</b>";
      this.Money = "<b>" + this.MivObject.Money + "</b>";
      this.SenJiDian = "<b>" + this.MivObject.SenJiDian + "</b>";
   }
   else
   {
      this.MaxHPB = "已升至最高级！";
      this.HPB = "已升至最高级！";
      this.AttackB = "已升至最高级！";
      this.FaSieJJB = "已升至最高级！";
      this.FanWeiB = "已升至最高级！";
      this.JianSuDuB = "已升至最高级！";
   }
}
else
{
   this.removeMovieClip();
}
play();
