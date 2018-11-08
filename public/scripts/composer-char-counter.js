// 140 - $(this).val().length gets the remainder of characters each time
// a key is hit within the form.
// $(".counter").text(remainder) updates the counter text ("140")
// each time .keyup() is triggered
function updateCharacterCounter(event) {
  const remainder = 140 - $(this).val().length;
  $(this).siblings('.counter').text(remainder);
  // can also be written like: $('.counter').text(remainder); but using $(this).siblings('.counter') is more efficient
  // conditional statement checks if counter number is
  // less than 140 and if so changes its color to red
  if (remainder < 0) {
    $(this).siblings('.counter').css("color", "#FF0000");
  } else {
  // when backspacing, if counter goes back to MORE
  // than 140, change colour of counter back to black
    $(this).siblings('.counter').css("color", "#000000");
  }
};

// $(".tweet-form").keyup() is event listener that fires everytime
// a key is pressed and subtracts if deleted
$(document).ready(function() {
  $(".tweet-form").keyup(updateCharacterCounter);
});