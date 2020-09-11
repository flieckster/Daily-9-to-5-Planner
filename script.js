
// $(document).ready()makes the function available once the document is loaded

$(document).ready(function () {
    console.log("I'm ready..");
    storedEntry();

    // displays the current time on the screen via moment.js for a clock feature.
    //this is strictly for a visual when the user is using the application.

    var currentDay = $("#currentDay");
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //displays time by the second (cool!)

    updateTime();
    function updateTime() {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

    };

    setInterval(function () {
        updateTime();
    }, 1000);


    //save button which will save users entries to local storage

    $(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var hour = $(this).siblings(".hour").text();
        localStorage.setItem(hour, description);

    });

    // function which will retreive entries from local storage 

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

    // utlizing 24hr time format via moment.js
    //here we 

    // $(".hour").each(function () {
    //     var hourText = $(this).text();
    //     console.log(hourText);
    //     var currentHour = hourText.split(":");
    //     console.log(currentHour[0]);
    //     var hourMoment = moment().format("HH");
    //     console.log(hourMoment);

    //     if (currentHour[0] < hourMoment) {
    //         $(this).addClass("past");
    //     } else if (currentHour[0] == hourMoment) {
    //         $(this).addClass("present");
    //     } else {
    //         $(this).addClass("future");
    //         console.log(currentHour);
    //         // console.log(hourMoment);
    //     }

    // });
});



// var hourMoment = moment().format("h");
// console.log(hourMoment);
// if (currentHour < hourMoment) {
//     $(this).addClass("past");
// } else if (currentHour == hourMoment) {
//     $(this).addClass("present");
// } else {
//     $(this).addClass("future");
// }


// $(".hour").each(function () {
//     var hourText = $(this).text();
//     console.log(hourText);
//     var currentHour = hourText.split(":");
//     console.log(currentHour[0]);
//     var hourMoment = moment().format("HH");
//     console.log(hourMoment);

//     if (currentHour[0] < hourMoment) {
//         $(this).addClass("past");
//     } else if (currentHour[0] == hourMoment) {
//         $(this).addClass("present");
//     } else {
//         $(this).addClass("future");
//         console.log(currentHour[0]);
//         console.log(hourMoment);
//     }

// });
// });

