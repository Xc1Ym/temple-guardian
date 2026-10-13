on(release){
   var §\x01§ = 319;
   var §\x0f§ = 1;
   if(this.Benabled)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      if(this.Level < 6)
      {
         this.Level++;
         var TempAttAck = 1 + this.Level * 0.3;
         var TempAttAckA = Math.floor(TempAttAck);
         var TempAttAckB = Math.round((TempAttAck - TempAttAckA) * 10);
         _root.All_MaxHP = TempAttAckA + TempAttAckB / 10;
         _root.Money -= Math.round(this.Level * 120 + (this.Level - 1) * 80);
         this.SJMoney = Math.round((this.Level + 1) * 120 + (this.Level + 1 - 1) * 80);
         _root.F_UpdateSeSi(9);
      }
      else
      {
         this.Level = 6;
      }
   }
}
