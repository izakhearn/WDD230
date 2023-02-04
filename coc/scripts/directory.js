const CompaniesElement = document.querySelector("#companies");
const memberUrl = "data/members.json";
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getCompanies() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    keys = Object.keys(data);
    displayCompanies(data.members);
    }

getCompanies();

    function displayCompanies(data) {
        const activeBtn = document.querySelector(".active");
        if (activeBtn.id === "gridBtn") {
            CompaniesElement.classList.remove("list");
            CompaniesElement.classList.add("grid");
            // For Each Name in the data generate a card with the name , address , website, number and member level
            data.forEach((name) => {
                const company = document.createElement("div");
                company.classList.add("company-card");
                company.innerHTML = `
                <div class="company-logo">
                    <img src="images/${name.logo}" alt="${name.name}">
                </div>
                <div class="company-info">
                    <h3>${name.name}</h3>
                    <p>${name.address}</p>
                    <a href=https://${name.website}>${name.website}</a>
                    <p>${name.phone}</p>
                    <p>${name.membership}</p>
                </div>
                `;
                CompaniesElement.appendChild(company);
            });

        } else {
        CompaniesElement.classList.add("list");
        CompaniesElement.classList.remove("grid");
        const list = document.createElement("div"); 
        list.classList.add("company-list"); 
        
        //For Each name Generate a div with the name , address , website, number and member level but no logo and no card
        data.forEach((name) => {
            const company = document.createElement("section");
            company.classList.add("company-info");
           company.innerHTML = `
                <h3>${name.name}</h3>
                <p>${name.address}</p>
                <a href=https://${name.website}>${name.website}</a>
                <p>${name.phone}</p>
                <p>${name.membership}</p>
            `;
            CompaniesElement.appendChild(company);
        }
        );
    }
    }

    // Event Listeners
    gridBtn.addEventListener("click", () => {
        CompaniesElement.innerHTML = "";
        listBtn.classList.remove("active");
        gridBtn.classList.add("active");
        getCompanies();
    });

    listBtn.addEventListener("click", () => {
        CompaniesElement.innerHTML = "";
        gridBtn.classList.remove("active");
        listBtn.classList.add("active");
        getCompanies();
    });