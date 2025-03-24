
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast } from "bootstrap";

const WeatherApi = ({ showToast, onClose }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (showToast) {
      const toastEl = document.getElementById("contactToast");
      if (toastEl) {
        const toastInstance = new Toast(toastEl, { autohide: false });
        toastInstance.show();

        // Handle toast close event
        toastEl.addEventListener("hidden.bs.toast", onClose);
      }
    }
  }, [showToast, onClose]); // Runs only when showToast changes

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:1001/api/weather?city=${city}`);
      if (!response.ok) {
        throw new Error("City not found or API error");
      }
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <>
      {showToast && (
         <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1100 }} // ✅ Ensures toast appears on top
         >
              <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100 m-4">
                <div id="contactToast" className="toast show responsive-toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                  <div className="toast-header">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                      className="rounded me-2"
                      alt="Logo"
                      width="20"
                      height="20"
                    />
                    <strong className="me-auto">Weather Update</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                  </div>

                  <div className="toast-body">
                    <div className="container d-flex flex-column align-items-center mt-3">
                      <div className="card shadow p-4 text-center" style={{ width: "100%" }}>
                        <h2 className="mb-3">🌤️ Weather App</h2>

                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter city name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                          <button className="btn btn-primary" onClick={fetchWeather}>
                            Get
                          </button>
                        </div>

                        {error && <p className="text-danger">{error}</p>}

                        {weather && (
                          <div className="mt-3">
                            <h3 className="fw-bold">{weather.name}, {weather.sys.country}</h3>
                            <p className="fs-4">
                              🌡️ <strong>{weather.main.temp}°C</strong>
                            </p>
                            <span>💧 Humidity: {weather.main.humidity}%</span>,
                            <span>🌍 Condition: {weather.weather[0].description}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       </div>
      )}
    </>
  );
};

export default WeatherApi;

