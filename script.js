(function () {

  // listening for click on save button and saving them to local storage
(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings("time-block").vl();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

// comparing each time slot hour to the current time

(".time-div").each(function() {
  var timeDiv = $(this).attr("id").split("-")[1];

  if (currentHour ==timeDiv) {
    (this).addClass("present");
    (this).children(".description").addClass("white-text");
  }
  else if (currentHour < timeDiv) {
    (this).removeClass("present");
    (this).addClass("future");
  }

  else if (currentHour > timeDiv) {
    (this).removeClass("future");
    (this).addClass("past ");
  }
});

// Setting items from local storage to corresponding location
("#hour-9 .time-block").val(localStorage.getItem("9"));
("#hour-9 .time-block").val(localStorage.getItem("10"));
("#hour-9 .time-block").val(localStorage.getItem("11"));
("#hour-9 .time-block").val(localStorage.getItem("12"));
("#hour-9 .time-block").val(localStorage.getItem("13"));
("#hour-9 .time-block").val(localStorage.getItem("14"));
("#hour-9 .time-block").val(localStorage.getItem("15"));
("#hour-9 .time-block").val(localStorage.getItem("16"));
("#hour-9 .time-block").val(localStorage.getItem("17"));


// Current Date and time
var current = new Date();
var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);
});

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();




























