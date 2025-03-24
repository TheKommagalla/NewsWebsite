import React from 'react'
import { NavLink } from 'react-router-dom';
 function News() {
  return (
    <>
        
        <NavLink to="education" className="nav-link">              
                <div className="card container-card" style={{"width": "15rem"}} >
                  
                    <div className="card-body">
                    <img src={img1} alt="Education" className="img-thumbnail w-2" />
                    
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
        </NavLink>
        <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/education" element={<Sports />} />
       </Routes>
    </>
  )
}
export default News;
