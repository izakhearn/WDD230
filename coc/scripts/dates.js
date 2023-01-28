var curYear = new Date().getFullYear();

var lastModified = document.lastModified;

document.getElementById("copyYear").innerHTML = curYear;
document.getElementById("lastModified").innerHTML = "Last Modified: "+lastModified;

try {
    var form = document.getElementById("join");

    // Add event listener to form
    form.addEventListener("submit", function (event) {
        var time = new Date().toLocaleString();
        document.getElementById("time").value = time;

    });
} catch (e) {
}