function rollDice()
{
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status = document.getElementById('status');
  var d1 = Math.floor(Math.random() *6) + 1;
  var d2 = Math.floor(Math.random() *6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHtml = d1;
  die2.innerHtml = d2;
  status.innerHtml = "You rolled " + diceTotal + ".";
  if(d1 == d2)
  {
    status.innerHtml += "DOUBLES! You get a free turn!!";
  }
}
