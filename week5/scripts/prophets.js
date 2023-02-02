const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");
const btnAll = document.querySelector("#all");
const btnUtah = document.querySelector("#utah");
const btnOutside = document.querySelector("#outside");
const btnLived95 = document.querySelector("#lived95");
const btnChildren = document.querySelector("#children");
const btnServed15 = document.querySelector("#served15");

// Fetch the JSON data using async and await
async function getProphetsData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data);
  displayProphets(data.prophets);
}

getProphetsData();

async function getProphetsDataFilter() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data);
  clearCards();
  data.prophets.forEach((prophet) => {
    prophet.age = calculateAge(prophet);
  });
  return data;
}

// Calculate the age of the prophet
const calculateAge = (prophet) => {
  const birth = new Date(prophet.birthdate);
  var death;
  if (prophet.death === null) {
    death = new Date();
  } else {
    death = new Date(prophet.death);
  }
  const age = death.getFullYear() - birth.getFullYear();
  return age;
};

// Display the single prophet in cards
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let dateOfBirth = document.createElement("p");
    let placeOfBirth = document.createElement("p");
    let portrait = document.createElement("img");

    // Set the text content of the elements
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "90%");
    portrait.setAttribute("height", "75%");

    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Append the elements to the card
    card.appendChild(fullName);
    card.appendChild(dateOfBirth);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    // Append the card to the cards div
    cards.appendChild(card);
  });
};

//Clear the cards
const clearCards = () => {
  cards.innerHTML = "";
};

// Filter the prophets by born in utah
const filterByUtah = (prophets) => {
  const prophetsUtah = prophets.filter((prophet) => {
    return prophet.birthplace === "Utah";
  });
  displayProphets(prophetsUtah);
};

// Filter the prophets by not born in utah
const filterByOutside = (prophets) => {
  const prophetsOutside = prophets.filter((prophet) => {
    return prophet.birthplace === "England";
  });
  displayProphets(prophetsOutside);
};

// Filter the prophets by lived 95 years or more
const filterByLived95 = (prophets) => {
  const prophetsLived95 = prophets.filter((prophet) => {
    return prophet.age >= 95;
  });
  displayProphets(prophetsLived95);
};

// Filter the prophets by had 10 or more children
const filterByChildren = (prophets) => {
  const prophetsChildren = prophets.filter((prophet) => {
    return prophet.numofchildren >= 10;
  });
  displayProphets(prophetsChildren);
};

// Filter the prophets by served 15 years or more
const filterByServed15 = (prophets) => {
  const prophetsServed15 = prophets.filter((prophet) => {
    return prophet.length >= 15;
  });
  displayProphets(prophetsServed15);
};

// Add event listeners to the buttons
btnAll.addEventListener("click", () => {
  clearCards();
  getProphetsData();
});

btnUtah.addEventListener("click", () => {
  getProphetsDataFilter().then((data) => {
    filterByUtah(data.prophets);
  });
});

btnOutside.addEventListener("click", () => {
  getProphetsDataFilter().then((data) => {
    filterByOutside(data.prophets);
  });
});

btnLived95.addEventListener("click", () => {
  getProphetsDataFilter().then((data) => {
    filterByLived95(data.prophets);
  });
});

btnChildren.addEventListener("click", () => {
  getProphetsDataFilter().then((data) => {
    filterByChildren(data.prophets);
  });
});

btnServed15.addEventListener("click", () => {
  getProphetsDataFilter().then((data) => {
    filterByServed15(data.prophets);
  });
});
