import  { useEffect, useState } from 'react'

function AboutUs() {
  const [data,setData]=useState([]);
  useEffect(()=>{
 const fetchData=async()=>
 {
   try{
     const data=await fetch(`http://localhost:1110/aboutus`)
     const response= await data.json()
     console.log(response)
     setData(response)
   }
   catch(error)
   {
     console.log(`Error:${error}`)
   }
 }
 fetchData();
 },[])
  return (
    <>
       <div className="Map-container">
         <div className="Map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.159213492873!2d78.67983337462834!3d17.45209210093896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb766d75fe43c9%3A0xdeed301d708a0ca2!2sGhatkesar%20Bus%20Stop%2C%20Hyderabad%20-%20Warangal%20Hwy%2C%20Ghatkesar%2C%20Telangana%20501301!5e0!3m2!1sen!2sin!4v1741802570872!5m2!1sen!2sin" height="450" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
         <div className="about-description">
            <p  style={{ fontWeight:"bold"  }}>Aboutus</p>
            {
                data.length> 0 ? (data.map((item,index)=>(
                  <p className="about-para">
                    {item.description || "No Description Available"}
                </p>
                  ))):
                  (<h1>No Description Available.</h1>
                  )
            }
          </div>
        </div>
     
    </>
  )
}
export default AboutUs
