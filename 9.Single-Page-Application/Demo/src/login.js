//register event listeners to navigation
//switch view
//handle form submit
//send login information to REST service
//store autorization token

import { chekUserNav as checkUserNav } from "./auth";
import { showCatalogView } from "./catalog";

document.getElementById('login-link').addEventListener('click', showLoginView);
document.getElementById('login-form').addEventListener('submit', onLogin);

export function showLoginView(){
    [...document.querySelectorAll('section')].forEach( s => s.style.display = 'none');
    document.getElementById('login-view').style.display='block';

}

async function onLogin(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const {email,password} = Object.fromEntries(formData);


    try{
        await login(email,password);
        checkUserNav();
        showCatalogView()
    }catch(err){
        alert(err.message); 
    }
  
}
async function login (email,password){
    
    const response = await fetch('http://localhost:3030/users/login',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email,password})
});
    if(response.ok != true){
        const error = await response.json();
        throw new Error(error.message);
    }
    const data = await response.json();

    sessionStorage.setItem('userId',data._id);
    sessionStorage.setItem('username',data.username);
    sessionStorage.setItem('accessToken',data.accessToken);

    
   
}