on(release){
   var §\x01§ = 457;
   var §\x0f§ = 1;
   if(this.Benabled)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      if(this.Level < 6)
      {
         this.Level++;
         _root.AllSen_FanWei = 1 + this.Level * 0.1;
         _root.Money -= Math.round(this.Level * 500 + (this.Level - 1) * 66);
         _root.SenJiDian -= Math.round(this.Level * 150 + (this.Level - 1) * 50);
         this.SJMoney = Math.round((this.Level + 1) * 500 + (this.Level + 1 - 1) * 66);
         this.SJSenJiDian = Math.round((this.Level + 1) * 120 + (this.Level + 1 - 1) * 50);
         _root.F_UpdateSeSi();
      }
      else
      {
         this.Level = 6;
      }
   }
}
