function getInfo(){
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(response => response.json())
        .then(data => {
            stopName.textContent = data.name;
            buses.innerHTML = Object.entries(data.buses)
                .map(([busId, time]) => `<li>Bus ${busId} arrives in ${time} minutes</li>`)
                .join('');
        })
        .catch(() => {
            stopName.textContent = 'Error';
            buses.innerHTML = '';
        });
}


    // Variant 2
// async function getInfo() {
//     const stopId = document.getElementById('stopId').value;
//     const stopName = document.getElementById('stopName');
//     const busList = document.getElementById('buses');
//     const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
//     busList.innerHTML = '';
//     try {
//     const response = await fetch(url);
//     const data = await response.json()
//     stopName.textContent = data.name;
//     Object.entries(data.buses).forEach(([busNumber, timeToArrive]) => {
//         const li = document.createElement('li');
//         li.textContent = `Bus ${busNumber} arrives in ${timeToArrive} minutes`;
//         busList.appendChild(li);
//     })
//     } catch (error) {
//         stopName.textContent = 'Error';}
//     }