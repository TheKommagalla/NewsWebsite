import React, { useEffect, useState } from 'react';

function NewTypeSlider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1110/newtype');
        const jsonData = await response.json(); // ✅ Convert response to JSON
        setData(jsonData); // ✅ Set the actual data
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p className="ml-4 mt-4 Heading" style={{ marginLeft: "auto", fontWeight: "bold" }}>
        Featured Categories
      </p>

      {data.length > 0 ? (
        // console.log(data)
        
          <div className='card-container ' >  {/* ✅ Added key */}
          {data.map((item, index) => (
                <div className='container-card ' key={index} title={item.title}>
                  <p className="card-label">{item.title}</p>
                  <div className='card-body'>
                    <img src={`data:image/png;base64,${item.image}`} alt={item.title} className="img-thumbnail w-5" />
                  </div>
                </div>
          ))}
          </div>

      ) : (
        <h1>Loading...</h1> 
      )}
    </>
  );
}

export default NewTypeSlider;
