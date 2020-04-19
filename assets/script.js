$(document).ready(function() {
    //all of our code goes here

    $(".add-btn").on("click", function(){
        //happens on the click
        var activity = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
       
        localStorage.setItem(time, activity);
        console.log(localStorage);

    });

    $("#current-day").text(moment().format("dddd, MMMM, Do"));

    function hourUpdater() {
        var currentHour = moment().hours()

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
           

            if(currentHour > blockHour) {
                $(this).addClass("past")
            } else if(currentHour === blockHour) {
                $(this).removeClass("past");
               $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }



        })
    }
    hourUpdater();


    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));


});


