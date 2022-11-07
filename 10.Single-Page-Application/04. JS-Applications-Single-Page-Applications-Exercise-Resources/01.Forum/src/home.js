import {showDetails} from './details.js'

const section = document.getElementById('homeView')
const main = document.querySelector('main')[0];
const form = document.querySelector('#homeView form');
form.addEventListener('submit',onSubmit);

section.remove();
export function showHome(){
    console.log("showHome")
    main.replaceChildren(section);
    createPost({topiName,username,postText})p
    
}
function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);
    const {topicName,username,postText} = Object.fromEntries(formData);
    console.log(topicName,username,postText);
}

async function createPost(body){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
    const response = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return data;
}
showDetails();