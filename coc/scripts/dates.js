var curYear = new Date().getFullYear();

var lastModified = document.lastModified;

document.getElementById("copyYear").innerHTML = curYear;
document.getElementById("lastModified").innerHTML = "Last Modified: "+lastModified;