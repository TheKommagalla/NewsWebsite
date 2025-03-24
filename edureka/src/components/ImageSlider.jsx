import React from 'react';
// import img1 from './images/img1'
import img2 from './images/img2.png' 
import img3 from './images/img3.jpg'
function ImageSlider() {
  return (
    <div className="container"style={{"width":'auto'}}>
    <div id="carouselExampleFade" className="carousel slide w-90 carousel-fade z-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img2}
            className="d-block w-100"
            alt="News"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="Breaking News"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="Newspaper"
          />
        </div>
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
    </div>
  );
}

export default ImageSlider;
