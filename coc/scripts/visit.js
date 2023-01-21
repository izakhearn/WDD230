// Store last visit date of user in local storage

//Get Element by ID
var lastVisitElement = document.getElementById("last-date");
var daysBetween = document.getElementById("days-between");

// Get current date
var today = new Date();

// Get last visit date from local storage
var lastVisit = localStorage.getItem("lastVisit") || today;

// If last visit date is not set, set it to today
if (lastVisit == null) {
    localStorage.setItem("lastVisit", today);
    }
// If last visit date is set, show it
else {
    DisplayOnPage(lastVisitElement, lastVisit,daysBetween);
    }

// Set last visit date to today
localStorage.setItem("lastVisit", today);

function calculateDateBetween(today, lastVisit) {
    var lastVisitDate = new Date(lastVisit);
    var diff = today.getTime() - lastVisitDate.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}

function DisplayOnPage(lastVisitElement,lastVisit, daysBetween) {
    var lastVisitDate = new Date(lastVisit);
    var lastVisitDateFormatted = lastVisitDate.toDateString();
    lastVisitElement.innerHTML = lastVisitDateFormatted;
    daysBetween.innerHTML = calculateDateBetween(today, lastVisit);

}
