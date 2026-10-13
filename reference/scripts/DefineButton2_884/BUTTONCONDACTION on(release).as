on(release){
   var §\x01§ = 466;
   var §\x0f§ = 1;
   if(this.Benabled)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      if(this.Level < 6)
      {
         this.Level++;
         _root.SellLu = 0.7 + this.Level * 0.05;
         _root.BuyLu = 1 - this.Level * 0.05;
         _root.Money -= Math.round(this.Level * 99);
         this.SJMoney = Math.round((this.Level + 1) * 99);
         _root.F_UpdateSeSi();
      }
      else
      {
         this.Level = 6;
      }
   }
}
