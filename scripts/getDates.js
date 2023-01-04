// Get Current Year
var currentYear = new Date().getFullYear();

// Set element with id year to current year
document.getElementById("year").innerHTML = currentYear;


// Get Last Modified Date
var lastModified = document.lastModified;

// Set element with id lastModified to last modified date
document.getElementById("lastModified").innerHTML = 'Last Modification: '+lastModified;