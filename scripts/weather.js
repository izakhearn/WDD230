const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#weatherDesc');
const currentTemp = document.querySelector('#weatherTemp');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.1086&lon=28.2377&appid=976d369f22e50f43a6d7598bae4b1b9c&units=imperial'; 

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}