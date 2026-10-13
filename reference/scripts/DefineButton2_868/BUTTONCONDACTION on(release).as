on(release){
   var §\x01§ = 323;
   var §\x0f§ = 1;
   if(this.Benabled)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      if(this.Level < 6)
      {
         this.Level++;
         var TempAttAck = 1 + this.Level * 0.4;
         var TempAttAckA = Math.floor(TempAttAck);
         var TempAttAckB = Math.round((TempAttAck - TempAttAckA) * 10);
         _root.All_Attack = TempAttAckA + TempAttAckB / 10;
         _root.Money -= Math.round(this.Level * 150 + (this.Level - 1) * 220);
         this.SJMoney = Math.round((this.Level + 1) * 150 + (this.Level + 1 - 1) * 220);
         _root.F_UpdateSeSi();
      }
      else
      {
         this.Level = 6;
      }
   }
}
