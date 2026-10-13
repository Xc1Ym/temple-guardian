var §\x01§ = 486;
var §\x0f§ = 1;
var DiRenStar_x = 0;
var DiRenStar_y = 0;
var DiRenLondCount = 0;
var LoadArr = [];
var TemSeSiShow = 0;
var SeSiDeph = 0;
var SeSiDephNext = 0;
var RuanQenDeph = 100;
var SenLongCount = 0;
var SumitMap = "";
F_CreaDiTu = function()
{
   var _loc22_ = 0;
   var _loc16_ = 0;
   _root.DiRenLondCount = 0;
   var _loc6_ = [];
   var _loc40_ = [];
   var _loc36_ = 0;
   if(_root.NowDiTuID == 10)
   {
      _loc6_ = _root.MyDiTuArr.slice();
   }
   else
   {
      _loc6_ = _root.Arr_DiTu[_root.NowDiTuID].slice();
   }
   var _loc5_ = 0;
   var _loc4_;
   var _loc15_;
   var _loc12_;
   var _loc10_;
   var _loc13_;
   var _loc9_;
   var _loc24_;
   var _loc35_;
   var _loc3_;
   var _loc14_;
   while(_loc5_ <= 12)
   {
      _loc4_ = 0;
      while(_loc4_ <= 12)
      {
         _loc15_ = _loc6_[_loc5_][_loc4_];
         _loc12_ = "Mf_CqoDi1";
         _loc10_ = 0;
         _loc13_ = 1;
         var DiTuTyle = 0;
         _loc9_ = "";
         var SeSiSetPD = true;
         _loc24_ = false;
         if(_loc15_ == 0)
         {
            _loc13_ = 1;
            DiTuTyle = 0;
            _loc22_ = _loc22_ + 1;
            _loc10_ = _loc22_;
            _loc9_ = "DiTuKan" + _loc22_;
            if(_loc6_[_loc5_ - 1][_loc4_] != 2 && _loc6_[_loc5_ - 1][_loc4_] != 9 && _loc6_[_loc5_ + 1][_loc4_] != 2 && _loc6_[_loc5_ + 1][_loc4_] != 9 && _loc6_[_loc5_][_loc4_ - 1] != 2 && _loc6_[_loc5_][_loc4_ - 1] != 9 && _loc6_[_loc5_][_loc4_ + 1] != 2 && _loc6_[_loc5_][_loc4_ + 1] != 9 && _loc6_[_loc5_ - 1][_loc4_ - 1] != 2 && _loc6_[_loc5_ - 1][_loc4_ - 1] != 9 && _loc6_[_loc5_ + 1][_loc4_ + 1] != 2 && _loc6_[_loc5_ + 1][_loc4_ + 1] != 9 && _loc6_[_loc5_ + 1][_loc4_ - 1] != 2 && _loc6_[_loc5_ + 1][_loc4_ - 1] != 9 && _loc6_[_loc5_ - 1][_loc4_ + 1] != 2 && _loc6_[_loc5_ - 1][_loc4_ + 1] != 9)
            {
               _loc24_ = true;
               _loc40_.push(_loc9_);
               if(_loc36_ < _root.ZuQiaoMax)
               {
                  SeSiSetPD = false;
                  _loc35_ = Math.floor(Math.random() * 6) + 1;
                  _loc12_ = "Mf_ZuCqoDi" + _loc35_;
                  _loc36_ = _loc36_ + 1;
               }
            }
         }
         else if(_loc15_ == 1)
         {
            _loc12_ = "Mf_NiLu1";
            _loc13_ = 2;
            DiTuTyle = 1;
            _loc16_ = _loc16_ + 1;
            _loc10_ = _loc16_;
            _loc9_ = "DiTuKan" + _loc16_;
            _root.DiRenLondCount++;
            _root.LoadArr.push(_loc9_);
         }
         else if(_loc15_ == 2)
         {
            _loc12_ = "Mf_GongDian1";
            _loc10_ = 200 + _loc22_;
            _loc13_ = 8;
            DiTuTyle = 2;
            _loc9_ = "M_GongDian";
         }
         else if(_loc15_ == 9)
         {
            _loc12_ = "Mf_RuKo1";
            _loc13_ = 2;
            DiTuTyle = 9;
            _loc16_ = _loc16_ + 1;
            _loc10_ = _loc16_;
            _loc9_ = "M_RuKo";
            _root.DiRenStar_x = 6 + _loc4_ * 32;
            _root.DiRenStar_y = 6 + _loc5_ * 32;
            _root.M_TemQang.attachMovie("Mf_RuKoRun","M_RuKoRun",5,{_x:_root.DiRenStar_x,_y:_root.DiRenStar_y});
            _root.M_TemQang.M_RuKoRun.Myix = _loc4_;
            _root.M_TemQang.M_RuKoRun.Myiy = _loc5_;
         }
         _loc3_ = _root["M_DiTu" + _loc13_].attachMovie(_loc12_,_loc9_,_loc10_);
         _loc3_._x = 6 + _loc4_ * 32;
         _loc3_._y = 6 + _loc5_ * 32;
         _loc3_.Myix = _loc4_;
         _loc3_.Myiy = _loc5_;
         _loc3_.DiTuTyle = DiTuTyle;
         _loc3_.SeSi = "";
         _loc3_.SesiSet = false;
         _loc3_.SeSiSetPD = SeSiSetPD;
         _loc3_.ZuQiaoOK = _loc24_;
         if(SeSiSetPD == false)
         {
            _loc14_ = Math.floor(Math.random() * 4) + 1;
            if(_loc14_ == 1)
            {
               _loc3_._xscale = 100;
               _loc3_._yscale = 100;
            }
            else if(_loc14_ == 2)
            {
               _loc3_._xscale = -100;
               _loc3_._yscale = 100;
            }
            else if(_loc14_ == 3)
            {
               _loc3_._xscale = 100;
               _loc3_._yscale = -100;
            }
            else if(_loc14_ == 4)
            {
               _loc3_._xscale = -100;
               _loc3_._yscale = -100;
            }
         }
         if(_loc3_.DiTuTyle == 2)
         {
            var NowMySenDan = _loc3_;
            _loc3_.B_Button.onRelease = function()
            {
               _root.S_Sound4.stop();
               _root.S_Sound4.attachSound("Sf_Sound119");
               _root.S_Sound4.start(0,1);
               _root.TemSeSiShow = 0;
               _root.M_ShowCang.M_DHKSuSing.MivObject.M_FanGiang.gotoAndStop("a0");
               _root.M_ShowCang.M_DHKSuSing.MivObject.M_Selled.removeMovieClip();
               _root.M_ShowCang.attachMovie("Mf_DHKSuSing","M_DHKSuSing",10,{_x:522,_y:175});
               var _loc2_ = 2;
               _root.M_ShowCang.M_DHKSuSing.gotoAndStop("a" + _loc2_);
               _root.M_ShowCang.M_DHKSuSing.Title = NowMySenDan.Title;
               _root.M_ShowCang.M_DHKSuSing.TyleStr = NowMySenDan.TyleStr;
               _root.M_ShowCang.M_DHKSuSing.Level = NowMySenDan.Level;
               _root.M_ShowCang.M_DHKSuSing.HP = "<b>" + NowMySenDan.HP + "</b>";
               _root.M_ShowCang.M_DHKSuSing.MaxHP = "<b>" + NowMySenDan.MaxHP + "</b>";
               _root.M_ShowCang.M_DHKSuSing.LevelB = NowMySenDan.LevelB;
               _root.M_ShowCang.M_DHKSuSing.HPB = "<b>" + NowMySenDan.HPB + "</b>";
               _root.M_ShowCang.M_DHKSuSing.MaxHPB = "<b>" + NowMySenDan.MaxHPB + "</b>";
               _root.M_ShowCang.M_DHKSuSing.MivObject = NowMySenDan;
               _root.M_ShowCang.M_DHKSuSing.M_SenJiBan.MivObject = NowMySenDan;
               _root.M_ShowCang.M_DHKSuSing.M_SellBan._visible = false;
               NowMySenDan.M_FanGiang.gotoAndStop("a1");
            };
            delete NowMySenDan;
         }
         else
         {
            _loc3_.onKillFocus = function()
            {
               _root.TemSeSiShow = 0;
               _root.M_TemQang.M_TemSeSi.removeMovieClip();
            };
            _loc3_.onRollOver = function()
            {
               var _loc3_;
               var _loc5_;
               var _loc4_;
               var _loc8_;
               var _loc7_;
               var _loc12_;
               var _loc13_;
               var _loc14_;
               var _loc10_;
               var _loc6_;
               var _loc11_;
               var _loc9_;
               var _loc16_;
               if(this.DiTuTyle != 2)
               {
                  if(_root.TemSeSiShow > 0 && (_root.Money < _root["M_ShowSeSi" + _root.TemSeSiShow].Money * _root.BuyLu || _root.SenJiDian < _root["M_ShowSeSi" + _root.TemSeSiShow].SenJiDian))
                  {
                     _root.TemSeSiShow = 0;
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                  }
                  if(_root.TemSeSiShow > 0 && this.SeSi == "" && this.SeSiSetPD)
                  {
                     this.useHandCursor = true;
                     _loc3_ = _root.M_TemQang.attachMovie("Mf_SeSi" + _root.TemSeSiShow,"M_TemSeSi",10,{FanGiangV:true});
                     _loc3_._alpha = 60;
                     _loc3_._x = this._x;
                     _loc3_._y = this._y;
                     _loc3_.Star = false;
                     _loc5_ = 0;
                     _loc4_ = 1;
                     if(_root.TemSeSiShow >= 100)
                     {
                        _loc5_ = 1;
                        _loc4_ = 0;
                     }
                     if(this.DiTuTyle == _loc5_)
                     {
                        _loc8_ = _root.M_DiTu2.M_RuKo._x - this._x;
                        _loc7_ = _root.M_DiTu2.M_RuKo._y - this._y;
                        _loc12_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
                        _loc13_ = _root.M_DiTu8.M_GongDian._x - this._x;
                        _loc14_ = _root.M_DiTu8.M_GongDian._y - this._y;
                        _loc10_ = Math.sqrt(Math.pow(_loc13_,2) + Math.pow(_loc14_,2));
                        if(_loc12_ < 58)
                        {
                           _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,125,0,0,0);
                           _loc11_ = new flash.geom.Transform(_loc3_);
                           _loc11_.colorTransform = _loc6_;
                           this.SesiSet = false;
                           _root.MessText = "<font color=\'#FF0000\'>所有设施都不能修建在敌人入口附近。</font>";
                        }
                        else if(_loc10_ < 48)
                        {
                           _root.M_TemQang.M_TemSeSi.removeMovieClip();
                           this.useHandCursor = false;
                        }
                        else if((_root.TemSeSiShow == 3 || _root.TemSeSiShow == 4) && _root.NowGuanSu <= 30)
                        {
                           _loc8_ = _root.M_DiTu8.M_GongDian._x - this._x;
                           _loc7_ = _root.M_DiTu8.M_GongDian._y - this._y;
                           _loc12_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
                           if(_loc12_ > _root.M_DiTu8.M_GongDian.FanWei)
                           {
                              _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,125,0,0,0);
                              _loc11_ = new flash.geom.Transform(_loc3_);
                              _loc11_.colorTransform = _loc6_;
                              this.SesiSet = false;
                              _root.MessText = "<font color=\'#FF0000\'>神御塔必须修建在神殿附近神力覆盖范围之内。</font>";
                           }
                           else
                           {
                              _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,125,0,0);
                              _loc11_ = new flash.geom.Transform(_loc3_);
                              _loc11_.colorTransform = _loc6_;
                              this.SesiSet = true;
                              _root.MessText = "<font color=\'#006F21\'>该地点可以修建该设施！</font>";
                           }
                        }
                        else if(_root.TemSeSiShow == 6)
                        {
                           _loc8_ = _root.M_DiTu8.M_GongDian._x - this._x;
                           _loc7_ = _root.M_DiTu8.M_GongDian._y - this._y;
                           _loc12_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
                           if(_loc12_ > _root.M_DiTu8.M_GongDian.FanWei)
                           {
                              _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,125,0,0,0);
                              _loc11_ = new flash.geom.Transform(_loc3_);
                              _loc11_.colorTransform = _loc6_;
                              this.SesiSet = false;
                              _root.MessText = "<font color=\'#FF0000\'>神龙像必须修建在神殿附近神力覆盖范围之内。</font>";
                           }
                           else
                           {
                              _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,125,0,0);
                              _loc11_ = new flash.geom.Transform(_loc3_);
                              _loc11_.colorTransform = _loc6_;
                              this.SesiSet = true;
                              _root.MessText = "<font color=\'#006F21\'>该地点可以修建该设施！</font>";
                           }
                        }
                        else
                        {
                           _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,125,0,0);
                           _loc11_ = new flash.geom.Transform(_loc3_);
                           _loc11_.colorTransform = _loc6_;
                           this.SesiSet = true;
                           _root.MessText = "<font color=\'#006F21\'>该地点可以修建该设施！</font>";
                        }
                     }
                     else if(this.DiTuTyle == _loc4_)
                     {
                        _loc6_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,125,0,0,0);
                        _loc11_ = new flash.geom.Transform(_loc3_);
                        _loc11_.colorTransform = _loc6_;
                        this.SesiSet = false;
                        if(_root.TemSeSiShow >= 100)
                        {
                           _root.MessText = "<font color=\'#FF0000\'>该设施必须修建在道路上！</font>";
                        }
                        else
                        {
                           _root.MessText = "<font color=\'#FF0000\'>该设施必须修建在草地上！</font>";
                        }
                     }
                     false;
                  }
                  else
                  {
                     this.useHandCursor = false;
                  }
                  if(this.SeSiSetPD == false)
                  {
                     this.useHandCursor = true;
                     _loc8_ = _root.M_DiTu8.M_GongDian._x - this._x;
                     _loc7_ = _root.M_DiTu8.M_GongDian._y - this._y;
                     _loc12_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
                     _loc9_ = Math.round((400 - _loc12_) / 40 * (_root.NowGuanSu / 2));
                     this.MoneyZ = 24 + (_root.NowGuanSu - 1) * 3 + _loc9_;
                     _loc16_ = false;
                     if(_root.Money < this.MoneyZ)
                     {
                        _loc16_ = true;
                     }
                     _root.M_TemQang.attachMovie("Mf_WaJe","M_WaJe",20,{_x:this._x,_y:this._y,Money:this.MoneyZ,NoMoney:_loc16_});
                     if(this._x <= 35)
                     {
                        _root.M_TemQang.M_WaJe.Nie_x = 13.1;
                     }
                     else if(this._x >= 368)
                     {
                        _root.M_TemQang.M_WaJe.Nie_x = -102.7;
                     }
                     else
                     {
                        _root.M_TemQang.M_WaJe.Nie_x = -45;
                     }
                     if(this._y >= 368)
                     {
                        _root.M_TemQang.M_WaJe.Nie_y = -55;
                     }
                     else if(this._y <= 35)
                     {
                        _root.M_TemQang.M_WaJe.Nie_y = 17.5;
                     }
                     else if(_root.M_TemQang.M_WaJe.Nie_x == 13.1 || _root.M_TemQang.M_WaJe.Nie_x == -102.7)
                     {
                        _root.M_TemQang.M_WaJe.Nie_y = -19;
                     }
                     else
                     {
                        _root.M_TemQang.M_WaJe.Nie_y = 17.5;
                     }
                  }
                  else
                  {
                     _root.M_TemQang.M_WaJe.removeMovieClip();
                  }
               }
            };
            _loc3_.onRollOut = function()
            {
               if(this.DiTuTyle != 2)
               {
                  if(_root.TemSeSiShow > 0)
                  {
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                  }
                  if(this.SeSiSetPD == false)
                  {
                     _root.M_TemQang.M_WaJe.removeMovieClip();
                  }
                  this.useHandCursor = false;
               }
               _root.MessText = _root.AuMessText;
               this.SesiSet = false;
            };
            _loc3_.onReleaseOutside = function()
            {
               if(this.DiTuTyle != 2)
               {
                  if(_root.TemSeSiShow > 0)
                  {
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                  }
                  if(this.SeSiSetPD == false)
                  {
                     _root.M_TemQang.M_WaJe.removeMovieClip();
                  }
                  this.useHandCursor = false;
               }
               _root.MessText = _root.AuMessText;
               this.SesiSet = false;
            };
            _loc3_.onRelease = function()
            {
               _root.M_ShowCang.M_DHKSuSing.MivObject.M_FanGiang.gotoAndStop("a0");
               _root.M_ShowCang.M_DHKSuSing.MivObject.M_Selled.removeMovieClip();
               var _loc11_;
               var _loc12_;
               var _loc4_;
               var _loc10_;
               var _loc3_;
               if(this.DiTuTyle != 2)
               {
                  if(this.SeSiSetPD == false && _root.Money >= this.MoneyZ)
                  {
                     _root.S_Sound6.stop();
                     _root.S_Sound6.attachSound("Sf_Sound121");
                     _root.S_Sound6.start(0,1);
                     _root.Money -= this.MoneyZ;
                     this.gotoAndStop("a2");
                     this.SeSiSetPD = true;
                     _root.M_TemQang.M_WaJe.removeMovieClip();
                     this.useHandCursor = false;
                  }
                  if(_root.TemSeSiShow > 0 && (_root.Money < _root["M_ShowSeSi" + _root.TemSeSiShow].Money * _root.BuyLu || _root.SenJiDian < _root["M_ShowSeSi" + _root.TemSeSiShow].SenJiDian))
                  {
                     _root.TemSeSiShow = 0;
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                  }
                  _loc11_ = 0;
                  _loc12_ = 1;
                  if(_root.TemSeSiShow >= 100)
                  {
                     _loc11_ = 1;
                     _loc12_ = 0;
                  }
                  if(this.DiTuTyle == _loc11_ && _root.TemSeSiShow > 0 && this.SeSi == "" && this.SesiSet && this.SeSiSetPD)
                  {
                     _loc4_ = _root.M_SeSiQang;
                     if(_root.TemSeSiShow >= 200 || _root.TemSeSiShow == 101)
                     {
                        _loc4_ = _root.M_SeSiQangB;
                     }
                     if(_root.SeSiDephNext > 0 && _loc4_.getInstanceAtDepth(_root.SeSiDephNext) == undefined)
                     {
                        _root.SeSiDeph = _root.SeSiDephNext;
                        _root.SeSiDephNext = 0;
                     }
                     else
                     {
                        _root.SeSiDeph++;
                     }
                     if(_root.TemSeSiShow == 1)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound108");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 2)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound109");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 3)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound107");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 4)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound110");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 5)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound111");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 6)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound126");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 101)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound120");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 201)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound121");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 202)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound122");
                        _root.S_Sound4.start(0,1);
                     }
                     else if(_root.TemSeSiShow == 102)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound125");
                        _root.S_Sound4.start(0,1);
                     }
                     _loc10_ = _loc4_.getNextHighestDepth();
                     _loc3_ = _loc4_.attachMovie("Mf_SeSi" + _root.TemSeSiShow,"M_SeSi" + _loc10_,_loc10_,{FanGiangV:false});
                     this.SeSi = _loc3_._name;
                     _loc3_._x = this._x;
                     _loc3_._y = this._y;
                     _loc3_.Star = true;
                     _loc3_.DiTuObject = this;
                     _loc3_.UpdatePD = false;
                     _loc3_.SeSiID = _root.TemSeSiShow;
                     _loc3_.HPcolor = 0;
                     _root.Money -= Math.round(_root["M_ShowSeSi" + _root.TemSeSiShow].Money * _root.BuyLu);
                     _root.SenJiDian -= _root["M_ShowSeSi" + _root.TemSeSiShow].SenJiDian;
                     if(_root.TemSeSiShow == 5)
                     {
                        _root.LieRingCount++;
                     }
                     if(_root.TemSeSiShow == 6)
                     {
                        _root.SenLongCount++;
                        if(_root.SenLongCount >= 2)
                        {
                           _root.TemSeSiShow = 0;
                           _root.M_TemQang.M_TemSeSi.removeMovieClip();
                        }
                     }
                     var MySeSiNow = _loc3_;
                     _loc3_.B_Button.onRelease = function()
                     {
                        if(MySeSiNow.SeSiID == 1)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound108");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 2)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound109");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 3)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound107");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 4)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound110");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 5)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound111");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 6)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound126");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 101)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound120");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 201)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound121");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 202)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound122");
                           _root.S_Sound4.start(0,1);
                        }
                        else if(MySeSiNow.SeSiID == 102)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound125");
                           _root.S_Sound4.start(0,1);
                        }
                        _root.TemSeSiShow = 0;
                        _root.M_ShowCang.M_DHKSuSing.MivObject.M_FanGiang.gotoAndStop("a0");
                        _root.M_ShowCang.M_DHKSuSing.MivObject.M_Selled.removeMovieClip();
                        _root.M_ShowCang.attachMovie("Mf_DHKSuSing","M_DHKSuSing",10,{_x:522,_y:175});
                        var _loc4_ = 1;
                        if(MySeSiNow.Tyle == 2 && MySeSiNow.SJTyle == 1)
                        {
                           _loc4_ = 2;
                        }
                        if(MySeSiNow.Tyle == 2 && (MySeSiNow.SJTyle == 2 || MySeSiNow.SJTyle == 3 || MySeSiNow.SJTyle == 4))
                        {
                           _loc4_ = 3;
                        }
                        _root.M_ShowCang.M_DHKSuSing.gotoAndStop("a" + _loc4_);
                        _root.M_ShowCang.M_DHKSuSing.Title = MySeSiNow.Title;
                        _root.M_ShowCang.M_DHKSuSing.TyleStr = MySeSiNow.TyleStr;
                        _root.M_ShowCang.M_DHKSuSing.Level = MySeSiNow.Level;
                        var _loc5_ = "<b>" + MySeSiNow.Attack + "</b>";
                        var _loc6_ = "<b>" + MySeSiNow.AttackB + "</b>";
                        if(MySeSiNow.TaTyle == 1 || MySeSiNow.TaTyle == 2)
                        {
                           _loc5_ = "<b>" + MySeSiNow.Attack + "</b>";
                           _loc5_ += " [" + MySeSiNow.rAttack + "×" + _root.All_Attack + "]";
                           _loc6_ = "<b>" + Math.round(MySeSiNow.AttackB * _root.All_Attack) + "</b>";
                           _loc6_ += " [" + MySeSiNow.AttackB + "×" + _root.All_Attack + "]";
                        }
                        _root.M_ShowCang.M_DHKSuSing.Attack = _loc5_;
                        _root.M_ShowCang.M_DHKSuSing.AttackB = _loc6_;
                        var _loc3_ = "<b>" + MySeSiNow.MaxHP + "</b>";
                        var _loc2_ = "<b>" + MySeSiNow.MaxHPB + "</b>";
                        _loc3_ = "<b>" + MySeSiNow.MaxHP + "</b>";
                        _loc3_ += " [" + MySeSiNow.rMaxHP + "×" + _root.All_MaxHP + "]";
                        _loc2_ = "<b>" + Math.round(MySeSiNow.MaxHPB * _root.All_MaxHP) + "</b>";
                        _loc2_ += " [" + MySeSiNow.MaxHPB + "×" + _root.All_MaxHP + "]";
                        _root.M_ShowCang.M_DHKSuSing.MaxHP = _loc3_;
                        _root.M_ShowCang.M_DHKSuSing.MaxHPB = _loc2_;
                        _root.M_ShowCang.M_DHKSuSing.HP = "<b>" + MySeSiNow.HP + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.HPB = "<b>" + MySeSiNow.HPB + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.FanWei = "<b>" + MySeSiNow.FanWei + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.FaSieJJ = "<b>" + MySeSiNow.FaSieJJ + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.JianSuDu = "<b>" + MySeSiNow.JianSuDu + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.LevelB = MySeSiNow.LevelB;
                        _root.M_ShowCang.M_DHKSuSing.FanWeiB = "<b>" + MySeSiNow.FanWeiB + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.FaSieJJB = "<b>" + MySeSiNow.FaSieJJB + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.JianSuDuB = "<b>" + MySeSiNow.JianSuDuB + "</b>";
                        _root.M_ShowCang.M_DHKSuSing.MivObject = MySeSiNow;
                        _root.M_ShowCang.M_DHKSuSing.M_SenJiBan.MivObject = MySeSiNow.M_Ta;
                        _root.M_ShowCang.M_DHKSuSing.M_SellBan.MivObject = MySeSiNow;
                        MySeSiNow.M_FanGiang.gotoAndStop("a1");
                        MySeSiNow.attachMovie("Mf_Selled","M_Selled",999);
                     };
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                     delete MySeSiNow;
                     false;
                     false;
                  }
                  else if(this.SeSi == "")
                  {
                     _root.TemSeSiShow = 0;
                     _root.M_ShowCang.M_DHKSuSing.MivObject.M_FanGiang.gotoAndStop("a0");
                     _root.M_ShowCang.M_DHKSuSing.MivObject.M_Selled.removeMovieClip();
                     _root.M_ShowCang.M_DHKSuSing.removeMovieClip();
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                  }
                  else
                  {
                     _root.M_TemQang.M_TemSeSi.removeMovieClip();
                     _root.TemSeSiShow = 0;
                     this.useHandCursor = false;
                  }
               }
            };
         }
         false;
         _loc4_ = _loc4_ + 1;
      }
      _loc5_ = _loc5_ + 1;
   }
   _root.F_MapSumit();
   _root.F_MapSuSiRan(_loc40_);
};
F_MapSuSiRan = function(ZuQiaoArr)
{
   var _loc3_ = 0;
   var _loc4_;
   var _loc8_;
   var _loc7_;
   var _loc10_;
   var _loc9_;
   var _loc11_;
   var _loc6_;
   var _loc5_;
   while(_loc3_ < ZuQiaoArr.length)
   {
      _loc4_ = Math.floor(Math.random() * ZuQiaoArr.length);
      _loc8_ = _root.M_DiTu1[ZuQiaoArr[_loc3_]]._x;
      _loc7_ = _root.M_DiTu1[ZuQiaoArr[_loc3_]]._y;
      _loc10_ = _root.M_DiTu1[ZuQiaoArr[_loc3_]].Myix;
      _loc9_ = _root.M_DiTu1[ZuQiaoArr[_loc3_]].Myiy;
      _loc11_ = _root.M_DiTu1[ZuQiaoArr[_loc3_]].SeSiSetPD;
      _loc6_ = _root.M_DiTu1[ZuQiaoArr[_loc3_]]._name;
      _loc5_ = _root.M_DiTu1[ZuQiaoArr[_loc4_]]._name;
      _root.M_DiTu1[ZuQiaoArr[_loc3_]]._x = _root.M_DiTu1[ZuQiaoArr[_loc4_]]._x;
      _root.M_DiTu1[ZuQiaoArr[_loc3_]]._y = _root.M_DiTu1[ZuQiaoArr[_loc4_]]._y;
      _root.M_DiTu1[ZuQiaoArr[_loc3_]].Myix = _root.M_DiTu1[ZuQiaoArr[_loc4_]].Myix;
      _root.M_DiTu1[ZuQiaoArr[_loc3_]].Myiy = _root.M_DiTu1[ZuQiaoArr[_loc4_]].Myiy;
      _root.M_DiTu1[ZuQiaoArr[_loc4_]]._x = _loc8_;
      _root.M_DiTu1[ZuQiaoArr[_loc4_]]._y = _loc7_;
      _root.M_DiTu1[ZuQiaoArr[_loc4_]].Myix = _loc10_;
      _root.M_DiTu1[ZuQiaoArr[_loc4_]].Myiy = _loc9_;
      _root.M_DiTu1[ZuQiaoArr[_loc3_]].swapDepths(_root.M_DiTu1[ZuQiaoArr[_loc4_]]);
      _root.M_DiTu1[ZuQiaoArr[_loc3_]]._name = "TempMovePP";
      _root.M_DiTu1[ZuQiaoArr[_loc4_]]._name = _loc6_;
      _root.M_DiTu1[ZuQiaoArr[_loc3_]]._name = _loc5_;
      _loc3_ = _loc3_ + 1;
   }
   _root.ZuQiaoArr = [];
   ZuQiaoArr = [];
};
F_MapSumit = function()
{
   _root.SumitMap = "";
   var _loc22_ = "";
   var _loc21_ = "";
   var _loc3_ = {x:0,y:0,Tong:0};
   _loc3_.x = _root.M_TemQang.M_RuKoRun.Myix;
   _loc3_.y = _root.M_TemQang.M_RuKoRun.Myiy;
   var _loc11_ = {x:0,y:0};
   _loc11_.x = _root.M_TemQang.M_RuKoRun._x;
   _loc11_.y = _root.M_TemQang.M_RuKoRun._y;
   var _loc4_ = String(_root.M_TemQang.M_RuKoRun.Myix + 1);
   var _loc5_ = String(_root.M_TemQang.M_RuKoRun.Myiy + 1);
   if(Number(_loc4_) > 9)
   {
      _loc4_ = String(Number(Number(_loc4_) - 9 + 64));
      _loc4_ = String.fromCharCode(Number(_loc4_));
   }
   if(Number(_loc5_) > 9)
   {
      _loc5_ = String(Number(Number(_loc5_) - 9 + 64));
      _loc5_ = String.fromCharCode(Number(_loc5_));
   }
   _loc22_ = _loc4_ + _loc5_;
   _loc4_ = String(_root.M_DiTu8.M_GongDian.Myix + 1);
   _loc5_ = String(_root.M_DiTu8.M_GongDian.Myiy + 1);
   if(Number(_loc4_) > 9)
   {
      _loc4_ = String(Number(Number(_loc4_) - 9 + 64));
      _loc4_ = String.fromCharCode(Number(_loc4_));
   }
   if(Number(_loc5_) > 9)
   {
      _loc5_ = String(Number(Number(_loc5_) - 9 + 64));
      _loc5_ = String.fromCharCode(Number(_loc5_));
   }
   _loc21_ = _loc4_ + _loc5_;
   var _loc6_ = _root.LoadArr.slice();
   var _loc12_ = [];
   var _loc20_ = 0;
   var _loc2_;
   var _loc14_;
   var _loc13_;
   var _loc9_;
   var _loc10_;
   var _loc7_;
   var _loc19_;
   var _loc18_;
   var _loc17_;
   var _loc16_;
   var _loc15_;
   var _loc8_;
   while(_loc20_ <= _loc6_.length)
   {
      _loc2_ = 0;
      while(_loc2_ <= _loc6_.length)
      {
         if(_root.M_DiTu2[_loc6_[_loc2_]].DiTuTyle == 1)
         {
            _loc14_ = _root.M_DiTu2[_loc6_[_loc2_]]._x;
            _loc13_ = _root.M_DiTu2[_loc6_[_loc2_]]._y;
            _loc9_ = _root.M_DiTu2[_loc6_[_loc2_]]._name;
            _loc10_ = 0;
            _loc7_ = 0;
            while(_loc7_ <= _loc12_.length)
            {
               if(_loc9_ == _root.M_DiTu2[_loc12_[_loc7_]]._name)
               {
                  _loc10_ = _loc10_ + 1;
               }
               _loc7_ = _loc7_ + 1;
            }
            if(_loc10_ <= 0)
            {
               _loc19_ = _loc14_ - _loc11_.x;
               _loc18_ = _loc13_ - _loc11_.y;
               _loc17_ = Math.sqrt(Math.pow(_loc19_,2) + Math.pow(_loc18_,2));
               if(_loc17_ < 40 && _loc17_ > 24)
               {
                  _loc16_ = _root.M_DiTu2[_loc6_[_loc2_]].Myix;
                  _loc15_ = _root.M_DiTu2[_loc6_[_loc2_]].Myiy;
                  _loc8_ = 0;
                  if(_loc16_ == _loc3_.x)
                  {
                     _loc8_ = 1;
                  }
                  if(_loc15_ == _loc3_.y)
                  {
                     _loc8_ = 2;
                  }
                  if(_loc8_ != _loc3_.Tong)
                  {
                     _loc4_ = String(_loc3_.x + 1);
                     _loc5_ = String(_loc3_.y + 1);
                     if(Number(_loc4_) > 9)
                     {
                        _loc4_ = String(Number(Number(_loc4_) - 9 + 64));
                        _loc4_ = String.fromCharCode(Number(_loc4_));
                     }
                     if(Number(_loc5_) > 9)
                     {
                        _loc5_ = String(Number(Number(_loc5_) - 9 + 64));
                        _loc5_ = String.fromCharCode(Number(_loc5_));
                     }
                     _root.SumitMap += _loc4_;
                     _root.SumitMap += _loc5_;
                  }
                  _loc3_.x = _loc16_;
                  _loc3_.y = _loc15_;
                  _loc3_.Tong = _loc8_;
                  _loc11_.x = _loc14_;
                  _loc11_.y = _loc13_;
                  _loc12_.push(_loc9_);
                  break;
               }
            }
         }
         _loc2_ = _loc2_ + 1;
      }
      _loc20_ = _loc20_ + 1;
   }
   _root.SumitMap += _loc21_;
};
var DiRenDeph = 0;
var DiRenMax = 7;
var CaoJiCount = 0;
var FaShiCount = 0;
F_CreaDiRen = function()
{
   var _loc44_ = _root.DiRenMax;
   _root.DiRenDeph++;
   if(_root.DiRenDeph > 50)
   {
      _root.DiRenDeph = 1;
   }
   var NowDiRenID = _root.NowGuanSu;
   if(_root.NowGuanSu > 15 && _root.NowGuanSu < 31)
   {
      NowDiRenID = _root.NowGuanSu - 15;
   }
   else if(_root.NowGuanSu > 30 && _root.NowGuanSu < 46)
   {
      NowDiRenID = _root.NowGuanSu - 30;
   }
   else if(_root.NowGuanSu > 45)
   {
      NowDiRenID = _root.NowGuanSu - 45;
   }
   if(_root.NowGuanSu > 5)
   {
      NowDiRenID += Math.floor(Math.random() * 3) - 1;
   }
   if(NowDiRenID > 15 && _root.NowGuanSu > 30 && _root.NowGuanSu < 40)
   {
      NowDiRenID = 15;
   }
   if(NowDiRenID > 15)
   {
      NowDiRenID -= 15;
   }
   if(NowDiRenID < 1)
   {
      NowDiRenID = 15;
   }
   if(_root.NowGuanSu == 16 && NowDiRenID > 13)
   {
      NowDiRenID = 1;
   }
   if(_root.NowGuanSu == 31 && NowDiRenID > 13)
   {
      NowDiRenID = 1;
   }
   if(_root.DiRenDeph >= _root.DiRenMax && Math.floor(Math.random() * 5) <= 1 && _root.CaoJiCount == 0)
   {
      NowDiRenID = 9999;
      _root.CaoJiCount++;
   }
   var _loc32_;
   if(_root.NowGuanSu > 30 && _root.DiRenDeph >= _root.DiRenMax - 4 && _root.FaShiCount == 0)
   {
      _loc32_ = Math.floor(Math.random() * 5);
      if(_loc32_ == 1 || _loc32_ == 2)
      {
         NowDiRenID = Number(100 + _loc32_);
         _root.FaShiCount++;
      }
   }
   var _loc6_ = _root.M_DiTu0.attachMovie("Mf_DiRen" + NowDiRenID,"M_DiRen" + _root.DiRenDeph,_root.DiRenDeph);
   var _loc28_ = _root.M_DiTu9.attachMovie("Mf_DiRen" + NowDiRenID,"M_DiRen" + _root.DiRenDeph,_root.DiRenDeph);
   var _loc18_ = new flash.geom.ColorTransform(0,0,0,1,0,0,0,0);
   var _loc20_ = new flash.geom.Transform(_loc28_);
   _loc20_.colorTransform = _loc18_;
   _loc6_.cacheAsBitmap = true;
   _loc28_.cacheAsBitmap = true;
   _loc6_.ID = _root.DiRenDeph;
   _loc6_._x = _root.DiRenStar_x;
   _loc6_._y = _root.DiRenStar_y;
   _loc28_._x = _loc6_._x + 1;
   _loc28_._y = _loc6_._y + 3;
   _loc28_._rotation = _loc6_._rotation;
   _loc6_.TemSudu = _loc6_.Sudu;
   _loc6_.GoStar = false;
   _loc6_.GoedArr = new Array();
   _loc6_.BackArr = [];
   _loc6_.BackPD = false;
   _loc6_.GoedArr = _root.LoadArr.slice();
   _loc6_.dx = 0;
   _loc6_.dy = 0;
   _loc6_.dr = 0;
   _loc6_._rotation = 180;
   _loc6_.NowTo_x = 0;
   _loc6_.NowTo_y = 0;
   _loc6_.ZhongDu = 0;
   _loc6_.ZhongDuNum = 0;
   _loc6_.ZhongDuPD = false;
   _loc6_.NextGoNum = 0;
   _loc6_.Die = true;
   _loc6_.StarPD = false;
   _loc6_.UpdateNPD = false;
   _loc6_.HudunNum = 0;
   _loc6_.HideNum = 0;
   _loc6_.TuDunNum = false;
   _loc6_.TuDunNumN = 0;
   _loc6_.SenDianDa = false;
   _loc6_.NowDiRenID = NowDiRenID;
   _loc6_.FaFull = 0;
   if(_root.DiRenDeph >= _loc44_)
   {
      _root.M_DiTu0.M_DiRen1.StarPD = true;
   }
   var NowDiRen = _loc6_;
   _loc6_.B_DiButton.onRelease = function()
   {
      if(NowDiRen.TyleStr == "陆军")
      {
         _root.S_Sound6.stop();
         _root.S_Sound6.attachSound("Sf_Sound114");
         _root.S_Sound6.start(0,1);
      }
      else
      {
         _root.S_Sound6.stop();
         _root.S_Sound6.attachSound("Sf_Sound115");
         _root.S_Sound6.start(0,1);
      }
      _root.TemSeSiShow = 0;
      _root.M_ShowCang.M_DHKSuSing.MivObject.M_FanGiang.gotoAndStop("a0");
      _root.M_ShowCang.M_DHKSuSing.MivObject.M_Selled.removeMovieClip();
      _root.M_ShowCang.attachMovie("Mf_DHKSuSing","M_DHKSuSing",10,{_x:522,_y:175});
      _root.M_ShowCang.M_DHKSuSing.M_SenJiBan._visible = false;
      _root.M_ShowCang.M_DHKSuSing.M_SellBan._visible = false;
      _root.M_ShowCang.M_DHKSuSing.gotoAndStop("a4");
      _root.M_ShowCang.M_DHKSuSing.Title = NowDiRen.Title;
      _root.M_ShowCang.M_DHKSuSing.TyleStr = NowDiRen.TyleStr;
      _root.M_ShowCang.M_DHKSuSing.Level = NowDiRen.Level;
      _root.M_ShowCang.M_DHKSuSing.Attack = "<b>" + NowDiRen.Attack + "</b>";
      _root.M_ShowCang.M_DHKSuSing.HP = "<b>" + NowDiRen.HP + "</b>";
      _root.M_ShowCang.M_DHKSuSing.MaxHP = "<b>" + NowDiRen.MaxHP + "</b>";
      _root.M_ShowCang.M_DHKSuSing.Sudu = "<b>" + NowDiRen.Sudu + "</b>";
      _root.M_ShowCang.M_DHKSuSing.Money = "<b>" + NowDiRen.Money + "</b>";
      _root.M_ShowCang.M_DHKSuSing.SenJiDian = "<b>" + NowDiRen.SenJiDian + "</b>";
      _root.M_ShowCang.M_DHKSuSing.TeCang = NowDiRen.TeCang;
      if(NowDiRen.ZhongDu > 0)
      {
         _root.M_ShowCang.M_DHKSuSing.ZhongDu = "中毒：<b>" + NowDiRen.ZhongDu + "</b>";
      }
      else
      {
         _root.M_ShowCang.M_DHKSuSing.ZhongDu = "-";
      }
      _root.M_ShowCang.M_DHKSuSing.MivObject = NowDiRen;
      NowDiRen.attachMovie("Mf_Selledd","M_Selled",999);
   };
   delete NowDiRen;
   _loc6_.onEnterFrame = function()
   {
      if(this.Tyle != 9999 && this.Tyle != 101 && this.Tyle != 102)
      {
         if(this.UpdateNPD == false)
         {
            if(_root.NowGuanSu > 15 && _root.NowGuanSu <= 30)
            {
               this.Title = "银" + this.Title;
               this.M_Jia.gotoAndStop("a1");
               _root.M_DiTu9[this._name].M_Jia.gotoAndStop("a1");
            }
            else if(_root.NowGuanSu > 30)
            {
               this.Title = "金" + this.Title;
               this.M_Jia.gotoAndStop("a2");
               _root.M_DiTu9[this._name].M_Jia.gotoAndStop("a2");
            }
            if(this.NowDiRenID < 5 && _root.NowGuanSu > 10 && _root.NowGuanSu < 16)
            {
               this.Title = "银" + this.Title;
               this.M_Jia.gotoAndStop("a1");
               _root.M_DiTu9[this._name].M_Jia.gotoAndStop("a1");
            }
            this.RL_Sudu = this.Sudu;
            this.RL_Attack = this.Attack;
            if(this.TyleStr == "空军")
            {
               this.swapDepths(this.getDepth() + 200);
            }
            if(_root.NowGuanSu <= 15)
            {
               this.Title = this.Title;
            }
            else if(_root.NowGuanSu > 15 && _root.NowGuanSu <= 24)
            {
               this.MaxHP = 500 + Math.round(this.MaxHP * _root.NowGuanSu / 3);
               this.Attack = _root.NowGuanSu;
               this.Money = Math.round(_root.NowGuanSu / 3);
               this.SenJiDian = Math.round(_root.NowGuanSu / 3) - 1;
               this.Level = _root.NowGuanSu;
            }
            else if(_root.NowGuanSu > 24 && _root.NowGuanSu <= 30)
            {
               this.MaxHP = 600 + Math.round(this.MaxHP * _root.NowGuanSu / 2);
            }
            else if(_root.NowGuanSu > 30 && _root.NowGuanSu < 46)
            {
               this.MaxHP = 5000 + Math.round(this.MaxHP * _root.NowGuanSu / 2);
            }
            else if(_root.NowGuanSu > 45)
            {
               this.MaxHP = 16000 + Math.round(this.MaxHP * _root.NowGuanSu / 2);
            }
            if(_root.NowGuanSu > 24)
            {
               this.Attack = _root.NowGuanSu;
               this.Money = Math.round(_root.NowGuanSu / 3);
               this.SenJiDian = Math.round(_root.NowGuanSu / 3) - 1;
               this.Level = _root.NowGuanSu;
               if(Math.floor(Math.random() * 50) <= 1 && this.HudunNum == 0 && this.HideNum == 0)
               {
                  this.attachMovie("Mf_Hudun","M_Hudun",1);
                  this.HudunNum = 650;
               }
               if(Math.floor(Math.random() * 50) <= 1 && this.HudunNum == 0 && this.HideNum == 0)
               {
                  this.HideNum = 350;
                  this._alpha = 100 - this.HideNum / 8;
                  this.Die = true;
               }
            }
            this.HP = this.MaxHP;
            this.UpdateNPD = true;
         }
      }
      else if(this.UpdateNPD == false)
      {
         if(this.Tyle == 9999)
         {
            this.Sudu = 1.8 + (_root.NowGuanSu - 1) * 0.1;
            if(this.Sudu > 3.6)
            {
               this.Sudu = 3.6;
            }
            this.MAXAngle = this.Sudu * 10;
            this.MaxHP = 60 * _root.NowGuanSu;
            if(_root.NowGuanSu > 15 && _root.NowGuanSu < 31)
            {
               this.MaxHP += 500;
            }
            else if(_root.NowGuanSu > 30)
            {
               this.MaxHP += 2000;
            }
            this.HP = this.MaxHP;
            this.Attack = 10 * _root.NowGuanSu;
            this.Money = Math.round(20 * (_root.NowGuanSu * 0.5));
            this.SenJiDian = Math.round(10 * (_root.NowGuanSu * 0.5));
         }
         else if(this.Tyle == 101 || this.Tyle == 102)
         {
            this.Sudu = 1.8 + (_root.NowGuanSu - 1) * 0.1;
            if(this.Sudu > 2.8)
            {
               this.Sudu = 2.8;
            }
            this.MAXAngle = this.Sudu * 10;
            this.MaxHP = 5000 + Math.round(this.MaxHP * _root.NowGuanSu / 2);
            this.HP = this.MaxHP;
            if(this.Tyle == 102)
            {
               this.Attack = Math.round(_root.NowGuanSu / 1.5);
            }
            else
            {
               this.Attack = Math.round(_root.NowGuanSu * 3);
            }
            this.Money = Math.round(_root.NowGuanSu / 2);
            this.SenJiDian = Math.round(_root.NowGuanSu / 2);
         }
         this.UpdateNPD = true;
      }
      if(_root.FaShiCount > 0)
      {
         this.Sudu = 1.8 + (_root.NowGuanSu - 1) * 0.1;
         if(this.Sudu > 2.8)
         {
            this.Sudu = 2.8;
         }
      }
      var _loc35_;
      var _loc38_;
      var _loc43_;
      var _loc34_;
      var _loc22_;
      var _loc9_;
      var _loc6_;
      var _loc8_;
      var _loc7_;
      var _loc23_;
      var _loc32_;
      var _loc0_;
      var _loc45_;
      var _loc42_;
      var _loc30_;
      var _loc24_;
      var _loc29_;
      var _loc28_;
      var _loc39_;
      var _loc40_;
      var _loc41_;
      var _loc31_;
      var _loc11_;
      var _loc36_;
      var _loc44_;
      var _loc37_;
      var _loc33_;
      var _loc25_;
      var _loc27_;
      var _loc26_;
      var _loc5_;
      var _loc3_;
      var _loc13_;
      if(_root.GamePause == false)
      {
         _root.M_DiTu9[this._name]._x = this._x + 1;
         if(this.TyleStr == "陆军")
         {
            _root.M_DiTu9[this._name]._y = this._y + 2;
         }
         else
         {
            _root.M_DiTu9[this._name]._y = this._y + 7;
         }
         _root.M_DiTu9[this._name]._rotation = this._rotation;
         _root.M_DiTu9[this._name]._alpha = this._alpha;
         if(_root.M_DiTu9[this._name]._alpha < 0)
         {
            _root.M_DiTu9[this._name]._alpha = 0;
         }
         this.FaFull++;
         if(this.FaFull > 50)
         {
            this.FaFull = 50;
         }
         if(this.HudunNum > 0)
         {
            this.HudunNum--;
            this.M_Hudun._alpha = this.HudunNum / 10;
         }
         else
         {
            this.HudunNum = 0;
            this.M_Hudun.removeMovieClip();
         }
         if(this.HideNum > 0)
         {
            this.HideNum--;
         }
         else
         {
            this.HideNum = 0;
            if(this.TuDunNum == false)
            {
               this._alpha = 100;
            }
         }
         if(this.TeSing == 6 && this.HP < this.MaxHP)
         {
            _loc35_ = this.RL_Sudu * 1.2;
            _loc38_ = Math.floor(_loc35_);
            _loc43_ = Math.round((_loc35_ - _loc38_) * 10);
            this.Sudu = _loc38_ + _loc43_ / 10;
         }
         if(this.TeSing == 8 && this.HP < this.MaxHP)
         {
            this.Attack = Math.round(this.RL_Attack * 1.2);
         }
         if(this.HP <= 0)
         {
            if(this.TyleStr == "陆军")
            {
               _root.S_Sound6.stop();
               _root.S_Sound6.attachSound("Sf_Sound114");
               _root.S_Sound6.start(0,1);
            }
            else
            {
               _root.S_Sound6.stop();
               _root.S_Sound6.attachSound("Sf_Sound115");
               _root.S_Sound6.start(0,1);
            }
            if(_root.M_ShowCang.M_DHKSuSing.MivObject._name == this._name)
            {
               _root.M_ShowCang.M_DHKSuSing.removeMovieClip();
            }
            this.HP = 0;
            this.Die = true;
            _root.Money += this.Money;
            _loc34_ = this.Money;
            _root.SenJiDian += this.SenJiDian;
            if(Math.floor(Math.random() * 50) <= 1)
            {
               _root.Money += this.Money;
               _root.SenJiDian += this.SenJiDian;
               _loc34_ += this.Money;
            }
            if(this.SenDianDa)
            {
               _root.Money += this.Money;
               _root.SenJiDian += this.SenJiDian;
               _loc34_ += this.Money;
            }
            _root.RuanQenDeph++;
            if(_root.RuanQenDeph > 500)
            {
               _root.RuanQenDeph = 100;
            }
            _loc22_ = this._x;
            _loc9_ = this._y - 5;
            _loc6_ = _root.M_TemQang.attachMovie("Mf_DeMoney","M_DeMoney" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc22_,_y:_loc9_});
            _loc6_.Star_Y = _loc9_;
            _loc6_.Money = _loc34_;
            _loc6_.onEnterFrame = function()
            {
               if(Math.abs(this._y - this.Star_Y) < 20)
               {
                  this._y -= 1.2;
               }
               else
               {
                  this.removeMovieClip();
               }
            };
            false;
            if(_root.SenJiDian < 0)
            {
               _root.SenJiDian++;
            }
            _root.AllDeFen += Math.ceil(_root.NowGuanSu / 3);
            _root.DiRenMaxZL--;
            _root.M_DiTu9[this._name].removeMovieClip();
            this.removeMovieClip();
         }
         if(this.hitTest(_root.M_TemQang.M_RuKoRun))
         {
            this.Die = true;
         }
         else if(this.Die && this.HideNum <= 0 && this.TuDunNum == false)
         {
            this.Die = false;
         }
         if(this.StarPD)
         {
            _loc8_ = _root.M_DiTu8.M_GongDian._x - this._x;
            _loc7_ = _root.M_DiTu8.M_GongDian._y - this._y;
            _loc23_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
            if(_loc23_ < 100)
            {
               this.SenDianDa = true;
            }
            if(_loc23_ < 42)
            {
               _root.S_Sound4.stop();
               _root.S_Sound4.attachSound("Sf_Sound124");
               _root.S_Sound4.start(0,1);
               _root.M_DiTu8.M_GongDian.HP -= this.Attack;
               _root.SenJiDian--;
               _root.GuanEWDeFen -= this.Attack;
               _root.SDHPstr = _root.M_DiTu8.M_GongDian.HP + "/" + _root.M_DiTu8.M_GongDian.MaxHP;
               if(_root.M_DiTu8.M_GongDian.HP <= 0)
               {
                  _root.S_Sound4.stop();
                  _root.S_Sound4.attachSound("Sf_Sound123");
                  _root.S_Sound4.start(0,1);
                  _root.M_DiTu8.M_GongDian.HP = 0;
                  _root.M_DiTu8.M_GongDian.Die = true;
                  _root.M_DiTu8.M_GongDian.gotoAndStop("Die");
               }
               _root.DiRenMaxZL--;
               _root.M_DiTu9[this._name].removeMovieClip();
               this.removeMovieClip();
            }
            if(this.TuDunNum == false && this.TeSing == 9 && _loc23_ > 180 && Math.floor(Math.random() * 200) == 1 && this.HudunNum <= 0 && this.HideNum <= 0)
            {
               _root.S_Sound6.stop();
               _root.S_Sound6.attachSound("Sf_Sound121");
               _root.S_Sound6.start(0,1);
               this.TuDunNum = true;
               this.TuDunNumN = 0;
               this.Die = true;
               this._alpha = 0;
               _root.RuanQenDeph++;
               if(_root.RuanQenDeph > 300)
               {
                  _root.RuanQenDeph = 100;
               }
               _loc22_ = this._x;
               _loc9_ = this._y;
               _loc32_ = _root.M_TemQangU.attachMovie("Mf_TuDun","M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc22_,_y:_loc9_});
               _loc32_.ToDualpha = 100;
               _loc32_.onEnterFrame = function()
               {
                  this.ToDualpha--;
                  this._alpha = this.ToDualpha;
                  if(this.ToDualpha <= 0)
                  {
                     this.removeMovieClip();
                  }
               };
               false;
            }
            if(this.TuDunNum)
            {
               this.TuDunNumN++;
               if(_loc23_ < 150 || this.TuDunNumN > 350)
               {
                  _root.S_Sound6.stop();
                  _root.S_Sound6.attachSound("Sf_Sound121");
                  _root.S_Sound6.start(0,1);
                  this.Die = false;
                  this._alpha = 100;
                  this.TuDunNum = false;
                  _root.RuanQenDeph++;
                  if(_root.RuanQenDeph > 300)
                  {
                     _root.RuanQenDeph = 100;
                  }
                  _loc22_ = this._x;
                  _loc9_ = this._y;
                  _loc32_ = _root.M_TemQangU.attachMovie("Mf_TuDun","M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc22_,_y:_loc9_});
                  _loc32_.ToDualpha = 100;
                  _loc32_.onEnterFrame = function()
                  {
                     this.ToDualpha--;
                     this._alpha = this.ToDualpha;
                     if(this.ToDualpha <= 0)
                     {
                        this.removeMovieClip();
                     }
                  };
                  false;
               }
            }
            if(this.PerStar > 100 && this.TuDunNum == false)
            {
               _loc45_ = this.PerStar -= 10;
               this.c = new Color(this);
               this.ctrans = new Object();
               this.ctrans.ra = _loc45_;
               this.ctrans.ga = _loc45_;
               this.ctrans.ba = _loc45_;
               this.c.setTransform(this.ctrans);
            }
            this.NextGoNum++;
            _loc42_ = Math.floor(Math.random() * 20) + 10;
            if(this.NextGoNum > _loc42_ && _root.M_DiTu0["M_DiRen" + Number(this.ID + 1)].StarPD == false)
            {
               _root.M_DiTu0["M_DiRen" + Number(this.ID + 1)].StarPD = true;
            }
            if(_root.M_ShowCang.M_DHKSuSing.MivObject._name == this._name)
            {
               _root.M_ShowCang.M_DHKSuSing.HP = "<b>" + this.HP + "</b>";
               if(this.ZhongDu > 0)
               {
                  _root.M_ShowCang.M_DHKSuSing.ZhongDu = "<font color=\'#581F72\'>中毒：<b>" + this.ZhongDu + "</b></font>";
               }
               else
               {
                  _root.M_ShowCang.M_DHKSuSing.ZhongDu = "";
               }
               if(this.HudunNum > 0)
               {
                  _root.M_ShowCang.M_DHKSuSing.ZhongDu += "<font color=\'#0055D5\'>魔盾：<b>" + this.HudunNum + "</b></font>";
               }
               if(this.HideNum > 0)
               {
                  _root.M_ShowCang.M_DHKSuSing.ZhongDu += "<font color=\'#0055D5\'>隐身：<b>" + this.HideNum + "</b></font>";
               }
               if(_root.LieRingCount > 0)
               {
                  _root.M_ShowCang.M_DHKSuSing.B_JuiJi.enabled = true;
                  _root.M_ShowCang.M_DHKSuSing.B_JuiJi._alpha = 100;
               }
               else
               {
                  _root.M_ShowCang.M_DHKSuSing.B_JuiJi.enabled = false;
                  _root.M_ShowCang.M_DHKSuSing.B_JuiJi._alpha = 45;
               }
            }
            if(this.HP < this.MaxHP && this.Tyle == 9999 && this.BackPD == false)
            {
               this.GoedArr = this.BackArr;
               this.Sudu *= 1.5;
               this.BackPD = true;
            }
            if(this.GoStar == false)
            {
               _loc30_ = 0;
               while(_loc30_ < this.GoedArr.length)
               {
                  this.NowTo_x = _root.M_DiTu2[this.GoedArr[_loc30_]]._x;
                  this.NowTo_y = _root.M_DiTu2[this.GoedArr[_loc30_]]._y;
                  this.NowToDiTu = _root.M_DiTu2[this.GoedArr[_loc30_]]._name;
                  _loc24_ = Math.floor(Math.random() * 6 - 3);
                  this.NowTo_x += _loc24_;
                  _loc24_ = Math.floor(Math.random() * 6 - 3);
                  this.NowTo_y += _loc24_;
                  if(this.TyleStr == "空军")
                  {
                     this.NowTo_y -= 5;
                  }
                  this.dx = this.NowTo_x - this._x;
                  this.dy = this.NowTo_y - this._y;
                  this.dr = Math.sqrt(Math.pow(this.dx,2) + Math.pow(this.dy,2));
                  if(this.dr <= 40 && this.dr >= 24)
                  {
                     if(this.TuDunNum == false && _root.M_DiTu2[this.GoedArr[_loc30_]].SeSi != "" && _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].SJTyle == 1 && this.TyleStr == "陆军")
                     {
                        if(_root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].Die == false)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound120");
                           _root.S_Sound4.start(0,1);
                           _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].HP -= 1;
                           _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].Money--;
                           if(_root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].Money < 0)
                           {
                              _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].Money = 0;
                           }
                           if(_root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].HP <= 0)
                           {
                              _root.S_Sound4.stop();
                              _root.S_Sound4.attachSound("Sf_Sound123");
                              _root.S_Sound4.start(0,1);
                              _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].HP = 0;
                              _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].Die = true;
                              _root.M_SeSiQangB[_root.M_DiTu2[this.GoedArr[_loc30_]].SeSi].removeMovieClip();
                              _root.M_DiTu2[this.GoedArr[_loc30_]].SeSi = "";
                           }
                           this.GoStar = false;
                        }
                        break;
                     }
                     this.TemSudu = this.Sudu + (Math.random() - 0.5) / 2;
                     if(this.Tyle == 9999 && this.BackPD == false)
                     {
                        this.BackArr.push(this.GoedArr[_loc30_]);
                     }
                     this.GoedArr.splice(_loc30_,1);
                     this.GoStar = true;
                     break;
                  }
                  this.GoStar = false;
                  _loc30_ = _loc30_ + 1;
               }
               if(this.BackPD && this.GoStar == false)
               {
                  this.NowTo_x = _root.M_DiTu2.M_RuKo._x;
                  this.NowTo_y = _root.M_DiTu2.M_RuKo._y;
                  this.dx = this.NowTo_x - this._x;
                  this.dy = this.NowTo_y - this._y;
                  this.dr = Math.sqrt(Math.pow(this.dx,2) + Math.pow(this.dy,2));
                  if(this.dr <= 40 && this.dr >= 24)
                  {
                     this.NowToDiTu = _root.M_DiTu2.M_RuKo._name;
                     this.GoedArr = [];
                     this.BackArr = [];
                     this.GoStar = true;
                  }
               }
            }
            if(this.GoStar)
            {
               _loc29_ = this.TemSudu * Math.cos(Math.atan2(this.dy,this.dx));
               _loc28_ = this.TemSudu * Math.sin(Math.atan2(this.dy,this.dx));
               _loc39_ = this.NowTo_x - this._x;
               _loc40_ = this.NowTo_y - this._y;
               _loc41_ = Math.sqrt(Math.pow(_loc39_,2) + Math.pow(_loc40_,2));
               if(Math.abs(_loc39_) > _loc29_ * 1.5)
               {
                  this._x += _loc29_;
               }
               else
               {
                  this._x = this.NowTo_x;
               }
               if(Math.abs(_loc40_) > _loc28_ * 1.5)
               {
                  this._y += _loc28_;
               }
               else
               {
                  this._y = this.NowTo_y;
               }
               _loc31_ = this._rotation;
               _loc11_ = _root.getAngle(this.dx,this.dy);
               _loc36_ = _root.refineAngle(_loc31_ - _loc11_);
               this.MAXAngle = Math.abs(_loc31_ - _loc11_) / 6;
               _loc44_ = _root.refineAngle(_loc36_) < 180 ? -1 : 1;
               this._rotation = Math.abs(_loc36_) <= this.MAXAngle ? _loc11_ : _loc31_ + this.MAXAngle * _loc44_;
               if(_loc41_ <= this.TemSudu * 1.5)
               {
                  this._x = this.NowTo_x;
                  this._y = this.NowTo_y;
                  this.NowDDDiTu = _root.M_DiTu2[this.NowToDiTu];
                  if(this.TuDunNum == false && _root.M_DiTu2[this.NowToDiTu].SeSi != "" && this.TyleStr == "陆军" && this.Die == false)
                  {
                     if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].SJTyle == 2)
                     {
                        if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Die == false)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound121");
                           _root.S_Sound4.start(0,1);
                           _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].HP -= 1;
                           _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Money--;
                           if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Money < 0)
                           {
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Money = 0;
                           }
                           if(this.HudunNum > 0)
                           {
                              this.HudunNum -= _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Attack;
                              if(this.HudunNum < 0)
                              {
                                 this.HP += this.HudunNum;
                              }
                              if(this.HudunNum <= 0)
                              {
                                 this.M_Hudun.removeMovieClip();
                              }
                              this.M_Hudun._alpha = this.HudunNum / 10;
                           }
                           else
                           {
                              _loc37_ = 1;
                              if(this.TeSing == 4 && this.DQHRtyle == 1)
                              {
                                 _loc37_ = 0.5;
                              }
                              if(this.TeSing == 2 && this.DQHRtyle == 2)
                              {
                                 _loc37_ = 0.5;
                              }
                              this.HP -= Math.round(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Attack * _loc37_);
                           }
                           if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].HP <= 0)
                           {
                              _root.S_Sound4.stop();
                              _root.S_Sound4.attachSound("Sf_Sound123");
                              _root.S_Sound4.start(0,1);
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].HP = 0;
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Die = true;
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].removeMovieClip();
                              _root.M_DiTu2[this.NowToDiTu].SeSi = "";
                           }
                           _loc45_ = this.PerStar = 250;
                           this.c = new Color(this);
                           this.ctrans = new Object();
                           this.ctrans.ra = _loc45_;
                           this.ctrans.ga = _loc45_;
                           this.ctrans.ba = _loc45_;
                           this.c.setTransform(this.ctrans);
                        }
                     }
                     if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].SJTyle == 3)
                     {
                        if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Die == false)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound122");
                           _root.S_Sound4.start(0,1);
                           _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].HP -= 1;
                           _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Money--;
                           if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Money < 0)
                           {
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Money = 0;
                           }
                           _loc37_ = 1;
                           if(this.TeSing == 1)
                           {
                              _loc37_ = 0.5;
                           }
                           this.ZhongDu = Math.round(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Attack * _loc37_);
                           this.ZhongDuNum = this.ZhongDu / 7;
                           if(_root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].HP <= 0)
                           {
                              _root.S_Sound4.stop();
                              _root.S_Sound4.attachSound("Sf_Sound123");
                              _root.S_Sound4.start(0,1);
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].HP = 0;
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].Die = true;
                              _root.M_SeSiQangB[_root.M_DiTu2[this.NowToDiTu].SeSi].removeMovieClip();
                              _root.M_DiTu2[this.NowToDiTu].SeSi = "";
                           }
                           _loc45_ = this.PerStar = 100;
                           this.c = new Color(this);
                           this.ctrans = new Object();
                           this.ctrans.ra = 100;
                           this.ctrans.ga = 255;
                           this.ctrans.ba = 100;
                           this.c.setTransform(this.ctrans);
                           this.ZhongDuPD = true;
                        }
                     }
                  }
                  _loc33_ = true;
                  if(_root.M_DiTu2[this.NowToDiTu].SeSi != "" && _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].SJTyle == 4 && this.TyleStr == "空军")
                  {
                     if(_root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Die == false)
                     {
                        _root.S_Sound4.stop();
                        _root.S_Sound4.attachSound("Sf_Sound125");
                        _root.S_Sound4.start(0,1);
                        _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].HP -= 1;
                        this.HP -= _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Level;
                        _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Money--;
                        if(_root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Money < 0)
                        {
                           _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Money = 0;
                        }
                        if(_root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].HP <= 0)
                        {
                           _root.S_Sound4.stop();
                           _root.S_Sound4.attachSound("Sf_Sound123");
                           _root.S_Sound4.start(0,1);
                           _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].HP = 0;
                           _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Die = true;
                           _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].removeMovieClip();
                           _root.M_DiTu2[this.NowToDiTu].SeSi = "";
                        }
                        this._x -= _loc29_;
                        this._y -= _loc28_;
                        _loc33_ = false;
                        _loc45_ = this.PerStar = 250;
                        this.c = new Color(this);
                        this.ctrans = new Object();
                        this.ctrans.ra = _loc45_;
                        this.ctrans.ga = _loc45_;
                        this.ctrans.ba = _loc45_;
                        this.c.setTransform(this.ctrans);
                     }
                  }
                  if(_root.M_DiTu2[this.NowToDiTu].SeSi != "" && _root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].SJTyle == 5)
                  {
                     if(_root.M_SeSiQang[_root.M_DiTu2[this.NowToDiTu].SeSi].Die == false)
                     {
                        _loc37_ = 1;
                        if(this.TeSing == 10)
                        {
                           _loc37_ = 0.5;
                        }
                        this.HP -= 9 * _loc37_;
                        this._x -= _loc29_;
                        this._y -= _loc28_;
                        _loc33_ = false;
                        _loc45_ = this.PerStar = 100;
                        this.c = new Color(this);
                        this.ctrans = new Object();
                        this.ctrans.ra = 100;
                        this.ctrans.ga = 100;
                        this.ctrans.ba = 255;
                        this.c.setTransform(this.ctrans);
                     }
                  }
                  if(this.Tyle == 101 && this.FaFull >= 30)
                  {
                     _loc25_ = 120;
                     _loc27_ = this._x;
                     _loc26_ = this._y;
                     var DiRenName = "";
                     _loc30_ = 1;
                     while(_loc30_ <= _root.DiRenMax)
                     {
                        _loc5_ = _root.M_DiTu0["M_DiRen" + _loc30_];
                        if(_loc5_.Die == false && _loc5_.HP < _loc5_.MaxHP && _loc5_._name != this._name)
                        {
                           _loc8_ = _loc5_._x - _loc27_;
                           _loc7_ = _loc5_._y - _loc26_;
                           _loc23_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
                           if(_loc23_ <= _loc25_)
                           {
                              DiRenName = _loc5_._name;
                              _loc11_ = _root.getAngle(_loc8_,_loc7_);
                              _root.JianDeph++;
                              if(_root.JianDeph > 100)
                              {
                                 _root.JianDeph = 1;
                              }
                              _loc3_ = _root.M_DanQang.attachMovie("Mf_DiDan1","M_Jian" + _root.JianDeph,_root.JianDeph);
                              _loc3_._x = this._x + 7;
                              _loc3_._y = this._y + 7;
                              _loc3_._rotation = _loc11_;
                              _loc13_ = (_loc11_ - 90) / 57.29577951308232;
                              _loc3_.speedX = Math.cos(_loc13_) * 10;
                              _loc3_.speedY = Math.sin(_loc13_) * 10;
                              _loc3_.DiRenName = DiRenName;
                              _loc3_.MAXAngle = this.MAXAngle;
                              _loc3_.Attack = this.Attack;
                              _loc3_.onEnterFrame = function()
                              {
                                 var _loc3_ = _root.M_DiTu0[this.DiRenName];
                                 if(_loc3_.Die || this._x < -10 || this._y < -10 || this._x > 480 || this._y > 480)
                                 {
                                    this.removeMovieClip();
                                 }
                                 var _loc9_ = _loc3_._x + 7 - this._x;
                                 var _loc10_ = _loc3_._y + 7 - this._y;
                                 var _loc14_ = Math.sqrt(Math.pow(_loc9_,2) + Math.pow(_loc10_,2));
                                 var _loc11_ = _root.getAngle(_loc9_,_loc10_);
                                 var _loc6_ = this._rotation;
                                 var _loc8_ = _root.refineAngle(_loc6_ - _loc11_);
                                 var _loc12_ = _root.refineAngle(_loc8_) < 180 ? -1 : 1;
                                 this._rotation = Math.abs(_loc8_) <= this.MAXAngle ? _loc11_ : _loc6_ + this.MAXAngle * _loc12_;
                                 var _loc7_ = (this._rotation - 90) / 57.29577951308232;
                                 this.speedX = Math.cos(_loc7_) * 10;
                                 this.speedY = Math.sin(_loc7_) * 10;
                                 this._x += this.speedX;
                                 this._y += this.speedY;
                                 var _loc13_;
                                 var _loc5_;
                                 var _loc4_;
                                 if(_loc3_.hitTest(this._x,this._y,true))
                                 {
                                    _loc3_.HP += this.Attack;
                                    if(_loc3_.HP > _loc3_.MaxHP)
                                    {
                                       _loc3_.HP = _loc3_.MaxHP;
                                    }
                                    _root.RuanQenDeph++;
                                    if(_root.RuanQenDeph > 500)
                                    {
                                       _root.RuanQenDeph = 100;
                                    }
                                    _loc13_ = this._x;
                                    _loc5_ = this._y - 5;
                                    _loc4_ = _root.M_TemQang.attachMovie("Mf_AddHP","M_DeMoney" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc13_,_y:_loc5_});
                                    _loc4_.Star_Y = _loc5_;
                                    _loc4_.MyDiRenName = _loc3_._name;
                                    _loc4_.LzZs = 0;
                                    _loc4_.onEnterFrame = function()
                                    {
                                       this.LzZs++;
                                       if(this.LzZs < 20 && _root.M_DiTu0[this.MyDiRenName].Die == false)
                                       {
                                          this._x = _root.M_DiTu0[this.MyDiRenName]._x;
                                          this._y = _root.M_DiTu0[this.MyDiRenName]._y;
                                          this._rotation = _root.M_DiTu0[this.MyDiRenName]._rotation;
                                       }
                                       else
                                       {
                                          this.removeMovieClip();
                                       }
                                    };
                                    false;
                                    this.removeMovieClip();
                                 }
                                 false;
                              };
                              false;
                              this.FaFull -= 30;
                              break;
                           }
                        }
                        false;
                        _loc30_ = _loc30_ + 1;
                     }
                  }
                  if(this.Tyle == 102 && this.FaFull >= 30)
                  {
                     _loc25_ = 120;
                     DiRenName = "";
                     for(_loc30_ in _root.M_SeSiQang)
                     {
                        if(_root.M_SeSiQang[_loc30_].Tyle == 1)
                        {
                           _loc5_ = _root.M_SeSiQang[_loc30_];
                           if(_loc5_.HP > 1)
                           {
                              _loc8_ = _loc5_._x - this._x;
                              _loc7_ = _loc5_._y - this._y;
                              _loc23_ = Math.sqrt(Math.pow(_loc8_,2) + Math.pow(_loc7_,2));
                              if(_loc23_ <= _loc25_)
                              {
                                 DiRenName = _loc5_._name;
                                 _loc11_ = _root.getAngle(_loc8_,_loc7_);
                                 _root.JianDeph++;
                                 if(_root.JianDeph > 100)
                                 {
                                    _root.JianDeph = 1;
                                 }
                                 _loc3_ = _root.M_DanQang.attachMovie("Mf_DiDan2","M_Jian" + _root.JianDeph,_root.JianDeph);
                                 _loc3_._x = this._x + 7;
                                 _loc3_._y = this._y + 7;
                                 _loc3_._rotation = _loc11_;
                                 _loc13_ = (_loc11_ - 90) / 57.29577951308232;
                                 _loc3_.speedX = Math.cos(_loc13_) * 10;
                                 _loc3_.speedY = Math.sin(_loc13_) * 10;
                                 _loc3_.DiRenName = DiRenName;
                                 _loc3_.MAXAngle = this.MAXAngle;
                                 _loc3_.Attack = this.Attack;
                                 _loc3_.onEnterFrame = function()
                                 {
                                    var _loc3_ = _root.M_SeSiQang[this.DiRenName];
                                    if(_loc3_.HP <= 1 || this._x < -20 || this._y < -20 || this._x > 670 || this._y > 520)
                                    {
                                       this.removeMovieClip();
                                    }
                                    var _loc7_ = _loc3_._x + 7 - this._x;
                                    var _loc8_ = _loc3_._y + 7 - this._y;
                                    var _loc12_ = Math.sqrt(Math.pow(_loc7_,2) + Math.pow(_loc8_,2));
                                    var _loc9_ = _root.getAngle(_loc7_,_loc8_);
                                    var _loc4_ = this._rotation;
                                    var _loc6_ = _root.refineAngle(_loc4_ - _loc9_);
                                    var _loc11_ = _root.refineAngle(_loc6_) < 180 ? -1 : 1;
                                    this._rotation = Math.abs(_loc6_) <= this.MAXAngle ? _loc9_ : _loc4_ + this.MAXAngle * _loc11_;
                                    var _loc5_ = (this._rotation - 90) / 57.29577951308232;
                                    this.speedX = Math.cos(_loc5_) * 10;
                                    this.speedY = Math.sin(_loc5_) * 10;
                                    this._x += this.speedX;
                                    this._y += this.speedY;
                                    var _loc10_;
                                    var _loc13_;
                                    if(_loc12_ < 20)
                                    {
                                       _loc3_.HP -= this.Attack;
                                       if(_loc3_.HP < 0)
                                       {
                                          _loc3_.HP = 0;
                                       }
                                       _loc3_.HPcolor = 125;
                                       _loc10_ = new flash.geom.ColorTransform(1,1,1,1,_loc3_.HPcolor,0,0,0);
                                       _loc13_ = new flash.geom.Transform(_loc3_);
                                       _loc13_.colorTransform = _loc10_;
                                       this.removeMovieClip();
                                    }
                                    false;
                                 };
                                 false;
                                 this.FaFull -= 30;
                                 break;
                              }
                           }
                           false;
                        }
                     }
                  }
                  if(this.TeSing == 7 && this.HP < this.MaxHP)
                  {
                     this.HP += Math.round(this.MaxHP / 20);
                     if(this.HP > this.MaxHP)
                     {
                        this.HP = this.MaxHP;
                     }
                  }
                  if(this.ZhongDu > 0)
                  {
                     this.ZhongDu -= this.ZhongDuNum;
                     this.HP -= this.ZhongDuNum;
                     this.ZhongDu = Math.round(this.ZhongDu);
                     this.HP = Math.round(this.HP);
                  }
                  else if(this.ZhongDuPD)
                  {
                     this.ZhongDu = 0;
                     this.ZhongDuPD = false;
                     _loc45_ = this.PerStar = 100;
                     this.c = new Color(this);
                     this.ctrans = new Object();
                     this.ctrans.ra = 100;
                     this.ctrans.ga = 100;
                     this.ctrans.ba = 100;
                     this.c.setTransform(this.ctrans);
                  }
                  if(this.BackPD && _root.M_DiTu2[this.NowToDiTu].DiTuTyle == 9)
                  {
                     if(_root.M_ShowCang.M_DHKSuSing.MivObject._name == this._name)
                     {
                        _root.M_ShowCang.M_DHKSuSing.removeMovieClip();
                     }
                     _root.DiRenMaxZL--;
                     _root.M_DiTu9[this._name].removeMovieClip();
                     this.removeMovieClip();
                  }
                  if(_loc33_)
                  {
                     this.GoStar = false;
                  }
               }
            }
         }
      }
   };
   false;
   false;
};
F_CreaDiRenS = function()
{
   var _loc2_ = 1;
   while(_loc2_ <= _root.DiRenMax)
   {
      _root.F_CreaDiRen();
      _loc2_ = _loc2_ + 1;
   }
};
F_FaiDiRen = function(FanWei, My_x, My_y)
{
   DiRenName = "";
   var _loc3_ = 1;
   var _loc2_;
   var _loc5_;
   var _loc4_;
   var _loc6_;
   while(_loc3_ <= _root.DiRenMax)
   {
      _loc2_ = _root.M_DiTu0["M_DiRen" + _loc3_];
      if(_loc2_.Die == false)
      {
         _loc5_ = _loc2_._x - My_x;
         _loc4_ = _loc2_._y - My_y;
         _loc6_ = Math.sqrt(Math.pow(_loc5_,2) + Math.pow(_loc4_,2));
         if(_loc6_ <= FanWei)
         {
            DiRenName = _loc2_._name;
            if(_loc2_.Die == false)
            {
               _root.ButtonMess = "<font color=\'#FF0000\'>" + _loc2_.Title + "</font>[" + _loc2_.TyleStr + "] <font color=\'#666666\'>等级:<b>" + _loc2_.Level + "</b></font> <font color=\'#EE00A7\'>总生命值:<b>" + _loc2_.MaxHP + "</b></font> <font color=\'#EE5F00\'>金钱:<b>" + _loc2_.Money + "</b></font> <font color=\'#B509FF\'>神迹:<b>" + _loc2_.SenJiDian + "</b></font> <font color=\'#0000FF\'>特长:" + _loc2_.TeCang + "</font>";
            }
            break;
         }
      }
      false;
      _loc3_ = _loc3_ + 1;
   }
   return DiRenName;
};
F_JianTaRot = function()
{
   var _loc12_;
   var _loc11_;
   var _loc7_;
   var _loc9_;
   var _loc6_;
   var _loc10_;
   var _loc8_;
   var _loc4_;
   var _loc3_;
   var _loc5_;
   var _loc13_;
   if(_root.DiRenGoPD)
   {
      if(this.HP <= 1)
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound123");
         _root.S_Sound4.start(0,1);
         _root.RuanQenDeph++;
         if(_root.RuanQenDeph > 300)
         {
            _root.RuanQenDeph = 100;
         }
         _loc12_ = this._x;
         _loc11_ = this._y;
         _root.M_TemQang.attachMovie("Mf_RanQeng2","M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc12_,_y:_loc11_});
         this.DiTuObject.SeSi = "";
         this.removeMovieClip();
      }
      if(this.HPcolor > 0)
      {
         this.HPcolor -= 5;
         if(this.HPcolor < 0)
         {
            this.HPcolor = 0;
         }
         _loc7_ = new flash.geom.ColorTransform(1,1,1,1,this.HPcolor,0,0,0);
         _loc9_ = new flash.geom.Transform(this);
         _loc9_.colorTransform = _loc7_;
      }
      if(_root.GamePause == false && this._name != "M_ShowSeSi5")
      {
         if(this.Star)
         {
            this.RotionedPD = false;
            if(this.TaTyle != 5)
            {
               this.DiRenName = _root.F_FaiDiRen(this.FanWei,this._x,this._y);
            }
            if(this.DiRenName != "")
            {
               _loc6_ = {x:this._x,y:this._y};
               _loc10_ = _root.M_DiTu0[this.DiRenName]._x - _loc6_.x;
               _loc8_ = _root.M_DiTu0[this.DiRenName]._y - _loc6_.y;
               _loc4_ = _root.getAngle(_loc10_,_loc8_);
               _loc3_ = this.M_Gong._rotation;
               _loc5_ = _root.refineAngle(_loc3_ - _loc4_);
               _loc13_ = _root.refineAngle(_loc5_) < 180 ? -1 : 1;
               this.M_Gong._rotation = Math.abs(_loc5_) <= this.MAXAngle ? _loc4_ : _loc3_ + this.MAXAngle * _loc13_;
               if(Math.abs(_root.refineAngle(_loc3_ - _loc4_)) <= this.MAXAngle * 2)
               {
                  this.RotionedPD = true;
               }
            }
         }
      }
   }
};
F_DanFanWeiArr = function(Mythis)
{
   var _loc11_ = Mythis.FanWei;
   var _loc13_ = Mythis.Di_x - 7;
   var _loc12_ = Mythis.Di_y - 7;
   DiRenName = "";
   var _loc5_ = 1;
   var _loc2_;
   var _loc9_;
   var _loc8_;
   var _loc10_;
   var _loc0_;
   var _loc3_;
   var _loc4_;
   var _loc7_;
   while(_loc5_ <= _root.DiRenMax)
   {
      _loc2_ = _root.M_DiTu0["M_DiRen" + _loc5_];
      if(_loc2_.Die == false)
      {
         _loc9_ = _loc2_._x - _loc13_;
         _loc8_ = _loc2_._y - _loc12_;
         _loc10_ = Math.sqrt(Math.pow(_loc9_,2) + Math.pow(_loc8_,2));
         if(_loc10_ <= _loc11_)
         {
            DiRenName = _loc2_._name;
            _loc2_ = _root.M_DiTu0[DiRenName];
            _loc3_ = _loc2_.PerStar = 150;
            _loc2_.c = new Color(_loc2_);
            _loc2_.ctrans = new Object();
            _loc2_.ctrans.ra = _loc3_;
            _loc2_.ctrans.ga = _loc3_;
            _loc2_.ctrans.ba = _loc3_;
            _loc2_.c.setTransform(_loc2_.ctrans);
            _loc4_ = 1;
            _loc7_ = 1;
            if(Mythis.JianName == "Mf_Jian2")
            {
               _loc7_ = _root.All_Attack;
            }
            if(_loc2_.TeSing == 4 && Mythis.JianName == "Mf_Jian2")
            {
               _loc4_ = 0.5;
            }
            if(_loc2_.TeSing == 2 && Mythis.JianName == "Mf_Jian3")
            {
               _loc4_ = 0.5;
            }
            _loc2_.HP -= Math.round(Mythis.Attack / 3 * _loc7_ * _loc4_);
            false;
         }
      }
      false;
      _loc5_ = _loc5_ + 1;
   }
};
var JianDeph = 0;
F_SeiJian = function(DiRenName, Attack, JianName, FanWei, JianSuDu, Jianrotation, Jian_x, Jian_y, TaTyle, PreMiv)
{
   var _loc13_;
   var _loc11_;
   var _loc4_;
   var _loc19_;
   if(DiRenName != "")
   {
      _root.JianDeph++;
      if(_root.JianDeph > 100)
      {
         _root.JianDeph = 1;
      }
      _loc13_ = _root.M_DanQang;
      _loc11_ = _root.JianDeph;
      if(JianName == "Mf_Jian4")
      {
         _loc13_ = _root.M_GuDanQang;
         _loc11_ = _root.M_GuDanQang.getNextHighestDepth();
      }
      if(JianName == "Mf_Jian1")
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound108");
         _root.S_Sound4.start(0,1);
      }
      else if(JianName == "Mf_Jian2")
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound109");
         _root.S_Sound4.start(0,1);
      }
      else if(JianName == "Mf_Jian3")
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound110");
         _root.S_Sound4.start(0,1);
      }
      else if(JianName == "Mf_Jian4")
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound111");
         _root.S_Sound4.start(0,1);
      }
      else if(JianName == "Mf_Jian5")
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound126");
         _root.S_Sound4.start(0,1);
      }
      _loc4_ = _loc13_.attachMovie(JianName,"M_Jian" + _loc11_,_loc11_);
      _loc4_._x = Jian_x;
      _loc4_._y = Jian_y;
      _loc4_._rotation = Jianrotation;
      _loc19_ = (Jianrotation - 90) / 57.29577951308232;
      _loc4_.speedX = Math.cos(_loc19_) * JianSuDu;
      _loc4_.speedY = Math.sin(_loc19_) * JianSuDu;
      _loc4_.DiRenName = DiRenName;
      _loc4_.Attack = Attack;
      _loc4_.JianSuDu = JianSuDu;
      _loc4_.JianSuDuB = JianSuDu;
      _loc4_.StarNum = 0;
      _loc4_.MAXAngle = 8;
      _loc4_.MovePD = true;
      _loc4_.JianName = JianName;
      _loc4_.StarArr = true;
      _loc4_.ArrFinish = false;
      _loc4_.onEnterFrame = function()
      {
         var _loc22_;
         var _loc23_;
         var _loc16_;
         var _loc20_;
         var _loc19_;
         var _loc3_;
         var _loc6_;
         var _loc5_;
         var _loc13_;
         var _loc10_;
         var _loc14_;
         var _loc11_;
         var _loc24_;
         var _loc15_;
         var _loc18_;
         var _loc17_;
         var _loc21_;
         var _loc0_;
         var _loc9_;
         var _loc7_;
         var _loc8_;
         var _loc12_;
         var _loc4_;
         if(_root.GamePause == false)
         {
            if(this.MovePD)
            {
               this._x += this.speedX;
               this._y += this.speedY;
            }
            _loc22_ = Jian_x - this._x;
            _loc23_ = Jian_y - this._y;
            _loc16_ = Math.sqrt(Math.pow(_loc22_,2) + Math.pow(_loc23_,2));
            if(_loc16_ > FanWei && TaTyle != 5)
            {
               if(TaTyle == 2 || TaTyle == 4)
               {
                  _root.RuanQenDeph++;
                  if(_root.RuanQenDeph > 500)
                  {
                     _root.RuanQenDeph = 100;
                  }
                  _loc20_ = this._x - 7;
                  _loc19_ = this._y - 7;
                  _root.M_TemQang.attachMovie("Mf_RanQeng" + TaTyle,"M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc20_,_y:_loc19_});
               }
               this.removeMovieClip();
            }
            if(this.DiRenName != "" || TaTyle == 5)
            {
               _loc3_ = _root.M_DiTu0[this.DiRenName];
               if(_loc3_.Die == false && _loc3_.NowJian != this._name || TaTyle == 5)
               {
                  if(TaTyle == 5)
                  {
                     this.StarNum++;
                     _loc6_ = 0;
                     _loc5_ = 0;
                     if(this.DiRenName == "" || _loc3_._visible != true || _loc3_.Die || this.StarArr == false)
                     {
                        _loc6_ = Jian_x - this._x;
                        _loc5_ = Jian_y - this._y;
                        if(Math.abs(_loc6_) <= this.JianSuDu * 2 && Math.abs(_loc5_) <= this.JianSuDu * 2)
                        {
                           this._x = Jian_x;
                           this._y = Jian_y;
                           if(this.DiRenName != "" && _loc3_._visible && _loc3_.Die == false)
                           {
                              this.ArrFinish = false;
                              this.StarArr = true;
                           }
                           else
                           {
                              this.StarArr = false;
                              this._xscale = this._yscale = 100;
                              PreMiv.gotoAndPlay("a2");
                              this.removeMovieClip();
                           }
                        }
                        if(this.JianSuDu > this.JianSuDuB)
                        {
                           this.JianSuDu -= 0.2;
                        }
                        else
                        {
                           this.JianSuDu = this.JianSuDuB;
                        }
                        if(this._xscale < 100)
                        {
                           this._xscale = this._yscale += 5;
                        }
                        else
                        {
                           this._xscale = this._yscale = 100;
                        }
                     }
                     else
                     {
                        _loc6_ = _loc3_._x + 7 - this._x;
                        _loc5_ = _loc3_._y + 7 - this._y;
                     }
                     _loc13_ = Math.sqrt(Math.pow(_loc6_,2) + Math.pow(_loc5_,2));
                     if(this.StarArr == false && this.DiRenName != "" && _loc3_.Die == false)
                     {
                        GoToDi_xB = _loc3_._x + 7 - this._x;
                        GoToDi_yB = _loc3_._y + 7 - this._y;
                        GoToDi_rB = Math.sqrt(Math.pow(GoToDi_xB,2) + Math.pow(GoToDi_yB,2));
                        if(GoToDi_rB > 100)
                        {
                           this.ArrFinish = false;
                           this.StarArr = true;
                        }
                     }
                     _loc10_ = _root.getAngle(_loc6_,_loc5_);
                     _loc14_ = this._rotation;
                     _loc11_ = _root.refineAngle(_loc14_ - _loc10_);
                     _loc24_ = _root.refineAngle(_loc11_) < 180 ? -1 : 1;
                     this._rotation = Math.abs(_loc11_) <= this.MAXAngle ? _loc10_ : _loc14_ + this.MAXAngle * _loc24_;
                     if(Math.abs(_loc13_ < 50 && _root.refineAngle(this._rotation - _loc10_)) > this.MAXAngle)
                     {
                        this.MovePD = false;
                     }
                     else
                     {
                        this.MovePD = true;
                     }
                     _loc15_ = (this._rotation - 90) / 57.29577951308232;
                     this.speedX = Math.cos(_loc15_) * this.JianSuDu;
                     this.speedY = Math.sin(_loc15_) * this.JianSuDu;
                     if(_loc13_ < 100 && this._xscale > 45)
                     {
                        this._xscale = this._yscale -= 5;
                        if(this.JianSuDu > this.JianSuDuB / 2)
                        {
                           this.JianSuDu += 0.2;
                        }
                     }
                  }
                  _loc18_ = _loc3_._x - this._x;
                  _loc17_ = _loc3_._y - this._y;
                  _loc21_ = Math.sqrt(Math.pow(_loc18_,2) + Math.pow(_loc17_,2));
                  if(_loc21_ <= 16 && this.ArrFinish == false)
                  {
                     if(this.JianName == "Mf_Jian2")
                     {
                        _root.S_Sound5.stop();
                        _root.S_Sound5.attachSound("Sf_Sound112");
                        _root.S_Sound5.start(0,1);
                     }
                     else if(this.JianName == "Mf_Jian3")
                     {
                        _root.S_Sound5.stop();
                        _root.S_Sound5.attachSound("Sf_Sound113");
                        _root.S_Sound5.start(0,1);
                     }
                     else if(this.JianName == "Mf_Jian4")
                     {
                        _root.S_Sound5.stop();
                        _root.S_Sound5.attachSound("Sf_Sound111");
                        _root.S_Sound5.start(0,1);
                     }
                     if(_loc3_.Title == "肥牛车")
                     {
                        _root.S_Sound7.stop();
                        _root.S_Sound7.attachSound("Sf_Sound116");
                        _root.S_Sound7.start(0,1);
                     }
                     this.Di_x = this._x;
                     this.Di_y = this._y;
                     _loc3_.NowJian = this._name;
                     _loc9_ = _loc3_.PerStar = 250;
                     _loc3_.c = new Color(_loc3_);
                     _loc3_.ctrans = new Object();
                     _loc3_.ctrans.ra = _loc9_;
                     _loc3_.ctrans.ga = _loc9_;
                     _loc3_.ctrans.ba = _loc9_;
                     _loc3_.c.setTransform(_loc3_.ctrans);
                     _root.RuanQenDeph++;
                     if(_root.RuanQenDeph > 300)
                     {
                        _root.RuanQenDeph = 100;
                     }
                     _loc20_ = _loc3_._x;
                     _loc19_ = _loc3_._y;
                     _root.M_TemQang.attachMovie("Mf_RanQeng" + TaTyle,"M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc20_,_y:_loc19_});
                     _loc7_ = 1;
                     if(_loc3_.TeSing == 4 && this.JianName == "Mf_Jian2")
                     {
                        _loc7_ = 0.5;
                     }
                     if(_loc3_.TeSing == 2 && this.JianName == "Mf_Jian3")
                     {
                        _loc7_ = 0.5;
                     }
                     if(_loc3_.TeSing == 10 && this.JianName == "Mf_Jian5")
                     {
                        _loc7_ = 0.5;
                     }
                     if(this.FanWei > 0)
                     {
                        if(TaTyle == 1 || TaTyle == 2)
                        {
                           _loc3_.HP -= Math.round(this.Attack * 0.6666666666666666 * _root.All_Attack * _loc7_);
                        }
                        else
                        {
                           _loc3_.HP -= Math.round(this.Attack * 0.6666666666666666);
                        }
                        F_DanFanWeiArr(this);
                     }
                     else if(TaTyle == 1 || TaTyle == 2)
                     {
                        _loc3_.HP -= Math.round(this.Attack * _root.All_Attack * _loc7_);
                     }
                     else
                     {
                        _loc3_.HP -= this.Attack;
                     }
                     if(TaTyle == 4 && _loc3_.NowDDDiTu.SeSi == "")
                     {
                        if(_root.SeSiDephNext > 0 && _root.M_SeSiQangB.getInstanceAtDepth(_root.SeSiDephNext) == undefined)
                        {
                           _root.SeSiDeph = _root.SeSiDephNext;
                           _root.SeSiDephNext = 0;
                        }
                        else
                        {
                           _root.SeSiDephNext = 0;
                           _root.SeSiDeph++;
                        }
                        _loc8_ = _root.M_SeSiQangB;
                        _loc12_ = _loc8_.getNextHighestDepth();
                        _loc4_ = _loc8_.attachMovie("Mf_SeSi203","M_SeSi" + _loc12_,_loc12_,{FanGiangV:false});
                        _loc3_.NowDDDiTu.SeSi = _loc4_._name;
                        _loc4_._x = _loc3_.NowDDDiTu._x;
                        _loc4_._y = _loc3_.NowDDDiTu._y;
                        _loc4_.Star = true;
                        _loc4_.DiTuObject = _loc3_.NowDDDiTu;
                        _loc4_.NumStar = 0;
                        _loc4_.onEnterFrame = function()
                        {
                           if(_root.GamePause == false)
                           {
                              this.NumStar++;
                              if(this.NumStar >= 70)
                              {
                                 if(this._alpha > 0)
                                 {
                                    this._alpha -= 2;
                                 }
                                 else
                                 {
                                    _root.SeSiDephNext = this.getDepth();
                                    this.DiTuObject.SeSi = "";
                                    this.removeMovieClip();
                                 }
                              }
                           }
                        };
                        false;
                        false;
                     }
                     if(TaTyle == 6 && _loc3_.NowDDDiTu.SeSi == "")
                     {
                        if(_root.SeSiDephNext > 0 && _root.M_SeSiQangB.getInstanceAtDepth(_root.SeSiDephNext) == undefined)
                        {
                           _root.SeSiDeph = _root.SeSiDephNext;
                           _root.SeSiDephNext = 0;
                        }
                        else
                        {
                           _root.SeSiDephNext = 0;
                           _root.SeSiDeph++;
                        }
                        _loc8_ = _root.M_SeSiQang;
                        _loc12_ = _loc8_.getNextHighestDepth();
                        _loc4_ = _loc8_.attachMovie("Mf_SeSi103","M_SeSi" + _loc12_,_loc12_,{FanGiangV:false});
                        _loc3_.NowDDDiTu.SeSi = _loc4_._name;
                        _loc4_._x = _loc3_.NowDDDiTu._x;
                        _loc4_._y = _loc3_.NowDDDiTu._y;
                        _loc4_.Star = true;
                        _loc4_.DiTuObject = _loc3_.NowDDDiTu;
                        _loc4_.NumStar = 0;
                        _loc4_.onEnterFrame = function()
                        {
                           if(_root.GamePause == false)
                           {
                              this.NumStar++;
                              if(this.NumStar >= 100)
                              {
                                 if(this._alpha > 0)
                                 {
                                    this._alpha -= 0.7;
                                 }
                                 else
                                 {
                                    _root.SeSiDephNext = this.getDepth();
                                    this.DiTuObject.SeSi = "";
                                    this.removeMovieClip();
                                 }
                              }
                           }
                        };
                        false;
                        false;
                     }
                     this.StarArr = false;
                     if(TaTyle != 5)
                     {
                        this.DiRenName = "";
                        this.removeMovieClip();
                     }
                     else
                     {
                        this.ArrFinish = true;
                     }
                  }
               }
               false;
            }
         }
      };
      false;
      false;
   }
};
F_SenDianArr = function()
{
   var _loc19_;
   var _loc18_;
   var _loc16_;
   var _loc17_;
   var _loc11_;
   var _loc20_;
   var _loc4_;
   var _loc8_;
   var _loc14_;
   var _loc6_;
   var _loc5_;
   var _loc7_;
   var _loc3_;
   var _loc0_;
   var _loc13_;
   var _loc15_;
   if(_root.DiRenGoPD)
   {
      if(this.HP <= 1)
      {
         _root.S_Sound4.stop();
         _root.S_Sound4.attachSound("Sf_Sound123");
         _root.S_Sound4.start(0,1);
         _root.RuanQenDeph++;
         if(_root.RuanQenDeph > 300)
         {
            _root.RuanQenDeph = 100;
         }
         _loc19_ = this._x;
         _loc18_ = this._y;
         _root.M_TemQang.attachMovie("Mf_RanQeng2","M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc19_,_y:_loc18_});
         this.DiTuObject.SeSi = "";
         this.removeMovieClip();
      }
      if(this.HPcolor > 0)
      {
         this.HPcolor -= 5;
         if(this.HPcolor < 0)
         {
            this.HPcolor = 0;
         }
         _loc16_ = new flash.geom.ColorTransform(1,1,1,1,this.HPcolor,0,0,0);
         _loc17_ = new flash.geom.Transform(this);
         _loc17_.colorTransform = _loc16_;
      }
      if(_root.GamePause == false)
      {
         if(this.Star)
         {
            if(this.TemFaSieJJ > this.FaSieJJ)
            {
               this.RotionedPD = false;
               this.DiRenName = _root.F_FaiDiRen(this.FanWei,this._x,this._y);
               if(this.DiRenName != "")
               {
                  _root.S_Sound4.stop();
                  _root.S_Sound4.attachSound("Sf_Sound107");
                  _root.S_Sound4.start(0,1);
                  _loc11_ = this.Attack;
                  _loc20_ = this.getDepth();
                  this.swapDepths(_root.M_SeSiQang.getNextHighestDepth());
                  _loc4_ = _root.M_DiTu0[this.DiRenName];
                  this.M_Gong.M_DianSan.gotoAndPlay("a1");
                  _loc8_ = {x:this._x,y:this._y};
                  this.globalToLocal(_loc8_);
                  _loc14_ = {x:_loc4_._x,y:_loc4_._y};
                  this.globalToLocal(_loc14_);
                  this.createEmptyMovieClip("triangle_mc",1);
                  this.triangle_mc.lineStyle(1,16777215,100);
                  for(var _loc12_ in _root.M_SeSiQang)
                  {
                     if(_root.M_SeSiQang[_loc12_].TaTyle == 3)
                     {
                        _loc6_ = _root.M_SeSiQang[_loc12_]._x - this._x;
                        _loc5_ = _root.M_SeSiQang[_loc12_]._y - this._y;
                        _loc7_ = Math.sqrt(Math.pow(_loc6_,2) + Math.pow(_loc5_,2));
                        if(_loc7_ < this.FanWei)
                        {
                           _loc3_ = {x:_root.M_SeSiQang[_loc12_]._x,y:_root.M_SeSiQang[_loc12_]._y};
                           this.globalToLocal(_loc3_);
                           this.triangle_mc.moveTo(_loc8_.x + 7,_loc8_.y + 7);
                           this.triangle_mc.lineTo(_loc3_.x + 7,_loc3_.y + 7);
                           _loc11_ += Math.round(_root.M_SeSiQang[_loc12_].Attack / 3);
                           _root.M_SeSiQang[_loc12_].M_Gong.M_DianSan.gotoAndPlay("a1");
                        }
                     }
                  }
                  this.triangle_mc.moveTo(_loc8_.x + 7,_loc8_.y + 7);
                  this.triangle_mc.lineTo(_loc14_.x + 7,_loc14_.y + 7);
                  _loc4_.NowJian = this._name;
                  _root.RuanQenDeph++;
                  if(_root.RuanQenDeph > 300)
                  {
                     _root.RuanQenDeph = 100;
                  }
                  _loc19_ = _loc4_._x;
                  _loc18_ = _loc4_._y;
                  _root.M_TemQang.attachMovie("Mf_RanQeng3","M_RanQeng" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc19_,_y:_loc18_});
                  _loc13_ = _loc4_.PerStar = 250;
                  _loc4_.c = new Color(_loc4_);
                  _loc4_.ctrans = new Object();
                  _loc4_.ctrans.ra = _loc13_;
                  _loc4_.ctrans.ga = _loc13_;
                  _loc4_.ctrans.ba = _loc13_;
                  _loc4_.c.setTransform(_loc4_.ctrans);
                  _loc15_ = 1;
                  if(this.TeSing == 3)
                  {
                     _loc15_ = 0.5;
                  }
                  _loc4_.HP -= _loc11_ * _loc15_;
                  this.TemFaSieJJ = 0;
                  this.triangle_mc.TimeStar = 0;
                  this.triangle_mc.PerMiv = this;
                  if(_root.MySellID == 3)
                  {
                     this.HPmini--;
                     this.HP = Math.round(this.HPmini / _root.SeSiHPmini);
                     this.Money--;
                     if(this.Money < 0)
                     {
                        this.Money = 0;
                     }
                  }
                  this.triangle_mc.onEnterFrame = function()
                  {
                     this.TimeStar++;
                     if(this.TimeStar > 5)
                     {
                        this.PerMiv.swapDepths(this.PerMiv.MyTemDeph);
                        this.removeMovieClip();
                     }
                  };
                  false;
               }
            }
            else
            {
               this.TemFaSieJJ++;
            }
         }
      }
   }
};
F_UpdateSeSi = function(SJHpAdd)
{
   var _loc2_;
   var _loc3_;
   for(var _loc4_ in _root.M_SeSiQang)
   {
      if(_root.M_SeSiQang[_loc4_].TaTyle == 1 || _root.M_SeSiQang[_loc4_].TaTyle == 2)
      {
         _root.M_SeSiQang[_loc4_].FanWei = Math.round(_root.M_SeSiQang[_loc4_].rFanWei * _root.All_FanWei);
         _root.M_SeSiQang[_loc4_].Attack = Math.round(_root.M_SeSiQang[_loc4_].rAttack * _root.All_Attack);
         _root.M_SeSiQang[_loc4_].M_FanGiang._width = _root.M_SeSiQang[_loc4_].M_FanGiang._height = _root.M_SeSiQang[_loc4_].FanWei * 2;
      }
      if(_root.M_SeSiQang[_loc4_].TaTyle == 3 || _root.M_SeSiQang[_loc4_].TaTyle == 4)
      {
         _root.M_SeSiQang[_loc4_].FanWei = Math.round(_root.M_SeSiQang[_loc4_].rFanWei * _root.AllSen_FanWei);
         _root.M_SeSiQang[_loc4_].M_FanGiang._width = _root.M_SeSiQang[_loc4_].M_FanGiang._height = _root.M_SeSiQang[_loc4_].FanWei * 2;
      }
      _loc2_ = Math.round(_root.M_SeSiQang[_loc4_].rMaxHP * _root.All_MaxHP);
      _loc3_ = _loc2_ - _root.M_SeSiQang[_loc4_].MaxHP;
      _root.M_SeSiQang[_loc4_].MaxHP = _loc2_;
      _root.M_SeSiQang[_loc4_].HP += _loc3_;
      if(_root.M_SeSiQang[_loc4_].HP > _root.M_SeSiQang[_loc4_].MaxHP)
      {
         _root.M_SeSiQang[_loc4_].HP = _root.M_SeSiQang[_loc4_].MaxHP;
      }
   }
   for(_loc4_ in _root.M_SeSiQangB)
   {
      _loc2_ = Math.round(_root.M_SeSiQangB[_loc4_].rMaxHP * _root.All_MaxHP);
      _loc3_ = _loc2_ - _root.M_SeSiQangB[_loc4_].MaxHP;
      _root.M_SeSiQangB[_loc4_].MaxHP = _loc2_;
      _root.M_SeSiQangB[_loc4_].HP += _loc3_;
      if(_root.M_SeSiQangB[_loc4_].HP > _root.M_SeSiQangB[_loc4_].MaxHP)
      {
         _root.M_SeSiQangB[_loc4_].HP = _root.M_SeSiQangB[_loc4_].MaxHP;
      }
   }
};
F_UpdateButton = function()
{
   var _loc2_ = 1;
   var _loc3_;
   var _loc4_;
   while(_loc2_ <= 6)
   {
      if(_root.Money >= _root["M_ShowSeSi" + _loc2_].Money * _root.BuyLu && _root.SenJiDian >= _root["M_ShowSeSi" + _loc2_].SenJiDian)
      {
         if(_loc2_ == 6 && (_root.SenLongCount >= 2 || _root.NowGuanSu < 31))
         {
            _root["B_ShowSeSi" + _loc2_].enabled = false;
            _root["B2_ShowSeSi" + _loc2_]._visible = true;
            _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
            _loc4_ = new flash.geom.Transform(_root["B_ShowSeSi" + _loc2_]);
            _loc4_.colorTransform = _loc3_;
         }
         else
         {
            _root["B_ShowSeSi" + _loc2_].enabled = true;
            _root["B2_ShowSeSi" + _loc2_]._visible = false;
            _loc3_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
            _loc4_ = new flash.geom.Transform(_root["B_ShowSeSi" + _loc2_]);
            _loc4_.colorTransform = _loc3_;
         }
      }
      else
      {
         _root["B_ShowSeSi" + _loc2_].enabled = false;
         _root["B2_ShowSeSi" + _loc2_]._visible = true;
         _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
         _loc4_ = new flash.geom.Transform(_root["B_ShowSeSi" + _loc2_]);
         _loc4_.colorTransform = _loc3_;
      }
      _loc2_ = _loc2_ + 1;
   }
   if(_root.Money >= _root.M_ShowSeSi101.Money * _root.BuyLu && _root.SenJiDian >= _root.M_ShowSeSi101.SenJiDian)
   {
      _root.B_ShowSeSi101.enabled = true;
      _root.B2_ShowSeSi101._visible = false;
      _loc3_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi101);
      _loc4_.colorTransform = _loc3_;
   }
   else
   {
      _root.B_ShowSeSi101.enabled = false;
      _root.B2_ShowSeSi101._visible = true;
      _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi101);
      _loc4_.colorTransform = _loc3_;
   }
   if(_root.Money >= _root.M_ShowSeSi201.Money * _root.BuyLu && _root.SenJiDian >= _root.M_ShowSeSi201.SenJiDian)
   {
      _root.B_ShowSeSi201.enabled = true;
      _root.B2_ShowSeSi201._visible = false;
      _loc3_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi201);
      _loc4_.colorTransform = _loc3_;
   }
   else
   {
      _root.B_ShowSeSi201.enabled = false;
      _root.B2_ShowSeSi201._visible = true;
      _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi201);
      _loc4_.colorTransform = _loc3_;
   }
   if(_root.Money >= _root.M_ShowSeSi202.Money * _root.BuyLu && _root.SenJiDian >= _root.M_ShowSeSi202.SenJiDian)
   {
      _root.B_ShowSeSi202.enabled = true;
      _root.B2_ShowSeSi202._visible = false;
      _loc3_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi202);
      _loc4_.colorTransform = _loc3_;
   }
   else
   {
      _root.B_ShowSeSi202.enabled = false;
      _root.B2_ShowSeSi202._visible = true;
      _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi202);
      _loc4_.colorTransform = _loc3_;
   }
   if(_root.Money >= _root.M_ShowSeSi102.Money * _root.BuyLu && _root.SenJiDian >= _root.M_ShowSeSi102.SenJiDian)
   {
      _root.B_ShowSeSi102.enabled = true;
      _root.B2_ShowSeSi102._visible = false;
      _loc3_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi102);
      _loc4_.colorTransform = _loc3_;
   }
   else
   {
      _root.B_ShowSeSi102.enabled = false;
      _root.B2_ShowSeSi102._visible = true;
      _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
      _loc4_ = new flash.geom.Transform(_root.B_ShowSeSi102);
      _loc4_.colorTransform = _loc3_;
   }
   _loc2_ = 1;
   while(_loc2_ <= 5)
   {
      if(_root.Money >= _root["M_RuanJiao" + _loc2_].SJMoney && _root.SenJiDian >= _root["M_RuanJiao" + _loc2_].SJSenJiDian)
      {
         if(_root["M_RuanJiao" + _loc2_].Level < 6)
         {
            _root["M_RuanJiao" + _loc2_].Benabled = true;
            _loc3_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
            _loc4_ = new flash.geom.Transform(_root["M_RuanJiao" + _loc2_]);
            _loc4_.colorTransform = _loc3_;
         }
         else
         {
            _root["M_RuanJiao" + _loc2_].Level = 6;
            _root["M_RuanJiao" + _loc2_].Benabled = false;
            _loc3_ = new flash.geom.ColorTransform(1,0.5,0.5,1,125,0,0,0);
            _loc4_ = new flash.geom.Transform(_root["M_RuanJiao" + _loc2_]);
            _loc4_.colorTransform = _loc3_;
         }
      }
      else if(_root["M_RuanJiao" + _loc2_].Level < 6)
      {
         _root["M_RuanJiao" + _loc2_].Benabled = false;
         _loc3_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
         _loc4_ = new flash.geom.Transform(_root["M_RuanJiao" + _loc2_]);
         _loc4_.colorTransform = _loc3_;
      }
      else
      {
         _root["M_RuanJiao" + _loc2_].Level = 6;
         _root["M_RuanJiao" + _loc2_].Benabled = false;
         _loc3_ = new flash.geom.ColorTransform(1,0.5,0.5,1,125,0,0,0);
         _loc4_ = new flash.geom.Transform(_root["M_RuanJiao" + _loc2_]);
         _loc4_.colorTransform = _loc3_;
      }
      _loc2_ = _loc2_ + 1;
   }
   _root.F_NumShow(_root.M_ShowCang,_root.NowGuanSu,452,65,1,82);
   _root.F_NumShow(_root.M_ShowCang,_root.AllDeFen,530,65,2,82);
};
F_UpdateVar = function(Tyle)
{
   _root.DiRenLondCount = 0;
   _root.TemSeSiShow = 0;
   _root.RuanQenDeph = 100;
   _root.DiRenDeph = 0;
   _root.CaoJiCount = 0;
   _root.FaShiCount = 0;
   _root.JianDeph = 0;
   _root.ADiRenName = "";
   _root.GuanEWDeFen = 0;
   _root.DiRenMax = 7;
   if(_root.NowGuanSu > 30)
   {
      _root.DiRenMax = 7 + (_root.NowGuanSu - 30);
   }
   _root.DiRenMaxZL = _root.DiRenMax;
   _root.ButtonMess = "";
   _root.NowTimeGO = 0;
   _root.ZCfinish = 0;
   _root.NowTimeZL = new Date();
   _root.M_NowTimeGO.M_TimeScal.StarSound = false;
   var _loc2_;
   if(Tyle == 1)
   {
      _root.SDHPstr = "";
      _root.LoadArr = [];
      _root.DiRenStar_x = 0;
      _root.DiRenStar_y = 0;
      _root.SeSiDeph = 0;
      _root.SeSiDephNext = 0;
      _root.Money = _root.MoneyStar;
      _root.SenJiDian = 0;
      _root.RuanJiao = 0;
      _root.BuyLu = _root.BuyLuStar;
      _root.SellLu = _root.SellLuStar;
      _root.LieRingCount = 0;
      _root.SenLongCount = 0;
      _root.NowGuanSu = 1;
      _root.All_Attack = 1;
      _root.All_FanWei = 1;
      _root.All_MaxHP = 1;
      _root.AllSen_FanWei = 1;
      _root.All_Money = 1;
      _root.AllEWDeFen = 0;
      _root.AllDeFen = 0;
      _root.MessText = "";
      _root.AuMessText = "";
      _root.NowDiTuID = -1;
      _root.MySellID = 1;
      _root.GameStar = false;
      _root.GamePause = false;
      _loc2_ = 1;
      while(_loc2_ <= 5)
      {
         _root["M_RuanJiao" + _loc2_].Level = 0;
         _root["M_RuanJiao" + _loc2_].SJMoney = _root["M_RuanJiao" + _loc2_].rSJMoney;
         _root["M_RuanJiao" + _loc2_].SJSenJiDian = _root["M_RuanJiao" + _loc2_].rSJSenJiDian;
         _loc2_ = _loc2_ + 1;
      }
   }
};
F_UpdateCang = function(Tyle)
{
   for(var _loc2_ in _root.M_TemQang)
   {
      if(_root.M_TemQang[_loc2_]._name != "M_RuKoRun")
      {
         _root.M_TemQang[_loc2_].removeMovieClip();
      }
   }
   for(_loc2_ in _root.M_TemQangU)
   {
      _root.M_TemQangU[_loc2_].removeMovieClip();
   }
   for(_loc2_ in _root.M_DanQang)
   {
      _root.M_DanQang[_loc2_].removeMovieClip();
   }
   for(_loc2_ in _root.M_DiTu0)
   {
      _root.M_DiTu0[_loc2_].removeMovieClip();
   }
   for(_loc2_ in _root.M_DiTu9)
   {
      _root.M_DiTu9[_loc2_].removeMovieClip();
   }
   if(Tyle == 1)
   {
      for(_loc2_ in _root.M_SeSiQang)
      {
         _root.M_SeSiQang[_loc2_].removeMovieClip();
      }
      for(_loc2_ in _root.M_DiTu1)
      {
         _root.M_DiTu1[_loc2_].removeMovieClip();
      }
      for(_loc2_ in _root.M_SeSiQangB)
      {
         _root.M_SeSiQangB[_loc2_].removeMovieClip();
      }
      for(_loc2_ in _root.M_DiTu2)
      {
         _root.M_DiTu2[_loc2_].removeMovieClip();
      }
      for(_loc2_ in _root.M_ShowCang)
      {
         _root.M_ShowCang[_loc2_].removeMovieClip();
      }
      _root.M_TemQang.M_RuKoRun.removeMovieClip();
      _root.M_DiTu8.M_GongDian.removeMovieClip();
   }
};
var ZCfinish = 0;
F_GuanPass = function()
{
   var _loc4_;
   var _loc3_;
   var _loc2_;
   if(_root.SenJiDian >= 500 && _root.NowGuanSu > 30 && Math.floor(Math.random() * 3800) == 1)
   {
      _root.S_Sound4.stop();
      _root.S_Sound4.attachSound("Sf_Sound119");
      _root.S_Sound4.start(0,1);
      _root.SenJiDian -= 10;
      _root.RuanQenDeph++;
      if(_root.RuanQenDeph > 500)
      {
         _root.RuanQenDeph = 100;
      }
      _loc4_ = _root.M_DiTu8.M_GongDian._x;
      _loc3_ = _root.M_DiTu8.M_GongDian._y;
      _loc2_ = _root.M_TemQang.attachMovie("Mf_SenEn","M_DeMoney" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc4_,_y:_loc3_});
      _loc2_._xscale = _loc2_._yscale = 200;
      _loc2_._alpha = 60;
      _root.M_DiTu8.M_GongDian.HP = _root.M_DiTu8.M_GongDian.MaxHP;
      for(var _loc5_ in _root.M_SeSiQang)
      {
         if(_root.M_SeSiQang[_loc5_].Tyle == 1 && _root.M_SeSiQang[_loc5_].HP < _root.M_SeSiQang[_loc5_].MaxHP)
         {
            _root.M_SeSiQang[_loc5_].HP = _root.M_SeSiQang[_loc5_].MaxHP;
            _root.RuanQenDeph++;
            if(_root.RuanQenDeph > 500)
            {
               _root.RuanQenDeph = 100;
            }
            _loc4_ = _root.M_SeSiQang[_loc5_]._x;
            _loc3_ = _root.M_SeSiQang[_loc5_]._y;
            _loc2_ = _root.M_TemQang.attachMovie("Mf_SenEn","M_DeMoney" + _root.RuanQenDeph,_root.RuanQenDeph,{_x:_loc4_,_y:_loc3_});
            _loc2_._alpha = 60;
            false;
         }
      }
      false;
   }
   var _loc7_;
   var _loc6_;
   var _loc8_;
   if(_root.DiRenMaxZL <= 0)
   {
      _root.ZCfinish++;
      if(_root.ZCfinish > 60)
      {
         _root.GamePause = true;
         _loc7_ = Math.round(_root.Money / 16);
         _root.GuanEWDeFen += _loc7_;
         if(_root.GuanEWDeFen > 0)
         {
            _loc6_ = Math.round(_loc7_ * 3.5 * _root.M_DiTu8.M_GongDian.Level);
            if(_loc6_ < _root.NowGuanSu * 50)
            {
               _root.Money += _loc6_;
            }
            else
            {
               _root.Money += _root.NowGuanSu * 50;
            }
            _root.M_MoneyBan.gotoAndPlay("a1");
         }
         else
         {
            _root.GuanEWDeFen = 0;
         }
         _root.AllEWDeFen += _root.GuanEWDeFen;
         if(_root.AllEWDeFen < 0)
         {
            _root.AllEWDeFen = 0;
         }
         _root.AllDeFen += _root.GuanEWDeFen;
         if(_root.AllDeFen < 0)
         {
            _root.AllDeFen = 0;
         }
         if(_root.MySellID == 2)
         {
            _root.AllDeFen += Math.round(_root.GuanEWDeFen * 1.2);
         }
         if(_root.MySellID == 3)
         {
            _root.AllDeFen += Math.round(_root.GuanEWDeFen * 1.8);
         }
         if(_root.AllDeFen < 0)
         {
            _root.AllDeFen = 0;
         }
         _loc8_ = 1;
         if(_root.NowGuanSu == 30)
         {
            _loc8_ = 2;
         }
         if(_root.NowGuanSu == 50)
         {
            _loc8_ = 4;
         }
         _quality = "HIGH";
         _root.M_ShowCang.attachMovie("Mf_DHKOver","M_DHKOver",1000,{_x:325,_y:250,GoToID:_loc8_});
         _root.DiRenGoPD = false;
      }
   }
   if(_root.M_DiTu8.M_GongDian.HP <= 0)
   {
      _root.ZCfinish++;
      if(_root.ZCfinish > 50)
      {
         _root.GamePause = true;
         _loc7_ = Math.round(_root.Money / 16);
         _root.GuanEWDeFen += Math.round(_loc7_ / 5);
         if(_root.GuanEWDeFen < 0)
         {
            _root.GuanEWDeFen = 0;
         }
         _root.AllEWDeFen += _root.GuanEWDeFen;
         if(_root.AllEWDeFen < 0)
         {
            _root.AllEWDeFen = 0;
         }
         _root.AllDeFen += _root.GuanEWDeFen;
         if(_root.AllDeFen < 0)
         {
            _root.AllDeFen = 0;
         }
         _quality = "HIGH";
         _root.M_ShowCang.attachMovie("Mf_DHKOver","M_DHKOver",1000,{_x:325,_y:250,GoToID:3});
         _root.DiRenGoPD = false;
      }
   }
};
F_GameStar = function()
{
   _root.DiRenMaxZL = _root.DiRenMax;
   if(_root.NowDiTuID < 0)
   {
      _root.NowDiTuID = Math.floor(Math.random() * _root.DiTuCount);
   }
   _root.F_CreaDiTu();
   _root.GameStar = true;
   _root.B_GuanStar.enabled = true;
   var _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
   var _loc3_ = new flash.geom.Transform(_root.B_GuanStar);
   _loc3_.colorTransform = _loc2_;
   _root.S_Sound7.stop();
   _root.S_Sound7.attachSound("Sf_Sound125");
   _root.S_Sound7.start(0,1);
   _root.S_Sound1.stop();
   _root.S_Sound1.attachSound("Sf_Sound101");
   _root.S_Sound1.start(0,99999);
   _root.DiRenGoPD = false;
};
F_GuanStar = function()
{
   var _loc2_;
   var _loc3_;
   if(_root.NowGuanSu < 50)
   {
      _root.F_UpdateVar(0);
      _root.F_UpdateCang(0);
      _root.NowGuanSu++;
      _root.GamePause = false;
      _root.B_GuanStar.enabled = true;
      _loc2_ = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0);
      _loc3_ = new flash.geom.Transform(_root.B_GuanStar);
      _loc3_.colorTransform = _loc2_;
      _root.S_Sound7.stop();
      _root.S_Sound7.attachSound("Sf_Sound125");
      _root.S_Sound7.start(0,1);
      _root.S_Sound1.stop();
      _root.S_Sound1.attachSound("Sf_Sound101");
      _root.S_Sound1.start(0,99999);
      _root.DiRenGoPD = false;
   }
};
F_BackMenu = function()
{
   _root.GameStar = false;
   _root.F_UpdateVar(1);
   _root.F_UpdateCang(1);
   _root.M_ShowCang.attachMovie("Mf_DHKStar","M_DHKStar",1000,{_x:325,_y:250});
};
F_StarArrFun = function()
{
   _root.TemSeSiShow = 0;
   _root.M_TemQang.M_TemSeSi.removeMovieClip();
   _root.S_Sound3.stop();
   _root.S_Sound3.attachSound("Sf_Sound131");
   _root.S_Sound3.start(0,1);
   _root.S_Sound7.stop();
   _root.S_Sound7.attachSound("Sf_Sound118");
   _root.S_Sound7.start(0,1);
   _root.S_Sound1.stop();
   _root.S_Sound1.attachSound("Sf_Sound117");
   _root.S_Sound1.start(0,99999);
   _root.F_CreaDiRenS();
   _root.DiRenGoPD = true;
   _root.B_GuanStar.enabled = false;
   var _loc2_ = new flash.geom.ColorTransform(0.5,0.5,0.5,1,0,0,0,0);
   var _loc3_ = new flash.geom.Transform(_root.B_GuanStar);
   _loc3_.colorTransform = _loc2_;
   if(_root.NowGuanSu > 30)
   {
      _quality = "MEDIUM";
   }
};
