import React, { useEffect, useState } from 'react'

 function Reviews() {
    const [data,setdata]=useState([])
    useEffect(()=>{
    const fetchData=async ()=>
    {
        try{
            const fetchdata=await fetch('http://localhost:1110/review')
            const Data=await fetchdata.json();
            setdata(Data)
        }
        catch(error)
        {
            console.log(`Error:${error}`)
        }
    }
    fetchData()
    },[])
  return (
    <>
        <div className='review-container'>
            {
                data.length>0?(data.map((item,index)=>
                    <div className="card" style={{width: "auto"}} key={index}>
                        <div className="card-body">
                            <h5 className="card-title ">{ item.title}</h5>
                            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                
                )):
                (
                    <p>No data available</p>
                )
            } 
        </div>       
    </>
  )
}
export default Reviews;
