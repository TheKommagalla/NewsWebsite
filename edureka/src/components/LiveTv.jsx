import React from 'react'
import img1 from './images/img2.png';

 function LiveTv() {
  return (
    <>
        <div className="livetv-container">
             <div className="image-container">
                <img src={img1} className="img-fluid Live-image" style={{"border":"2px solid red"}} alt="..."/>
                </div>
                <div className="image-container">
                <img src={img1} className="img-fluid" alt="..."/>
                </div>
            </div>      
    </>
  )
}
export default LiveTv;
