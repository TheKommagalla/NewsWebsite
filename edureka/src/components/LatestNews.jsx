import {useState,useEffect} from 'react';
import img1 from './images/education (1).png';
import {  BrowserRouter , Routes, Route  } from 'react-router-dom';
import card from './images/card.jpg'
import Sports from './Sports';
import News from './News';
import { NavLink } from 'react-router-dom';
 function LatestNews() {
  
// fetaching the data from the database
const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try{
      const response = await fetch('http://localhost:1110');// replace with your API endpoint
      console.log(response)
      const data = await response.json();
      console.log(data)
  
       setNews(data);
    } 
    catch (error) {
      console.error('❌ Error fetching data:', error.message);
      }
    }
    fetchNews();
   }, []);
  
  return (
    <>
         <p  className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight:"bold"  }}>LatestNews</p>
                  
               
             <div className='card-container'>
              
               
                    
        <NavLink to={"sports"} className="nav-link">              
          
            {news.length > 0 ? (
              news.map((item, index) => (
                <div className="card container-card" style={{ width: "15rem" }} key={index}>
                  <div className="card-body">
                    <img src={img1} alt="Education" className="img-thumbnail w-2" />
                    <h5 className="card-title">{item.newsHeading || "No Title"}</h5>
                    {/* <p className="card-text">{item.newsDescription || "No Description Available"}</p> */}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
         
        </NavLink>

             
          
              <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>

             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>

             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>

             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>

             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>
             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>

             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>

             <div className="card container-card" style={{"width": "15rem"}} >
                 
                 <div className="card-body">
                 <img src={img1} alt="Education" className="img-thumbnail w-2" />
                  
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
             </div>
             </div>

    </>
  )
}
export default  LatestNews;
