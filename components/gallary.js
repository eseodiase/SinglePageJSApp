const gallary = () =>{
    const gallary_Page_Compound_Values ={
      l1: "All",
      l2: "JavaScript",
      l3: "ECMAScript",
      l4: "TypeScript",
    };
    const gal= gallary_Page_Compound_Values;
    return `<section class="gallaryPage">
    <h3> Scripts Gallary</h3>
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
    <p>Let cell: Number = 08100000000;</p>
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
    <p>enum Weekend{    
    <br/> daySix: "Friday";<br/>
          daySeven: "Saturday";
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
   
</section>`;
};
export default gallary;
