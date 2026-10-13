on(release){
   var §\x01§ = 400;
   var §\x0f§ = 1;
   if(_root.Money >= MivObject.SJMoney)
   {
      _root.S_Sound3.stop();
      _root.S_Sound3.attachSound("Sf_Sound131");
      _root.S_Sound3.start(0,1);
      _root.Money -= Math.round(MivObject.SJMoney * _root.BuyLu);
      _root.SenJiDian -= MivObject.SJSenJiDian;
      MivObject._parent.Money += MivObject.SJMoney;
      var GoToLLevel = MivObject.LevelB;
      MivObject.gotoAndStop("a" + GoToLLevel);
      this.onEnterFrame = function()
      {
         var _loc6_;
         var _loc7_;
         var _loc5_;
         var _loc4_;
         if(MivObject.Level == GoToLLevel)
         {
            _parent.Level = MivObject.Level;
            if(MivObject._parent.TaTyle == 1 || MivObject._parent.TaTyle == 2)
            {
               _parent.All_Attack = _root.All_Attack;
            }
            if(MivObject._parent.Tyle == 2)
            {
               _parent.All_MaxHP = _root.All_MaxHP;
            }
            _loc6_ = "<b>" + MivObject._parent.Attack + "</b>";
            _loc7_ = "<b>" + MivObject._parent.AttackB + "</b>";
            if(MivObject._parent.TaTyle == 1 || MivObject._parent.TaTyle == 2)
            {
               _loc6_ = "<b>" + Math.round(MivObject._parent.Attack * _root.All_Attack) + "</b>";
               _loc6_ += " [" + MivObject._parent.Attack + "×" + _root.All_Attack + "]";
               _loc7_ = "<b>" + Math.round(MivObject._parent.AttackB * _root.All_Attack) + "</b>";
               _loc7_ += " [" + MivObject._parent.AttackB + "×" + _root.All_Attack + "]";
            }
            _parent.Attack = _loc6_;
            _parent.AttackB = _loc7_;
            _loc5_ = "<b>" + MivObject.MaxHP + "</b>";
            _loc4_ = "<b>" + MivObject.MaxHP + "</b>";
            if(MivObject._parent.Tyle == 2)
            {
               _loc5_ = "<b>" + Math.round(MivObject.MaxHP * _root.All_MaxHP) + "</b>";
               _loc5_ += " [" + MivObject.MaxHP + "×" + _root.All_MaxHP + "]";
               _loc4_ = "<b>" + Math.round(MivObject.MaxHPB * _root.All_MaxHP) + "</b>";
               _loc4_ += " [" + MivObject.MaxHPB + "×" + _root.All_MaxHP + "]";
            }
            _parent.MaxHP = _loc5_;
            _parent.MaxHPB = _loc4_;
            _parent.HP = "<b>" + MivObject.HP + "</b>";
            _parent.HPB = "<b>" + MivObject.HPB + "</b>";
            _parent.FanWei = "<b>" + MivObject._parent.FanWei + "</b>";
            _parent.FaSieJJ = "<b>" + MivObject._parent.FaSieJJ + "</b>";
            _parent.JianSuDu = "<b>" + MivObject._parent.JianSuDu + "</b>";
            _parent.LevelB = "<b>" + MivObject._parent.LevelB + "</b>";
            _parent.FanWeiB = "<b>" + MivObject._parent.FanWeiB + "</b>";
            _parent.FaSieJJB = "<b>" + MivObject._parent.FaSieJJB + "</b>";
            _parent.JianSuDuB = "<b>" + MivObject._parent.JianSuDuB + "</b>";
            MivObject.M_FanGiang._visible = true;
            _root.F_UpdateSeSi();
            delete this.onEnterFrame;
         }
      };
   }
}
