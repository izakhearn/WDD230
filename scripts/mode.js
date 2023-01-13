const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        main.querySelector("h2").style.color = "#fff";
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor= "rgb(0, 64, 85)";
            cards[i].querySelector("h3").style.color = "black";
            cards[i].querySelector("h3").style.backgroundColor = "rgb(211, 212, 185)";
            let links = cards[i].querySelectorAll("a");
            for (let j = 0; j < links.length; j++) {
                links[j].style.color = "yellow";
            }
        }
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        main.querySelector("h2").style.color = "#000";
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor= "rgb(211, 212, 185)";
            cards[i].querySelector("h3").style.color = "white";
            cards[i].querySelector("h3").style.backgroundColor = "rgb(0, 64, 85)";
            let links = cards[i].querySelectorAll("a");
            for (let j = 0; j < links.length; j++) {
                links[j].style.color = "blue";
            }
        }

		modeButton.textContent = "☑️";
	}
});