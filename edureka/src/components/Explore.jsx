import { useState, useEffect,Route } from 'react';
import img1 from './images/education (1).png';
import { NavLink } from 'react-router-dom';
import News from './NewsDetails';
function Explore() {
  // Fetching news data
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:1110'); // replace with your API endpoint
        const data = await response.json();
        setNews(data);
      } catch (error) { 
        console.error('❌ Error fetching data:', error.message);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <p className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight: "bold" }}>Explore More</p>

      <div className='card-container'>
        {news.length > 0 ? (
          news.map((item, index) => (
            <div
              to={`/News/${item.id}`} // Navigate to dynamic news details page
              style={{ textDecoration: 'none' }}
              key={index} // ✅ Added key to avoid React warnings
              onClick={() => window.open(`/News/${item._id}`, '_blank')}
            >
              <div className="card container-card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <img src={`data:image/png;base64,${item.Image}`}alt="Education" className="img-thumbnail w-2" />
                  <h5 className="card-title">{item.newsHeading || "No Title"}</h5>
                </div>
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

export default Explore;