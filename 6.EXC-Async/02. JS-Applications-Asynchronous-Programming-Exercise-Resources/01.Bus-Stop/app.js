function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
    .then(response => response.json())
    .then(data =>{
        stopName.textContent = data.name;
    })
    .catch(error => console.log('error', error));
}