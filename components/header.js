const header = () => {
"use strict";
const allObjectsUsedOnHeader = {
//I am using global variables, so I can access them anywere.

//Navigation List
l1: "JS App",
l2: "Home",
l3: "About",
l4: "Scripts",
l5: "Connect",
l6: "Ese Odiase",

//developer's url:
url: "https://www.eseodiase.eth",

//icon:
bar: "&#9552;",

//className here:
mobile: "menu_bar",

};
const all = allObjectsUsedOnHeader;

    return `  <section class="header">
      <span class="drink">JS App</span>
    <nav>
    <div class=${all.mobile}>${all.bar}</div>
  
    <ul>
    <li class="logo">${all.l1}</li>
<li class="home"><a href="#">${all.l2}</a></li>
<li class="about"><a href="#">${all.l3}</a></li>
<li class="scripts"><a href="#">${all.l4}</a></li>
<li class="connect"><a href="#">${all.l5}</a></li>
    <li class="dev"><img src="" alt="Dev"/>
    <br/>
    Developed by
    <br/>
    <a href=${all.url}>${all.l6}</a>
    </li>  
    </ul>
    </nav>
 <span class="backToTop"><a href="#"><i class="fa fa-chevron-up"></i></a></span>
    </section>`;
};

export default header;
