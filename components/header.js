const header = () => {
"use strict";
const allObjectsUsedOnHeader = {

//Navigation List
l1: "JS App",
l2: "Home",
l3: "About",
l4: "Scripts",
l5: "Connect",
l6: "Ese Odiase",

//developer's url:
url: "http://www.eseodiase.website/",

//icon:
bar: "&#9552;",

//className:
mobile: "menu_bar",

};
const all = allObjectsUsedOnHeader;

    return `<section class="header">
      <span class="title">JS App</span>
    <nav>
    <div class=${all.mobile}>${all.bar}</div>
  
    <ul>
    <li class="logo">${all.l1}</li>
<li class="home">
<i class="fa fa-home"></i>
<a href="#">${all.l2}</a>
</li>

<li class="about">
<i class="fa fa-group"></i>
<a href="#">${all.l3}</a>
</li>

<li class="scripts">
<i class="fa fa-code"></i>
<a href="#">${all.l4}</a>
</li>

<li class="connect">
<i class="fa fa-envelope"></i>
<a href="#">${all.l5}</a>
</li>

     <li class="dev">
    <img src="https://ipfs.fleek.co/ipfs/bafybeiduikxoxgjejuihp2jyzdgjtu5ywepzygeld5io4og6nc3v4cpic4" alt="Developer" width="50" height="50" style="border-radius:50%; background:#26292e;"/>
    <br/>
    Developed by
    <a href=${all.url}>${all.l6}</a>
    </li>  
    </ul>
    
    </nav>
    
 <span class="backToTop">
 <a href="#">
 <i class="fa fa-chevron-up"></i>
 </a>
 </span>
 
           </section>`;
};
export default header;
