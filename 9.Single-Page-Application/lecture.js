
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
