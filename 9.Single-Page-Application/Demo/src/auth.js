import { showCatalogView } from "./catalog.js";

export function chekUserNav(){
    const username = sessionStorage.getItem('username');
    if(username){
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'block');
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}`;
    }else{
        [...document.querySelectorAll('.guest')].forEach(i=> i.style.display = 'inline');
        [...document.querySelectorAll('.user')].forEach(i=> i.style.display = 'none');

    }
}

document.getElementById('logout-link').addEventListener('click', onLogout);

async function onLogout(event){
    event.preventDefault();

    const token = sessionStorage.getItem('accessToken');
    try{
    const response =await fetch('http://localhost:3030/users/logout',{
        method: 'get',
        headers: {'X-Authorization': token}
});

if(response.ok != true){
    const error = await response.json();
    throw new Error(error.message);
}
} catch(err){
 alert(err.message);
}finally{
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('accessToken');
    chekUserNav();
    showCatalogView()
}
}