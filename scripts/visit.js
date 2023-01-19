let visit = document.querySelector("#visitCount");
var count = getVisitCount();
incrementVisitCount(count)
displayVisitCount(count)



function getVisitCount() {
    let temp = localStorage.getItem("visitCount");
    if (temp == null) {
        return 1;
    }
    return parseInt(temp);
}

function setVisitCount(count) {
    localStorage.setItem("visitCount", count);
}

function incrementVisitCount(count) {
    count++;
    setVisitCount(count);
}

function displayVisitCount(count) {
    visit.innerHTML = "Visit Count: "+count;
}
