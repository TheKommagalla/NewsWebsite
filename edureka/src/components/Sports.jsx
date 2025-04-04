import React, { useEffect, useState } from 'react'
import img1 from './images/education (1).png';
import { NavLink } from 'react-router-dom';

function Sports() {
  const [data,setdata]=useState([])
useEffect(()=>{
const featchData=async()=>
{
  try{
    const data=await fetch('http://localhost:1110')
    const response= await data.json()
    console.log(response)
    setdata(response)
  }
  catch(error)
  {
    console.log(`Error:${error}`)
  }
  
}
featchData();
},[])
  return (
    <>
    
        <p  className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight:"bold"  }}>Sports</p>
        
        <div className="card-container">
          {
          data.length > 0?(data.filter((item)=>item.newstype==='Sports').map((item,index)=>
   
            <div className="nav-link"  key={index}>              
            <div 
              key={index}
              className="card container-card" 
              title={item.newstype}
              style={{ width: "15rem", cursor: "pointer" }} 
              onClick={() => window.open(`/News/${item._id}`, '_blank')} // ✅ Open in a new tab
          
            >
              <div className="card-body">
                <img src={`data:image/png;base64,${item.Image}`} alt="Education" className="img-thumbnail w-5" />
                <h5 className="card-title">{item.newsHeading || "No Title"}</h5>
              </div>
            </div>
             </div>
     
            
          )):
          (
            <p className='text-danger text-bloder'>No Data available</p>
          )
        }
        </div>
      </>
  )
}
export default Sports;            
               
                   
     
     
     
     
