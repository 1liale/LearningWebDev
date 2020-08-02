console.log("testing");

function getTime() 
{
    var d = new Date();
    var day = d.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.write("Today is: " + daylist[day]);
    
    var hours = d.getHours();
    var mins = d.getMinutes();
    var seconds = d.getSeconds();
    var suffix;

    if (hours <= 12)
    {
        suffix = "am";
    }
    else
    {
        suffix = "pm";
        hours-=12;
    }

    document.write("<br>"+"Current time: " + hours + suffix + " "+mins+" mins "+seconds+" seconds");
}