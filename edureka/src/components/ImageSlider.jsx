import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1110/imageslider');
        const data = await response.json(); // Properly parsing JSON
        console.log(data);
        setImage(data);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container" style={{ width: 'auto' }}>
        {image.length > 0 ? (
          <div id="carouselExampleFade" className="carousel slide w-90 carousel-fade z-3" data-bs-ride="carousel">
            <div className="carousel-inner">
              {image.map((item, index) => ( // ✅ Fixed .map() syntax
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}   title={item.title}>
                  <img src={`data:image/png;base64,${item.image}`} className="d-block w-100" alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <h1>No images available</h1>
        )}
      </div>
    </>
  );
}

export default ImageSlider;
