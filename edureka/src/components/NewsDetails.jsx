
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Explore from "./Explore";

function News() {
  const { id } = useParams(); // Get ID from URL
  const newsId =id; // Convert id to a number

  console.log(`id ${typeof id, id}`);

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1110/"); // Replace with your API endpoint
        const data = await response.json();
        console.log(data)
        setNews(data);
      } catch (error) {
        console.error("❌ Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
   
        {news.length>0 ? (news.filter((item) => item._id === id).map((item,index)=>  
      <> 

        <div className="news-heading">
              <p className="card-title " style={{fontSize:`20px`}}>
                {item.newsHeading || "No Title"}
              </p>
              
          </div>
        <div className="details-container">
            <div className="image-container">
                <img
                  src={`data:image/png;base64,${item.Image}`}
                  className="img-fluid Live-image"
                  style={{height: "auto" }}
                  alt="News Image"
                />
              </div>
              <div className="news-details">
              <p className=" card-title">
                {item.subtitle || "No Title"}
              </p>
              
          </div>
            
          </div>
            <div className="description-container">
              <p>{item.newsDescription || "No Description Available"}</p>
            </div>
           
      </>
             ))
            : (
          <p>Loading or No News Found...</p>
        )}
      

      <Explore />
    </>
  );
}

export default News;
