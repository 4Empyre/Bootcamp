

var HOUR = 8;
var MINUTE = 31;
var PERIOD = "PM";

if( MINUTE >= 30 && PERIOD == "AM")
{
    console.log("Its almost", HOUR+1,"in the morning");
}
else if( MINUTE >=30 && PERIOD != "AM")
{
    console.log("It's almost", HOUR+1,"in the evening");
}
else if(MINUTE <30 && PERIOD == "AM")
{
    console.log("its too early", HOUR, "in the morning");
}
else if (MINUTE <30 && PERIOD != "AM")
{
    console.log("Its almost", HOUR, "in the evening");
}   
