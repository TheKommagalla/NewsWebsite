import React from 'react'
function ContactUs() {
  return (
    <>
       <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2>Get in Touch</h2>
                <p>Address: 123 Main St, Anytown, USA 12345</p>
                <p>Phone: +1 800 123 1234</p>
                <p>Email:
                    <a href="mailto:info@example.com">update24/7@gmail.com</a></p>
                    </div>
            <div className="col-md-6">
            
                 <form>
                 <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter the Name"/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the email"/>

                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Query</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your Query Here..."></textarea>
                    </div>
                    <br/>
                   
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
          
        </div>
       </div>
    </div>
    </>
  )
}

export default ContactUs