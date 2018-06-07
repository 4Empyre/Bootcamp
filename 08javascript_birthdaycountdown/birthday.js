for (var daysUntilMyBirthday = 60; daysUntilMyBirthday > 0; daysUntilMyBirthday = daysUntilMyBirthday - 1)
{
  if (daysUntilMyBirthday > 30)
  {
    console.log("Dang... It's still ", daysUntilMyBirthday, "days until my birthday...");
  }
  else if (daysUntilMyBirthday < 5)
  {
    console.log("WOOT WOOT!!! ONLY", daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!! YAAY!");
  }
  else if (daysUntilMyBirthday <= 30)
  {
    console.log("Oooh, It's only", daysUntilMyBirthday, "days until my birthday. Yeah!");
  }
}
console.log("HAPPY BIRTHDAY, TO ME! HAPPY BIRTHDAY, TO ME! IM HAVING THE BEST DAMN BIRTHDAY, I'LL EVER SEE. HAPPY BIRTHDAY, TO ME!")
