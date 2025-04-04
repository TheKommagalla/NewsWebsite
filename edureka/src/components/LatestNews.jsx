// import { useState, useEffect,Route } from 'react';
// import img1 from './images/education (1).png';
// import { NavLink } from 'react-router-dom';
// import News from './NewsDetails';
// function LatestNews() {
//   // Fetching news data
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch('http://localhost:1110'); // replace with your API endpoint
//         const data = await response.json();
//         setNews(data);
//       } catch (error) { 
//         console.error('❌ Error fetching data:', error.message);
//       }
//     };
//     fetchNews();
//   }, []);

//   return (
//     <>
//       <p className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight: "bold" }}>Latest News</p>

//       <div className='card-container'>
//         {news.length > 0 ? (
//           news.map((item, index) => (
//             <a 
      
//             href={`/News/${item.id}`} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             style={{ textDecoration: 'none' }} 
//               key={index} // ✅ Added key to avoid React warnings
//             >
//               <div className="card container-card" style={{ width: "15rem" }}>
//                 <div className="card-body">
//                   <img src={img1} alt="Education" className="img-thumbnail w-2" />
//                   <h5 className="card-title">{item.newsHeading || "No Title"}</h5>
//                 </div>
//               </div>
//             </a>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default LatestNews;
import { useState, useEffect } from 'react';


function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:1110'); // replace with your API endpoint
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('❌ Error fetching data:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <p className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight: "bold" }}>Latest News</p>

      <div className='card-container'>
        {news.length > 0 ? (
          news.map((item, index) => (
            <div 
              key={index}
              className="card container-card" 
              title={item.newstype}
              style={{ width: "15rem", cursor: "pointer" }} 
              onClick={() => window.open(`/News/${item._id}`, '_blank')} // ✅ Open in a new tab
          
            >
              <div className="card-body">
                <img src={`data:image/png;base64,${item.Image}`} alt="Education" className="img-thumbnail w-2" />
                <h5 className="card-title">{item.newsHeading || "No Title"}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default LatestNews;
