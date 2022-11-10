
// 1.Web Applications
// 2.JavaScript Modules
// 3.Spa Approaches
// 4.Live Demo


//* Web Application Concepts
// Site vs Application. Multi-and Single-Page Applications
  //Sites and Applications
  //?A website is a collection of interlinked web pages
    //?It hosts content,that is primarily meant to be consumed
  //?A web application is a software,accessible from a web browser
    //?They are interactive and have rich functionality
    //?Wep apps can be MPA and SPA(Single Page Applications) 
//*Multi-Page Applications
   //?Reloads the entire page
   //?Displays the new page when a user interacts with the web app
   // MPA + Performs well on the search engine  
   // +provides a visual map of the web app to the user
   //MPA - copmaratively compelx development (infrastructure)
   // - coupled backend and frontend
//*Single-Page Applications
    //?A next evolution from multi-page website
    //?WEB apps that load a single HTML page/file
    //?SPA use AJAX and HTML5 to create fluid and responsive web apps
    //?No constant page reloads
  //*SPA Pros and Cons
    //? + loads all scripts only once/meintaint state across mp
    //? + browser history can be used / better UX
    //? - performs poor on the search engine(SEO bad)
        //? - server-side rendering helps
    //? - provide single sharing link
    //? - less secure
//* JavaScript Modules
    //Definition and usage
  //?Modules // ES6 Modules
   //Да затвори определена функционалност в модул.
   //?A set of related functionality
     // Resolve naming collisions
     //Expose only public behavior
     // Not populate the global scope
   //?Loaded by setting the type attribute of a script:
    //?<script src="app.js" type="module"></script>
    //когато добавим type модул конвертираме файла в модул (преди това е просто файл)
    //?Lite-server or similar
    //?<script src="app.js" type="module" defer></script>

//*Module Best practices
  //?Split code in modules by related functionality
    //?Aim for high cohesion
  //?Only export what is necessary for consumers
  //?Prefer named exports over defaults
  //?Do not perform operations on export

  //*SPA Implemention REQUIREMENTS
    //?The applcation has multiple views
    //? All views share a common state
    //?Modular code is used
    //?The page is not reloaded when changing views
    //?Content is loaded via AJAX

  //*Feasibility Disclaimer
    //?Contemporary single-page applications employ concepts like templates and routing
      //?Usually with a front-end framework


      
  //*Loading and displaying content
    //?se the Fetch API to bring new content from the server
    //?Modify or create new HTML elements to display content

    // async function getArticles(){
    //   const response = await fetch(apiURL);
    //   const articles = await response.json();
    //   articles.forEach(displayArticle);
    // }
    // function displayArticle(article){
      //?Modify Dom tree
    // }
  //*Group DOM Changes
    //?Manipulating the dom tree is a performance-intensive process
    //?When multiple elements must be created and populated,place them in a DocumentFragment // Group multiple elements in a DocumentFragment

    // const fragment = document.createDocumentFragment()
          //Create and populate new elements
    // fragment.appendChild(/*element reference*/);
    // document.body.appendChild(fragment); // add to body

    //*Слагането на съдържанието на фрагмента от документа не го копира ,а го премества!!!

    //*SINGLE Page Application оперира без да презарежда цялата страница

    //* Асинхронните функции хвърляйки грешка не могат да бъдат уловени от синхронни - трябва да има await!
                          //   try{
                          //     await login(email,password);
                          // }catch(err){
                          //     alert(err.message); }