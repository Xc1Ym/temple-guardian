var §\x01§ = 56;
var §\x0f§ = 1;
getAngle = function(dx, dy)
{
   return (Math.atan2(dy,dx) * 180 / 3.141592653589793 + 450) % 360;
};
refineAngle = function(angle)
{
   return (angle + 360) % 360;
};
F_NumShow = function(Miv, Num, N_x, N_y, Deph, Scale)
{
   Miv.attachMovie("Ma_Number","M_Number" + Deph,Deph,{_x:N_x,_y:N_y,meNumber:Num,_xscale:Scale,_yscale:Scale});
};
