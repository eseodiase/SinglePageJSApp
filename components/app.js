import header from "./header.js";
import home from "./home.js";
import about from "./about.js";
import gallary from "./gallary.js";
import connect from "./contact.js";
import footer from "./footer.js";

function jsapp(){

"use strict";

document.querySelector(".header").innerHTML = ( header() );
document.querySelector(".main").innerHTML = ( home() + about() + gallary() + connect() );
document.querySelector(".footer").innerHTML = ( footer () );

//menu list re-assigned:
const list1 = document.querySelector (".logo");
const list2 = document.querySelector (".home");
const list3 = document.querySelector (".about");
const list4 = document.querySelector (".scripts");
const list5 = document.querySelector (".connect");

//web pages queried out of arrow functions and re-assigned:
const hPage = document.querySelector (".homeP");
const abtPage = document.querySelector (".aboutPage");
const galPage = document.querySelector (".gallaryPage");
const conPage = document.querySelector (".connectPage");
const futa = document.querySelector (".allFooter");

//Using handlers and js styling to manipulate pages:
list2.addEventListener("click",()=>{
   abtPage.style.display="none";
   hPage.style.display="block";
   galPage.style.display="none";
   conPage.style.display="none";
   futa.style.display="none";
});

list3.addEventListener("click",()=>{
   abtPage.style.display="block";
   hPage.style.display="none";
   galPage.style.display="none";
   conPage.style.display="none";
   futa.style.display="block";
});

list4.addEventListener("click",()=>{
   abtPage.style.display="none";
   hPage.style.display="none";
   galPage.style.display="block";
   conPage.style.display="none";
   futa.style.display="block";
});

list5.addEventListener("click",()=>{
   abtPage.style.display="none";
   hPage.style.display="none";
   galPage.style.display="none";
   conPage.style.display="block";
   futa.style.display="block";
});

//gallary list queried:
const allD = document.querySelector ("#all");
const javaS = document.querySelector (".JavaScript");
const ES6 = document.querySelector (".ES6");
const TS = document.querySelector (".TS");

//cards card queried and styled:
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

};

export default jsapp;
