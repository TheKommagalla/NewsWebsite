import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WeatherApi from "./WeatherApi";
import ContactUs from "./ContactUs";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Sports from "./Sports";
import News from "./NewsDetails";
import logo from './images/news_247__1_-removebg-preview.png'
function Header() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => setShowToast(true);
  const handleCloseToast = () => setShowToast(false);

  return (
    <Router>
      <div className="container justify-content-center align-items-center mt-4 sticky-top" style={{ width:"auto"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-white w-100">
          <div className="container-fluid w-100">
            <div className="navbar-brand text-black title-bold" to="">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Update 24/7
            </div>
            <button
              className="navbar-toggler bg-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => `nav-link ${isActive ? "active text-primary" : "text-black"}`}
                    onClick={() => document.getElementById("navbarNav").classList.remove("show")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/sports"
                    className={({ isActive }) => `nav-link ${isActive ? "active text-primary" : "text-black"}`}
                    onClick={() => document.getElementById("navbarNav").classList.remove("show")}
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => `nav-link ${isActive ? "active text-primary" : "text-black"}`}
                    onClick={() => document.getElementById("navbarNav").classList.remove("show")}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => `nav-link ${isActive ? "active text-primary" : "text-black"}`}
                    onClick={() => document.getElementById("navbarNav").classList.remove("show")}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/weather"
                    className={({ isActive }) => `nav-link ${isActive ? "active text-primary" : "text-black"}`}
                    onClick={() => {
                      handleShowToast();
                      document.getElementById("navbarNav").classList.remove("show");
                    }}
                  >
                    Weather
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />

      {/* Routes Setup */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/weather" element={<WeatherApi showToast={showToast} onClose={handleCloseToast} />} />
          <Route path="/News/:id" element={<News />}/> {/* Add this to your Router in App.js */}
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
