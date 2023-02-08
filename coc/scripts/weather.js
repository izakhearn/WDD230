const weather = document.querySelector('#weather');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&appid=976d369f22e50f43a6d7598bae4b1b9c&units=imperial';
const forecast_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.7557&lon=6.6394&cnt=3&appid=976d369f22e50f43a6d7598bae4b1b9c&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const forecast_response = await fetch(forecast_url);
        if (response.ok && forecast_response.ok) {
            const data = await response.json();
            const forecast = await forecast_response.json();
            displayResults(data,forecast);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data,forecast) {
    //Create Table with current weather
    let tableCurr = document.createElement('table');
    let tableHeadCurr = document.createElement('thead');
    let tableBodyCurr = document.createElement('tbody');
    let tableRowCurr = document.createElement('tr');
    let tableHeadDataCurr = document.createElement('th');
    tableHeadDataCurr.textContent = 'Current Weather';
    tableHeadDataCurr.setAttribute('colspan', '3');
    tableHeadCurr.appendChild(tableHeadDataCurr);
    tableCurr.appendChild(tableHeadCurr);

    //Create 3 columns for current weather
    var tableDataCurr = document.createElement('td');
    var icon = document.createElement('img');
    var iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    var desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    tableDataCurr.appendChild(icon);
    tableRowCurr.appendChild(tableDataCurr);

    tableDataCurr = document.createElement('td');
    tableDataCurr.innerHTML = `${data.main.temp}&deg;F`;
    tableRowCurr.appendChild(tableDataCurr);

    tableDataCurr = document.createElement('td');
    tableDataCurr.innerHTML = `${data.weather[0].description}`;
    tableRowCurr.appendChild(tableDataCurr);

    
    tableBodyCurr.appendChild(tableRowCurr);
    tableCurr.appendChild(tableBodyCurr);



    //Create Table with 3 day forecast
    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');
    let tableHeadData = document.createElement('th');
    tableHeadData.textContent = '3 Day Forecast';
    tableHeadData.setAttribute('colspan', '3');
    tableHead.appendChild(tableHeadData);
    table.appendChild(tableHead);

    for (let i = 0; i < 3; i++) {
        let tableData = document.createElement('td');
        let icon = document.createElement('img');
        let iconsrc = `https://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
        let desc = forecast.list[i].weather[0].description;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', desc);
        tableData.appendChild(icon);
        tableData.innerHTML += `<br>${forecast.list[i].main.temp}&deg;F`;
        tableRow.appendChild(tableData);
    }
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
    table.setAttribute('id', 'forecast');
    tableCurr.setAttribute('id', 'current');
    weather.appendChild(tableCurr);
    weather.appendChild(table);

}