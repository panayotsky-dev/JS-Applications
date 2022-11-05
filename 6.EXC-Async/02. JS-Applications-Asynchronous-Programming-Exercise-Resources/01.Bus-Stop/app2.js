function getInfo() {
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