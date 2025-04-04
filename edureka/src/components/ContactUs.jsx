import React, { useEffect, useState } from 'react'
function ContactUs() {
    // useEffect(()=>{
    //     const Postadata=async ()=>
    //     {
    //         const response=await fetch("http://localhost:1110/contact",{
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 // title:Username,
    //                 email:Useremail,
    //                 Query:Query,
    //             })
    //         });
    //         const data=await response.json();
    //         console.log(data);
           
    //     }
    //     Postadata()
    // },[])
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [Query,setQuery]=useState("");
    const details={name,email,Query};
    // console.log(details)
    const HandleData=(e)=>
    {
        e.preventDefault();
        const Postadata=async ()=>
        {  
            try{
            const response=await fetch("http://localhost:1110/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(details)
            });
            // const data=await response.json();
            // console.log(data);
             // ✅ Clear input fields after successful submission
             setName("");
             setEmail("");
             setQuery("");
           
        }
        catch(error)
        {
            console.log("Error:",error);
        }
     
        }
        Postadata()
    }

 
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
            
                 <form onSubmit={HandleData}>
                 <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" name="name"     value={name|| ""} placeholder="Enter the Name"  onChange={(event)=>setName(event.target.value)}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"     value={email|| ""} aria-describedby="emailHelp" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter the email"/>

                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Query</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="Query" value={Query|| ""} rows="3" placeholder="Enter your Query Here..." onChange={(event)=>setQuery(event.target.value)}></textarea>
                    </div>
                    <br/>
                   
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
          
        </div>
       </div>
    </div>
    </>
  )
}

export default ContactUs