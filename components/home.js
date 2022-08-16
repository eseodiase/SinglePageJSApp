const home =()=>{
"use strict";
  const  everyTextsUsedInsideHomePage = {
        heading: "Single Page JS App",
        article: "Quisque posuere, ligula in finibus semper, <br/>nisi odio lobortis libero. Rutrum blandit <br/>massa. Ut tincidunt ultrices molestie.",
        
        subHeading1: "JavaScript Block",
        short1: "",
        subHeading2: "JavaScript Array",
        short2: "",
        subHeading3: "JavaScript Method",
        short3: "",
        
        //classNames used:
        container: "homePage",
        wrap: "title_div",
        div1: "part1",
        within: "within_part1",
        div2: "part2", // this div has been removed.
        div3: "part3",
        
        wrap2: "txt_wrap",
        div4: "box1",
        div5: "box2",
        div6: "box3",
    };
const texts = everyTextsUsedInsideHomePage;
    return `<section class="homeP">
    <div class=${texts.container}>
    
    <div class=${texts.wrap}>
    
  <div class=${texts.div1}>
  <div class=${texts.within}>
  <h1 class="desktopHeading">Single Page
  <br/> JS App
  </h1>            
   <h1 class="mobileHeading">${texts.heading}</h1>
   <p class="heroTxt">${texts.article}</p>
<div class="forAction">
<span class="action">Learn More</span>
</div>
</div>
</div>
  
              
               <div class=${texts.div3}>
               
<div class=${texts.wrap2}>
               <h3 class="js">{}</h3>
                   <h3>${texts.subHeading1}</h3>
                   <p>
  var name = "JS App";<br/>{<br/> console.log(name)<br/>};
                   </p>
</div>
                
<div class="txt_wrap">  
                <h3 class="js">[]</h3> 
                   <h3>${texts.subHeading2}</h3>
                   <p>let arr = []; <br/>
arr[0] = "ECMAScript"; <br/>
arr[1] = "JavaScript"; <br/>
console.log(arr[1]);</p>
</div>
                
<div class="txt_wrap">  
                <h3 class="js">()</h3> 
                   <h3>${texts.subHeading3}</h3>
                   <p>const name = "JavaScript";<br/>
const re_name = name.replace<br/>("JavaScript", "JS App");<br/>
console.log(re_name);
</p>
</div>
                
                </div>
          </div>
    
          
          <div>
          
              <div class=${texts.div4}>
                 <p>CREATIVE HASHTAGES:</p>
                 <p>#designbyese</p>
              </div>
              
               <div class=${texts.div5}>
                 <p>Aenean maximus lacus quis neque mollis accumsan.</p>
              </div>
             
               <div class=${texts.div6}>
                 <i class="fa fa-twitter"></i>
                 <i class="fa fa-instagram"></i>
                 <i class="fa fa-youtube"></i>
                 <i class="fa fa-whatsapp"></i>
                 <i class="fa fa-github"></i>
              </div>
          </div>
          <br/>
          
        <div class="home_bottom">
        <div class="footer_head">
      <i class="fa fa-twitter"></i>
      <i class="fa fa-instagram"></i>
      <i class="fa fa-youtube"></i>
      <i class="fa fa-whatsapp"></i>
      <i class="fa fa-github"></i>
        </div>
        
        <div class="footer_bottom">
   <p> Developed by <a href="">Ese Odiase</a></p>
        </div>
        </div>    
         
</div>
</section> `;
};

export default home;
