
// $(document).ready()makes the function available once the document is loaded

$(document).ready(function () {
    console.log("I'm ready..");
    storedEntry();

    // displays the current time on the screen via moment.js for a clock feature.
    //this is strictly for a visual when the user is using the application.

    var currentDay = $("#currentDay");
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));


    // activates time by the second (cool!) :)


    updateTime();
    function updateTime() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

    };

    setInterval(function () {
        updateTime();
    }, 1000);


    // save button which will save users entries to local storage


    $(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var hour = $(this).siblings(".hour").text();
        localStorage.setItem(hour, description);

    });


    // function which will retreive entries from local storage 
    // these entries will remain, regardless of refresh or closed tab.


    function storedEntry() {
        var nineAm = localStorage.getItem("9:00 AM");
        $("#nine .description").val(nineAm);

        var tenAm = localStorage.getItem("10:00 AM");
        $("#ten .description").val(tenAm);

        var elevenAm = localStorage.getItem("11:00 AM");
        $("#eleven .description").val(elevenAm);

        var twelvePm = localStorage.getItem("12:00 PM");
        $("#twelve .description").val(twelvePm);

        var onePm = localStorage.getItem("1:00 PM");
        $("#thirteen .description").val(onePm);

        var twoPm = localStorage.getItem("2:00 PM");
        $("#fourteen .description").val(twoPm);

        var threePm = localStorage.getItem("3:00 PM");
        $("#fifteen .description").val(threePm);

        var fourPm = localStorage.getItem("4:00 PM");
        $("#sixteen .description").val(fourPm);

        var fivePm = localStorage.getItem("5:00 PM");
        $("#seventeen .description").val(fivePm);

    }


    // utlizing time format via moment.js for current hour
    // "HH" sets time to military format (24hr) / (2 digit)


    var hourMoment = moment().format("HH");
    console.log(hourMoment);


    // .each function runs shorthand loop tageting description class
    // blockHour grabs each #id paired within desired hour blocks
    // moment.js hour compared with short military id's
    // color coding classes applied to text areas:
    // past(grey), present(red), future(green) 


    $(".description").each(function () {
        var blockHour = parseInt($(this).attr("id"));

        if (blockHour < hourMoment) {
            $(this).addClass("past");

        } else if (blockHour == hourMoment) {
            $(this).removeClass("past");
            $(this).addClass("present");

        } else {
            $(this).removeClass("present");
            $(this).addClass("future");

        };

    });

});




//************************************************************************ 
// *** “TIME ISN’T THE MAIN THING. IT’S THE ONLY THING.” - MILES DAVIS ***
//************************************************************************ 