var names = ["James", "Jill", "Jane", "Jack"];
function numbered(list)
{
  for (var num = 0; num < list.length; num++)
  {
    console.log(num, "->", list[num]);
  }
}
numbered(names)
