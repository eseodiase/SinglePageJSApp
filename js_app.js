import header from "./components/header.js";
import home from "./components/home.js";
import about from "./components/about.js";
import gallery from "./components/gallery.js";
import connect from "./components/contact.js";
import footer from "./components/footer.js";

const app =()=>{
//components arrange as html synmatics    
    document.querySelector(".theTop").innerHTML = (header());
    document.querySelector(".main_content").innerHTML = (home() + about() + gallery() + connect());
    document.querySelector(".theBottom").innerHTML = (footer());
    
//menu list re-assigned:
const list1 = document.querySelector (".logo");
const list2 = document.querySelector (".home");
const list3 = document.querySelector (".about");
const list4 = document.querySelector (".scripts");
const list5 = document.querySelector (".connect");

//classes from components used as pages:
const hPage = document.querySelector (".homeP");
const abtPage = document.querySelector (".aboutPage");
const galPage = document.querySelector (".galleryPage");
const conPage = document.querySelector (".connectPage");
const futa = document.querySelector (".allFooter");

//Using handlers and js styling to manipulate pages:

// goto home page
list2.addEventListener("click",()=>{
   abtPage.style.display="none";
   hPage.style.display="block";
   galPage.style.display="none";
   conPage.style.display="none";
   futa.style.display="none";
});

// goto about page
list3.addEventListener("click",()=>{
   abtPage.style.display="block";
   hPage.style.display="none";
   galPage.style.display="none";
   conPage.style.display="none";
   futa.style.display="block";
});

// goto gallery page
list4.addEventListener("click",()=>{
   abtPage.style.display="none";
   hPage.style.display="none";
   galPage.style.display="block";
   conPage.style.display="none";
   futa.style.display="block";
});

// goto contact page
list5.addEventListener("click",()=>{
   abtPage.style.display="none";
   hPage.style.display="none";
   galPage.style.display="none";
   conPage.style.display="block";
   futa.style.display="block";
});

//gallery list queried:
const allD = document.querySelector ("#all");
const javaS = document.querySelector (".JavaScript");
const ES6 = document.querySelector (".ES6");
const TS = document.querySelector (".TS");

//All nav
allD.addEventListener("click",()=>{
var jsCard = document.querySelectorAll (".jsCard");
var esCard = document.querySelectorAll (".esCard");
var tsCard = document.querySelectorAll (".tsCard");
for(var i = 0; i < jsCard.length; i++){
    jsCard[i].style.display="block";
};
for(var i = 0; i < esCard.length; i++){
    esCard[i].style.display="block";
};
for(var i = 0; i < tsCard.length; i++){
    tsCard[i].style.display="block";
};
});

//JavaScript nav
javaS.addEventListener("click",()=>{
var jsCard = document.querySelectorAll (".jsCard");
var esCard = document.querySelectorAll (".esCard");
var tsCard = document.querySelectorAll (".tsCard");
for(var i = 0; i < jsCard.length; i++){
    jsCard[i].style.display="block";
};
for(var i = 0; i < esCard.length; i++){
    esCard[i].style.display="none";
};
for(var i = 0; i < tsCard.length; i++){
    tsCard[i].style.display="none";
};
});

//ECMAScript nav
ES6.addEventListener("click",()=>{
var jsCard = document.querySelectorAll (".jsCard");
var esCard = document.querySelectorAll (".esCard");
var tsCard = document.querySelectorAll (".tsCard");
for(var i = 0; i < jsCard.length; i++){
    jsCard[i].style.display="none";
};
for(var i = 0; i < esCard.length; i++){
    esCard[i].style.display="block";
};
for(var i = 0; i < tsCard.length; i++){
    tsCard[i].style.display="none";
};
});

//TypeScript nav
TS.addEventListener("click",()=>{
var jsCard = document.querySelectorAll (".jsCard");
var esCard = document.querySelectorAll (".esCard");
var tsCard = document.querySelectorAll (".tsCard");
for(var i = 0; i < jsCard.length; i++){
    jsCard[i].style.display="none";
};
for(var i = 0; i < esCard.length; i++){
    esCard[i].style.display="none";
};
for(var i = 0; i < tsCard.length; i++){
    tsCard[i].style.display="block";
};
});

}
export default app;
