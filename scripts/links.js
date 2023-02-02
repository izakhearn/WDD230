const ActivitiesElement = document.querySelector("#activities");
const githubLink = "https://izakhearn.github.io/WDD230/";
const JsonLink = githubLink + "links.json";

async function getLinks() {
    const response = await fetch(JsonLink);
    const data = await response.json();
    keys= Object.keys(data);
    displayLinks(data,keys);
}

function displayLinks(data,keys) {
    keys.forEach(key => {
        const li = document.createElement("li");
        li.textContent = key + ": ";
        data[key].forEach(link => {
            const a = document.createElement("a");
            a.setAttribute("href", link.link);
            a.setAttribute("target", "_blank");
            a.textContent = link.name + " | ";
            li.appendChild(a);
        });
        ActivitiesElement.appendChild(li);
    });
}

getLinks();