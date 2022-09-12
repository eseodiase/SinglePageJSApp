const connect = () =>{
    return ` <section class="connectPage">
        <div class="container">
          
              <form>
              <h3>Connect with Us</h3>
              <label> 
              <i class="fa fa-user"></i>
              </label>
                  <input type="text" name="Name" placeholder="Your name"/><br />
                  
                  <hr>
                    <label> 
                    <i class="fa fa-at"></i>
                    </label>
                  <input type="email" name="E-mail" placeholder="Your e-mail"/>
                  <br />
                  
                  <hr>
                <label class="txtA">
                <i class="fa fa-envelope"></i>
                </label>
                  <textarea name="Message" placeholder="Your message" rows="6" cols="30"></textarea><br /><br/>
                  
                  <hr>
                  <button type="submit" class="submit">
                  Send
                  </button> 
              </form>
                          
            </div> 
        </section>`;
};
export default connect;
