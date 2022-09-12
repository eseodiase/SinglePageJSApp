const about =()=>{
"use strict";
const about_Page_Compound_Values={
    //classNames Used:
       ofImg: "aboutBGimg",
       art: "article",
    };
const abt = about_Page_Compound_Values;
    
    return `  <section class="aboutPage">
          <div class=${abt.art}>
          
             <div class=${abt.ofImg}>
             <figure>
           <img src="images/about Us.jpg" alt="Image used for about us" height="212px" width="100%"/>
           <figcaption>
           <a href="https://www.freepik.com/vectors/javascript">Javascript vector created by vectorjuice.
           </a>
           </figcaption>
             </figure>
             </div>
          
          <h3>About Us</h3>
              <article>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere, ligula in finibus semper, nisi odio lobortis libero, eu aliquet diam massa vitae ipsum. Cras laoreet tortor a mi gravida, eu vestibulum metus venenatis. Aenean maximus lacus quis neque mollis accumsan. Fusce finibus aliquam purus id malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam lectus risus, pellentesque vitae nisi quis, rutrum blandit massa. Ut tincidunt ultrices molestie.
              </article>
              
              <article>
                  Maecenas non massa sit amet mauris condimentum aliquet. Sed facilisis, leo quis imperdiet egestas, ante est iaculis risus, quis facilisis felis libero vitae nibh.
              </article>
          </div>
      </section> `;
};
export default about;
