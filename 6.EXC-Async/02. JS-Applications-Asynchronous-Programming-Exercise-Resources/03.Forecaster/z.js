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

async function getWeather(){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const inputTown = document.getElementById('location').value;
    
        const response = await fetch(url);
        const data = await response.json();
        debugger
        const info = data.find(x => x.name === inputTown);
    
        createForecaster(info.code)
        debugger
        if(!info){
            return
        }
         
}

async function createForecaster(code){
    const currentSection = document.getElementById('current')
    const upcomingSection = document.getElementById('upcoming')
    
   

    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const threeDays =`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
    //TODO use Promise.all
    try{
        const responseToday = await fetch(urlToday);
        const dataToday = await responseToday.json();
    
        const responseThreeDays = await fetch(threeDays);
        const dataThreeDays = await responseThreeDays.json();
    
        
        const todayHTML = createToday(dataToday);
        currentSection.appendChild(todayHTML);
    
        const upcomingHTMLTemp = createUpcoming(dataThreeDays)
        upcomingSection.appendChild(upcomingHTMLTemp);
    } catch(e){
        forecastContainer.textContent = `Error: ${e}`;
        forecastContainer.style.display = "block";
    }
    

}
function createUpcoming(data){
    const container = document.createElement('div');
    container.classList.add('forecast-info');

    data.forecast.forEach(data =>{
        const spanHolder = generateSpan(data);
        container.appendChild(spanHolder);
    })

    return container;
}
function generateSpan(data){
    const {condition,high,low} = data;
    const spanHolder = document.createElement('span');
    spanHolder.classList.add('upcoming');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('symbol');
    iconSpan.innerHTML = enumIcon[data.condition];

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.textContent = `${low}${enumIcon.Degrees}/${high}${enumIcon.Degrees}`;

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('forecast-data');
    conditionSpan.textContent = condition;

    spanHolder.appendChild(iconSpan);
    spanHolder.appendChild(tempSpan);
    spanHolder.appendChild(conditionSpan);

    return spanHolder;

}

function createToday(data){
    const {condition,high,low} = data.forecast;
    forecastContainer = document.getElementById('forecast');
    forecastContainer.style.display = "block";
    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('forecasts');


    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition');

    const conditionSymbol = document.createElement('span');
    conditionSymbol.classList.add('condition','symbol');
    conditionSymbol.innerHTML = enumIcon[condition];

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.textContent = `${low}${enumIcon.Degrees}/${high}${enumIcon.Degrees}`;
    const conditionTxtSpan = document.createElement('span');
    conditionTxtSpan.classList.add('forecast-data');
    conditionTxtSpan.textContent = condition;

    conditionSpan.appendChild(nameSpan)
    conditionSpan.appendChild(tempSpan)
    conditionSpan.appendChild(conditionTxtSpan)

    conditionContainer.appendChild(conditionSymbol)
    conditionContainer.appendChild(conditionSpan)

    return conditionContainer;


}

attachEvents();