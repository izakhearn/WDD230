// Get form from the section called contact
var form = document.forms["contact"];
var table = document.getElementById("formTable");


// Add Event Listener to the form submit button

form.addEventListener("submit", function (event) {
  // Prevent the form from submitting if the usernames dont match
  if (
    form.elements["username"].value != form.elements["confirmUsername"].value
  ) {
    alert("Usernames do not match");
    event.preventDefault();
  } else {
    // If the usernames match, Display the form values in the table below the form
    var name = form.elements["fname"].value;
    var email = form.elements["email"].value;
    var rating = form.elements["rating"].value;
    var username = form.elements["username"].value;

    document.getElementById("fname-tbl").innerHTML = name;
    document.getElementById("email-tbl").innerHTML = email;
    document.getElementById("rating-tbl").innerHTML = rating;
    document.getElementById("username-tbl").innerHTML = username;

    if (rating < 6) {
      document.getElementById("ratingRow").classList.add("red-rating");
    }
    //Display Table removing the hidden class
    table.classList.remove("hidden");
    

  }
  event.preventDefault();
});
