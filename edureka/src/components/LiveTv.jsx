import React, { useEffect, useState } from 'react';
import img1 from './images/img2.png';

function LiveTv() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetch('http://localhost:1110/liveTv');
        const response = await fetchedData.json();
        setData(response);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight: "bold" }}>
        Live TV
      </p>

      <div className="livetv-container">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="image-container" key={index} title={item.title}>
              <img src={`data:image/png;base64,${item.image}`}    className="img Live-image"  alt="Live TV" />
            </div>
          ))
        ) : (
          <p className='text-danger'>No Live TV available</p>
        )}
      </div>
    </>
  );
}

export default LiveTv;
