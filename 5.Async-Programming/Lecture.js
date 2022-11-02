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
//Регистрираме EventHandler-i и тяхното управление.

// Някои езици са многонишкови, което означава, че могат да изпълняват няколко команди едновременно
// многонишков - multithreading
// -.--.-.--->
// --.-----.->
// -.----.--->

//*Asynchronous Programming in JS
    //? Structured using callback functions
    //? in current versions of JS there are:
        // Callbacks
        // Promises
        // Async Functions
    //?Not the same thing as concurrent or multi-threaded
    //? JS code is generally single-threaded!

//* Async programming - example
 // callback е функцията която задаваме да бъде изпълнена по-късно / продължи изпълнението на нашият код
    
 
 
    // console.log("Hello.");
    // setTimeout(function (){
    //     console.log("Goodbye!");},2000)
    // console.log("Hello again.");

//*What is Promise ?

    //A promise is an asynchronous action that may complete at some point and produce a value
    
    //?States
        //Pending - operation still running (unfinished)
        //Fulfilled - operation finished(the result is available)
        //Failed - operation filed(an error is present)
    //Promises use the Promise class
    //  new Promise(executor);


    //? Promise.then
    // function logFetch(url){
    //     return fetch(url)
    //     .then(response => {
    //         return response.text()
    //     })
    //     .then(text => {
    //         console.log(text);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }

    //? Async/Await
    // async function logFetch(url){
    //     try {
    //         const response = 
    //         await fetch(url);
    //         console.log(
    //             await response.text()
    //         );
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    //
