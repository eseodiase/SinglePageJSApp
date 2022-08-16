const connect = () =>{
    return ` <section class="connectPage">
        <div class="container">
            <div class="connectPart1">
              <form>
              <h3>Connect with Us</h3>
              <label>Name</label>
                  <input type="text" name="Name" placeholder="Your name"/><br />
                  <hr>
                    <label>E-mail</label>
                  <input type="email" name="E-mail" placeholder="Your e-mail"/>
                  <br />
                  <hr>
                  <textarea name="Message" placeholder="Your message" rows="4" cols="30"></textarea><br /><br/>
                  <hr>
                  <button type="submit" class="submit">Send</button> 
              </form>
            </div> 
        </section>`;
};
export default connect;
