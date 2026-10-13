var §\x01§ = 622;
var §\x0f§ = 1;
var classesFrame = 15;
loaded = Math.round(_root.getBytesLoaded() / _root.getBytesTotal() * 100);
t = getTimer();
var speed = Math.round(_root.getBytesLoaded() / t * 100 / 100) + " K/s";
loadedv = loaded + " %";
M_ZeKuan._yscale = loaded;
if(_root.getBytesLoaded() >= _root.getBytesTotal())
{
   gotoAndStop("go");
   play();
}
else
{
   gotoAndStop("Load");
   play();
}
stop();
