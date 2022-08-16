import header from "./header.js";
import home from "./home.js";

function jsapp(){

"use strict";

document.querySelector(".header").innerHTML = ( header() );
document.querySelector(".main").innerHTML = ( home() );
};

export default jsapp;
