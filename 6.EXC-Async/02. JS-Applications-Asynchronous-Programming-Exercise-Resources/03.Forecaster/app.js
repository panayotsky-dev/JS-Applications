const enumIcon = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
    'Degrees': '°'
};
const forecastContainer = document.getElementById('forecast');
function attachEvents() {
document.getElementById('submit').addEventListener('click', getWeather);   
 }

function getWeather(){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const inputTown = document.getElementById('location').value;
    fetch(url)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError)    

    function handleResponse(response){
        return response.json()
        
    }
    function handleData(data){
        const info = data.find(x => x.name === inputTown);        
        if(!info){
            throw new Error()
        }
        const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${info.code}`
    const urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${info.code}`
    Promise.all([fetch(urlToday), fetch(urlThreeDays)])
    .then(([today, threeDays]) => Promise.all([today.json(), threeDays.json()]))
    .then(([today, threeDays]) => {
        createForeCasterToday(today)
        createForeCasterUpcoming(threeDays)
        debugger
    })
    }
    function handleError(error){
        forecastContainer.textContent = `Error`;
        forecastContainer.style.display = "block";        
       
                
    }
    function createForeCasterToday(today){
        const currentSection = document.getElementById('current')
        currentSection.innerHTML = `<div class="label">Current conditions</div>
        <span class="condition symbol">${enumIcon[today.forecast.condition]}</span>
        <span class="condition">
            <span class="forecast-data">${today.name}</span>
            <span class="forecast-data">${today.forecast.low}${enumIcon.Degrees}/${today.forecast.high}${enumIcon.Degrees}</span>
            <span class="forecast-data">${today.forecast.condition}</span></span>`
        forecastContainer.style.display  = "block"
      
    }
    function createForeCasterUpcoming(threeDays){
        const upcomingSection = document.getElementById('upcoming')
        upcomingSection.innerHTML = `<div class="label">Three-day forecast</div>`
        threeDays.forecast.forEach(x => {
            const span = document.createElement('span')
            span.classList.add('upcoming')
            span.innerHTML = `<span class="symbol">${enumIcon[x.condition]}</span>
            <span class="forecast-data">${x.low}${enumIcon.Degrees}/${x.high}${enumIcon.Degrees}</span>
            <span class="forecast-data">${x.condition}</span>`
            upcomingSection.appendChild(span)
        })

    }
}

attachEvents();