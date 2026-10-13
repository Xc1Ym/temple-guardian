var §\x01§ = 135;
var §\x0f§ = 1;
var EditDiToDeph = 0;
var SenDianPre = null;
var RuKoPre = null;
var iy = 0;
while(iy <= 12)
{
   var ix = 0;
   while(ix <= 12)
   {
      EditDiToDeph++;
      var NowDeph = 200 + EditDiToDeph;
      var EditDiToKuan = M_EDDiTu.attachMovie("Mf_EditDiToKuan","M_EDTK" + EditDiToDeph,NowDeph);
      EditDiToKuan._x = ix * 32;
      EditDiToKuan._y = iy * 32;
      EditDiToKuan.ix = ix;
      EditDiToKuan.iy = iy;
      EditDiToKuan.R_Deph = EditDiToKuan.getDepth();
      EditDiToKuan.GoMax = 3;
      EditDiToKuan.RuKoPD = false;
      EditDiToKuan.RoadPD = true;
      if(ix == 0 || iy == 0 || ix == 12 || iy == 12)
      {
         EditDiToKuan.GoMax = 2;
         EditDiToKuan.RuKoPD = true;
         EditDiToKuan.RoadPD = false;
      }
      EditDiToKuan.onRelease = function()
      {
         B_TEdit1.enabled = true;
         B_TEdit1._alpha = 100;
         B_TEdit3.enabled = false;
         B_TEdit3._alpha = 50;
         var _loc4_ = this.MyID;
         _root.S_Sound7.stop();
         _root.S_Sound7.attachSound("Sf_Sound135");
         _root.S_Sound7.start(0,1);
         var _loc3_ = this.GoID + 1;
         if(_loc3_ == 1 && this.RoadPD == false)
         {
            _loc3_ = _loc3_ + 1;
         }
         if(_loc3_ == 2)
         {
            if(this.RuKoPD == false)
            {
               _loc3_ = _loc3_ + 1;
            }
            else
            {
               if(RuKoPre != null)
               {
                  RuKoPre.gotoAndStop("a0");
                  RuKoPre.swapDepths(RuKoPre.R_Deph);
               }
               RuKoPre = this;
            }
         }
         if(_loc3_ > this.GoMax)
         {
            _loc3_ = 0;
         }
         if(_loc3_ == 3)
         {
            if(this.hitTest(RuKoPre))
            {
               _loc3_ = 0;
            }
            else
            {
               if(SenDianPre != null)
               {
                  SenDianPre.gotoAndStop("a0");
                  SenDianPre.swapDepths(SenDianPre.R_Deph);
               }
               SenDianPre = this;
            }
         }
         this.gotoAndStop("a" + _loc3_);
         if(_loc3_ == 0)
         {
            this.swapDepths(this.R_Deph);
         }
         else if(_loc3_ == 1 || _loc3_ == 2)
         {
            this.swapDepths(this.R_Deph - 200);
         }
         else if(_loc3_ == 3)
         {
            this.swapDepths(this.R_Deph + 200);
         }
         if(_loc4_ == 9)
         {
            RuKoPre = null;
         }
         if(_loc4_ == 2)
         {
            SenDianPre = null;
         }
      };
      ix++;
   }
   iy++;
}
var TextErr = "";
F_TestDiTu = function()
{
   TextErr = "";
   var _loc14_ = [];
   var _loc9_ = false;
   var _loc10_ = false;
   var _loc3_;
   var _loc4_;
   var _loc12_;
   var _loc5_;
   var _loc8_;
   var _loc2_;
   var _loc7_;
   var _loc6_;
   if(RuKoPre == null || SenDianPre == null)
   {
      if(RuKoPre == null)
      {
         TextErr += "没有入口！";
      }
      if(SenDianPre == null)
      {
         TextErr += "没有神殿！";
      }
   }
   else
   {
      _loc3_ = RuKoPre;
      _loc4_ = [];
      _loc4_.push(RuKoPre._name);
      _loc12_ = null;
      _loc5_ = 1;
      while(_loc5_ <= EditDiToDeph)
      {
         if(_loc3_.ix == undefined)
         {
            break;
         }
         _loc8_ = 0;
         _loc2_ = 1;
         while(_loc2_ <= EditDiToDeph)
         {
            if(_loc3_._name != M_EDDiTu["M_EDTK" + _loc2_]._name && (M_EDDiTu["M_EDTK" + _loc2_].MyID == 1 || M_EDDiTu["M_EDTK" + _loc2_].MyID == 2))
            {
               if(_loc3_.ix == M_EDDiTu["M_EDTK" + _loc2_].ix && Math.abs(_loc3_.iy - M_EDDiTu["M_EDTK" + _loc2_].iy) == 1 || _loc3_.iy == M_EDDiTu["M_EDTK" + _loc2_].iy && Math.abs(_loc3_.ix - M_EDDiTu["M_EDTK" + _loc2_].ix) == 1)
               {
                  _loc7_ = 0;
                  _loc6_ = 0;
                  while(_loc6_ < _loc4_.length)
                  {
                     if(M_EDDiTu["M_EDTK" + _loc2_]._name == _loc4_[_loc6_])
                     {
                        _loc7_ = _loc7_ + 1;
                     }
                     _loc6_ = _loc6_ + 1;
                  }
                  if(_loc7_ == 0)
                  {
                     _loc8_ = _loc8_ + 1;
                     _loc12_ = M_EDDiTu["M_EDTK" + _loc2_];
                  }
               }
            }
            _loc2_ = _loc2_ + 1;
         }
         if(_loc8_ == 0 && _loc3_.MyID != 2)
         {
            TextErr += "·道路不通畅！";
            _loc9_ = false;
            _loc10_ = true;
         }
         if(_loc8_ == 0 && _loc3_.MyID == 2)
         {
            TextErr += "地图检验合格！";
            _loc9_ = true;
            _loc10_ = false;
         }
         if(_loc8_ > 1)
         {
            TextErr += "·有岔路！" + _loc3_.ix + "*" + _loc3_.iy;
            _loc9_ = false;
            _loc10_ = true;
         }
         if(_loc8_ == 1)
         {
            _loc3_ = _loc12_;
            _loc4_.push(_loc3_._name);
            _loc9_ = false;
            _loc10_ = false;
         }
         if(_loc9_ || _loc10_)
         {
            break;
         }
         _loc5_ = _loc5_ + 1;
      }
   }
   var _loc13_;
   var _loc11_;
   if(_loc9_)
   {
      _loc13_ = "";
      _loc5_ = 1;
      while(_loc5_ <= EditDiToDeph)
      {
         if(M_EDDiTu["M_EDTK" + _loc5_].MyID == 1)
         {
            _loc11_ = 0;
            _loc6_ = 0;
            while(_loc6_ < _loc4_.length)
            {
               if(M_EDDiTu["M_EDTK" + _loc5_]._name == _loc4_[_loc6_])
               {
                  _loc11_ = _loc11_ + 1;
               }
               _loc6_ = _loc6_ + 1;
            }
            if(_loc11_ == 0)
            {
               M_EDDiTu["M_EDTK" + _loc5_].gotoAndStop("a0");
               M_EDDiTu["M_EDTK" + _loc5_].MyID = 0;
               M_EDDiTu["M_EDTK" + _loc5_].swapDepths(M_EDDiTu["M_EDTK" + _loc5_].R_Deph);
               _loc13_ = "<br>发现零散道路，已自动修正。";
            }
         }
         _loc5_ = _loc5_ + 1;
      }
      TextErr += _loc13_;
   }
   if(_loc9_)
   {
      TextErr += "<br><br><font color=\'#0000FF\'><b>地图创建成功，请保存地图！</b></font>";
      B_TEdit3.enabled = true;
      B_TEdit3._alpha = 100;
      B_TEdit1.enabled = false;
      B_TEdit1._alpha = 50;
      F_SaveDiToToArr();
   }
   else
   {
      TextErr = "<font color=\'#FF00FF\'>地图检验不合格：</font>" + TextErr;
      TextErr += "<br><br><font color=\'#FF0000\'><b>地图创建失败，请修正后再行检验！</b></font>";
      B_TEdit3.enabled = false;
      B_TEdit3._alpha = 50;
   }
   this.attachMovie("Mf_EditMess","M_EditMess",10,{_x:325,_y:250,Mess:TextErr});
};
var SaveDiTuArr = [];
var ToiyNum = 0;
var i = 0;
while(i <= 12)
{
   SaveDiTuArr[i] = [];
   i++;
}
F_SaveDiToToArr = function()
{
   ToiyNum = 0;
   SaveDiTuArr = [];
   var _loc1_ = 0;
   while(_loc1_ <= 12)
   {
      SaveDiTuArr[_loc1_] = [];
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 1;
   while(_loc1_ <= EditDiToDeph)
   {
      SaveDiTuArr[ToiyNum].push(M_EDDiTu["M_EDTK" + _loc1_].MyID);
      if(_loc1_ % 13 == 0)
      {
         ToiyNum++;
      }
      _loc1_ = _loc1_ + 1;
   }
};
F_SaveDiTu = function()
{
   var _loc2_ = SaveDiTuArr.slice();
   this.attachMovie("Mf_MapSave","M_MapSave",10,{_x:325,_y:250,SaveOrLoad:1,DiTuArr:_loc2_});
};
