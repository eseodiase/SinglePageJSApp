import header from "./header.js";
import home from "./home.js";
import about from "./about.js";
import gallary from "./gallary.js";
import connect from "./contact.js";
import footer from "./footer.js";

function jsapp(){

"use strict";

document.querySelector(".header").innerHTML = ( header() );
document.querySelector(".main").innerHTML = ( home() + about() + gallery() + connect() );
document.querySelector(".footer").innerHTML = ( footer () );
};

export default jsapp;
