function slots(quarters, leave)
{
  while (quarters > 0)
  {
    var num = Math.floor(Math.random() * 99);
    var goal = Math.floor(Math.random() * 99);
    var prize = Math.floor((Math.random() * 50) + 50);
    console.log("number:", num, "goal:", goal, "prize:", prize);
    if (num == goal)
    {
      quarters += prize;
      console.log("You won ", prize, " coins. You now have", quarters, "quarters.");
      if (quarters >= leave)
      {
        console.log("Success! You have reached your lottery goal and are leaving the day with", quarters, "quarters. You have dodged a bullet this day");
        break;
      }
    }
    else
    {
      quarters -= 1;
      console.log("You have", quarters, "quarters left.");
    }
  }
  console.log("Thanks for playing!");
}
