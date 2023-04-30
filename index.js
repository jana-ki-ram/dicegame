
var randomnum=Math.ceil(Math.random()*6);
document.querySelector(".player1dice").setAttribute("src","images/dice"+randomnum+".png")
var randomnum1=Math.ceil(Math.random()*6);
document.querySelector(".player2dice").setAttribute("src","images/dice"+randomnum1+".png")
if ( randomnum > randomnum1)
{
document.querySelector("h1").innerHTML="🚩player1 wins"
}
else if(randomnum < randomnum1){
  document.querySelector("h1").innerHTML="player2 wins🚩"

}
else{
document.querySelector("h1").innerHTML="Draw"
}
