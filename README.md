# blackout-poetry

Can be done later:

- find better inspiration images - once saved, should load new show the same article? -
- see if we can set up node for download

Fixed:

- make newspaper smaller
- make saved newspaper style better
- fix stepper to show transparent bg on small screens and have stepper btns wrap around
- add nicer fonts
- scroll saved newspaper on mobile
- phone img cutt off
- learn more media queries
- no it should not remove it from loadNewArticle, should be added back in load new if they remove the saved article
- remove author when poetry is complete
- make css files modules => css modules create-react-app can be done easily but it would take some time to manually change classes - https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
- cross browser css support check
- fix instructions/grammer/spelling

--------

html,
body,
#root {
  /* width: 100vw;
  height: 100vh; */
  background-image: url("./img/lm.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  /* overflow: auto; */
  box-sizing: border-box;
  font-family: "Inria Serif", serif;
  font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
}
.intro{
  /* background-color: black; */
  color: black;
  width: 80%;
  padding: 5%;
  margin:2%;
  background-image: url("./img/paper-ss.png");
  background-repeat: no-repeat;
  background-size: cover;
   
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  height: 100vh; */
  /* overflow: auto; */
}

.newspaper-container {
  background-image: url("./img/paper-o.png");
  background-size: cover;
  /* margin-bottom: 3px !important; */
  /* margin-top: 0.5% !important; */
  /* width: 100%; */
  padding: 5% 5% 1% 5%;
  /* overflow: auto; */
  border: purple solid 5px;
}

a{
  color: #237a57 !important;
}
.learnmore-button {
  background: linear-gradient(
     to right,
     #093028,
     #237a57
   );  
   color: whitesmoke !important;
   font-family: "Inria Serif", serif !important;
 
 }

.loader {
  display: flex;
  justify-content: center;
}

.bg-showing-hl {
  /* height: 100vh;
  margin-top: 10% !important;
  padding: 0% 3%; */
}

.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke !important;
  min-height: 6vh;
  background: linear-gradient(
    to right,
    #093028,
    #237a57
  ); 
  width: 100%;
}

/* width */
::-webkit-scrollbar {
  width: .7%;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #093028;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}


/* ANYTING BELOW A TABLET */
@media only screen and (max-width: 768px) {
 .bg-showing-vl {
   display: none;
 }
 .bg-showing-hl {
   display: none;
 }
 .newspaper-container {
   /* margin-top: 0 !important; */
   width: 100%;
   background:none;
   background-color: #D6D6D6;
   /* border-radius: 3%; */
   /* min-height: 100vh; */
   /* overflow: auto !important; */
   /* background-color: #e6e6e6; */
 }
 #root{
   /* overflow: auto; */
 }
 .learnmore-app-vl {
   font-size: 5px !important;
  }

 .learnmore-app-hl {
   font-size: 5px !important;
  }
}

/* portrait */
@media screen and (orientation:portrait) {
  /* portrait-specific styles */
  /* html,
body,
#root{width: 100vw;
  height: 100vh;
border: red solid 1px;} */
  
}
/* landscape */
@media screen and (orientation:landscape) {
  /* landscape-specific styles */
  /* html,
body,
#root{width: 100vw;
    height: 100vh;
  border: solid 2px green;} */
}


---------
