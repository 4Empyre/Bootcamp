/* Getting paid double each day starting on day 1 with 1 penny.*/

/* How much was the reward after 30 days? */
var money = 0.01
var gain = 0.01
for (var days = 1; days <= 30; days += 1)
{
  console.log("On day", days, "I have $" + money + ".");
  money += (gain * 2);
  gain *= 2;
}


/* How many days would it take to make $10,000? */
var money = 0.01
var gain = 0.01
if (money < 10000)
{
  for (var days = 1; money <= 10000; days +=1)
  {
    money += (gain * 2);
    gain *= 2;
  }
}
console.log("It took me", days, "days to make $" + money + ".");


/* How many days would it take to make $1,000,000,000? */
var money = 0.01
var gain = 0.01
if (money < 1000000000)
{
  for (var days = 1; money <= 1000000000; days +=1)
  {
    money += (gain * 2);
    gain *= 2;
  }
}
console.log("It took me", days, "days to make $" + money + ".");


/* How many days would it take to make Infinite money? */
var money = 0.01
var gain = 0.01
/*if (money < Infinity)*/
{
  /*for (var days = 1; money <= Infinity; days +=1)*/
  {
    money += (gain * 2);
    gain *= 2;
  }
}
console.log("It took me", days, "days to make $" + money + ".");
