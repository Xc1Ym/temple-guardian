var §\x01§ = 407;
var §\x0f§ = 1;
_root.SumitFen = true;
Selection.setFocus(T_UserName);
var SiJiFen = _root.AllDeFen;
var TempZiFen = Math.sqrt(SiJiFen + 0.1234);
var ZiFenStr = new String(String(TempZiFen));
var SiaoSuDian = ZiFenStr.indexOf(".");
var ZiFenStrB = "0" + ZiFenStr.substr(SiaoSuDian,5);
var ZiFen = SiJiFen + Number(ZiFenStrB);
var SubmitUserName = "";
var SumitURL = "";
JianRanName = function(JRstr)
{
   var _loc3_ = new String(JRstr.text);
   var _loc4_ = new String(_loc3_);
   var _loc5_ = _loc3_.length;
   var _loc2_ = 0;
   var _loc1_;
   while(_loc2_ < _loc3_.length)
   {
      _loc1_ = _loc3_.charCodeAt(_loc2_);
      if(!(_loc1_ == 32 || _loc1_ >= 48 && _loc1_ <= 57 || _loc1_ >= 65 && _loc1_ <= 90 || _loc1_ >= 97 && _loc1_ <= 122))
      {
         _loc4_ = _loc3_.slice(0,_loc2_) + _loc3_.slice(_loc2_ + 1,_loc5_);
         JRstr.text = _loc4_;
      }
      _loc2_ = _loc2_ + 1;
   }
};
JianRanKong = function(JRstr)
{
   var _loc4_ = false;
   var _loc3_ = new String(JRstr.text);
   var _loc6_ = new String(_loc3_);
   var _loc5_ = _loc3_.length;
   var _loc1_;
   var _loc2_;
   if(_loc5_ > 0)
   {
      _loc4_ = true;
      _loc1_ = 0;
      while(_loc1_ < _loc3_.length)
      {
         _loc2_ = _loc3_.charCodeAt(_loc1_);
         if(_loc2_ != 32)
         {
            _loc4_ = false;
            break;
         }
         _loc1_ = _loc1_ + 1;
      }
   }
   else
   {
      _loc4_ = true;
   }
   if(_loc4_)
   {
      M_EnterName.gotoAndPlay("a1");
   }
   return _loc4_;
};
this.onEnterFrame = function()
{
   JianRanName(T_UserName);
};
