// Get the elements on the page
var heading = document.getElementById("heading");
var button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", function() {
  heading.innerHTML = "Hello World!";
});