var §\x01§ = 323;
var §\x0f§ = 1;
var meNumberStr = new String(meNumber);
var i = 0;
while(i <= 10)
{
   this["a" + i].removeMovieClip();
   i++;
}
var TempX = 0;
var i = 0;
while(i < meNumberStr.length)
{
   this.attachMovie("a" + meNumberStr.charAt(i),"a" + i,i);
   this["a" + i]._x = TempX;
   TempX += this["a" + i]._width + 2;
   i++;
}
