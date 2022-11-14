function loadRepos() {
	const username = document.getElementById('username').value;

	 fetch(`https://api.github.com/users/${username}/repos`)
	.then(handleResponse)
	.then(handleData)
	.catch(handleError)
}

function handleResponse(response){
	
	if(response.ok == 'false'){
		throw new Error(`Error: ${response.status} (${response.statusText})`);
		
	}
	return response.json();
}

function handleData(data){
	const list = document.getElementById('repos');
	const items = data.map(repo =>{
		
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
			list.appendChild(li);
		
			return li;
	});
	list.replaceChildren(...items);

}

function handleError(error){
	// const list = document.getElementById('repos');
	// list.textContent = error.message;
}
class rocketInfo{
	constructor(name, fuel, type){
		this.name = name;
		this.fuel = fuel;
		this.type = type;
	}
}
//add new rocket with constructor
const rocket1 = new rocketInfo('Falcon 1', 'Liquid Fuel', 'Merlin 1D');
const rocket2 = new rocketInfo('Falcon 9', 'Liquid Fuel', 'Merlin 1D+Vacuum');
const rocket3 = new rocketInfo('Falcon Heavy', 'Liquid Fuel', 'Merlin 1D+Vacuum');
const rocket4 = new rocketInfo('Starship', 'Liquid Fuel', 'Raptor');

