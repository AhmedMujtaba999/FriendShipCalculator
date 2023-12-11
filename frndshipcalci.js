// This calculator tells you the random percentage of your friendship
var yourname=prompt("please enter your name");
var frndsname=prompt("please enter your friends name");
var n=Math.random();
n=Math.floor(n*100)+1;
if(n>70)
{
  alert("your friendship score is: "+ n +"%"+" you both are best freinds");
}
else{
alert("Your friendship calculation is: "+ n +"%");
}
