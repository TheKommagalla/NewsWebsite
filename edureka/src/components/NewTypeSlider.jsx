import React from 'react';
import img1 from './images/education (1).png';
function NewTypeSlider() {
  return (
    <>
      <p  className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight:"bold"  }}>Featured Categories</p>
      <div className='card-container'>
        <div className='container-card'>
          <p className="card-label">Education</p>
          <div className='card-body'>
            <img src={img1} alt="Education" className="img-thumbnail w-5" />
          </div>
        </div>
        

        <div className='container-card'>
          <p className="card-label">Technology</p>
          <div className='card-body'>
            <h5 className="card-title">New Type Slider</h5>
          </div>
        </div>

        <div className='container-card'>
          <p className="card-label">Design</p>
          <div className='card-body'>
            <h5 className="card-title">New Type Slider</h5>
          </div>
        </div>

        <div className='container-card'>
          <p className="card-label">Marketing</p>
          <div className='card-body'>
            <h5 className="card-title">New Type Slider</h5>
          </div>
        </div>

        <div className='container-card'>
          <p className="card-label">Finance</p>
          <div className='card-body'>
            <h5 className="card-title">New Type Slider</h5>
          </div>
        </div>

        <div className='container-card'>
          <p className="card-label">Art</p>
          <div className='card-body'>
            <img src="" alt="Art" className="img-thumbnail w-100 h-100" />
          </div>
        </div>
        <div className='container-card'>
          <p className="card-label">Art</p>
          <div className='card-body'>
            <img src="" alt="Art" className="img-thumbnail w-100 h-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTypeSlider;
