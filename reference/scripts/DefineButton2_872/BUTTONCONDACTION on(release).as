on(release){
   var §\x01§ = 754;
   var §\x0f§ = 1;
   if(this.Benabled)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      if(this.Level < 6)
      {
         this.Level++;
         _root.All_FanWei = 1 + this.Level * 0.1;
         _root.Money -= Math.round(this.Level * 130 + (this.Level - 1) * 100);
         this.SJMoney = Math.round((this.Level + 1) * 130 + (this.Level + 1 - 1) * 100);
         _root.F_UpdateSeSi();
      }
      else
      {
         this.Level = 6;
      }
   }
}
