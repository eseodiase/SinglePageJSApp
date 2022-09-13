import footer from "./footer.js";

const gallery = () =>{
    const gallery_Page_Compound_Values ={
      l1: "All",
      l2: "JavaScript",
      l3: "ECMAScript",
      l4: "TypeScript",
    };
    const gal= gallery_Page_Compound_Values;
    return `<section class="galleryPage">
    <h3> Scripts Gallery</h3>
    <ul>
        <li id="all">${gal.l1}</li>
        <li class="JavaScript">${gal.l2}</li>
        <li class="ES6">${gal.l3}</li>
        <li class="TS">${gal.l4}</li>
    </ul>
    
    <div class="cards">
    
    <div class="esCard">
    <div class="card">
    <div>
    <h1>ES</h1>
    <h3>Arrow Function </h3>   
    <p>functionName = () =>{
    <br/> ...};
    </div>
    </div>
    </div>
    
    <div class="jsCard">
    <div class="card">
    <div>
    <h1>JS</h1>
    <h3>Statement</h3>   
    <p>var a = 2 * 5;</p>
    </div>
    </div>
    </div>

    <div class="tsCard">
    <div class="card">
    <div>
    <h1>TS</h1>
    <h3>Statically Typed</h3>   
    <p>let cell: number = 08100000000;</p>
    </div>
    </div>
    </div>
    
    <div class="jsCard">
    <div class="card">
    <div>
    <h1>JS</h1>
    <h3>For Loop</h3>   
    <p>for(...; ...; ...){
        <br/> ...};
    </p>
    </div>
    </div>
    </div>
    
    <div class="esCard">
    <div class="card">
    <div>
    <h1>ES</h1>
     <h3>Export</h3>   
    <p>export functionName = () =>{
    <br/> ...};
    </div>
    </div>
    </div>
    
    <div class="tsCard">
    <div class="card">
    <div>
    <h1>TS</h1>
    <h3>Enum Values</h3>   
    <p>enum weekEnd{    
    <br/> DAYSIX = "Friday",<br/>
          DAYSEVEN = "Saturday";
          <br/> };
    </p>
    </div>
    </div>
    </div>
    
    <div class="jsCard">
    <div class="card">
    <div>
    <h1>JS</h1>
    <h3>If Conditional</h3>   
    <p>if(... && ...){
        <br/> ...};
    </p>
    </div>
    </div>
    </div>
        
    </div>
    
    <section class="gallery_bottom"></section>
 
 </section>`;

document.querySelector(".gallery_bottom").innerHTML = (footer());

};
export default gallery;
