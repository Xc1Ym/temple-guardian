var §\x01§ = 529;
var §\x0f§ = 1;
this.Sudu = 1.8 + (_root.NowGuanSu - 1) * 0.1;
if(this.Sudu > 3.6)
{
   this.Sudu = 3.6;
}
this.MAXAngle = this.Sudu * 10;
this.MaxHP = 60 * _root.NowGuanSu;
this.HP = this.MaxHP;
this.Attack = 10 * _root.NowGuanSu;
this.Money = Math.round(20 * _root.NowGuanSu);
this.SenJiDian = Math.round(10 * _root.NowGuanSu);
this.Title = "肥牛车";
this.TyleStr = "陆军";
this.Level = _root.NowGuanSu;
this.Tyle = 9999;
this.TeCang = "善逃";
this.TeSing = 5;
this.Die = true;
this.PerStar = 100;
