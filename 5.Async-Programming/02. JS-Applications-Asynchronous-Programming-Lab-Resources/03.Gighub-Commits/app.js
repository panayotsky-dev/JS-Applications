function loadCommits() {
   let username = document.getElementById('username').value;
   let repository = document.getElementById('repo').value;
   
   fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError)
}

function handleResponse(response){
    if(response.ok =='false'){
    throw new Error(`Error: ${response.status} (${response.statusText})`);
}
return response.json();
}

function handleData(data){
    const list = document.getElementById('commits')
    const items = data.map(commit =>{
        const li = document.createElement('li');
        li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
        return li;
    });
    list.replaceChildren(...items);
}

function handleError(error){
    const list = document.getElementById('commits');
    list.textContent = error.message;
}