//*What is AJAX?
 //*Asynchronous JavaScript and XML
    //? background loading of dynamic content/data
    //? Load data from the Web server and reder it
//? Some examples of AJAX usage:
    //? Partial page rendering
         //? Load HTML fragment + show it in a <div>
    //? JSON service
        //? Loads JSON object and display it

                 // API stands for  Application Programming Interface


        //  XMLHttpRequest - Standart API for AJAX
// <button id="load">Load Repos</button>
// <div id="res"></div>

// let button = document.querySelector('#load');
// button.addEventListener('click'function loadRepos(){
//     let url = 'https://api.github.com/users/testnakov/repos';
//     const httpRequest = new XMLHttpRequest();
//     httpRequest.addEventListener('readystatechange',function(){
//         if(httpRequest.readyState == 4 && httpRequest.status == 200){
//             document.getElementById('res').textContent = httpRequest.responseText;
//         }})
//         httpRequest.open('GET',url);
//         httpRequest.send();
// })


// Synchronous vs Asynchronous

// Synchronous означава последователност, когато се изпълнява една команда след друга

// JavaScript e еднонишков език, което означава, че изпълнява само една команда в даден момент от времето
// -.--.-.--->

// Някои езици са многонишкови, което означава, че могат да изпълняват няколко команди едновременно
// многонишков - multithreading
// -.--.-.--->
// --.-----.->
// -.----.--->