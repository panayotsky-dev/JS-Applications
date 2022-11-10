function attachEvents() {
    let btn = document.getElementById('submit');
    let location = document.getElementById('location');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    
    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };
    
    btn.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => res.json())
            .then(data => {
                let code = data.find(x => x.name === location.value);
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then(res => res.json())
                    .then(data => {
                        current.innerHTML = `<div class="label">Current conditions</div>
                        <span class="condition symbol">${symbols[data.forecast.condition]}</span>
                        <span class="condition">
                            <span class="forecast-data">${data.name}</span>
                            <span class="forecast-data">${data.forecast.low}${symbols.Degrees}/${data.forecast.high}${symbols.Degrees}</span>
                            <span class="forecast-data">${data.forecast.condition}</span>
                        </span>`;
                    });
    
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then(res => res.json())
                    .then(data => {
                        upcoming.innerHTML = `<div class="label">Three-day forecast</div>`;
                        data.forecast.forEach(x => {
                            upcoming.innerHTML += `<span class="upcoming">
                                <span class="symbol">${symbols[x.condition]}</span>
                                <span class="forecast-data">${x.low}${symbols.Degrees}/${x.high}${symbols.Degrees}</span>
                                <span class="forecast-data">${x.condition}</span>
                            </span>`;
                        });
                    });
            });
    });
    
}
attachEvents();