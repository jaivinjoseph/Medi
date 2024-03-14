import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../ASSETS/logo.png";
import bg from "../ASSETS/bg.png";
import "./home.css";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="home">
      <div className="white">
        <div className="line">
          <div className="log">
            <img src={logo} alt="no" className="logg" />
          </div>
          <div className="losi">
            <div className="login">
              <div className="lo">
                <Link to="/login" className="lloo"><h className="loo">Login</h></Link>
              </div>
            </div>
            <div className="sign">
              <div className="sig">
                <Link to="/Signup" className="s"><h className="sii">Signup</h></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="abou">
            <Link to="/about" className="abb"><h className="ab"> About Us</h></Link>
          </div>
        </div>
        <div className="service">
          <div className="servic">
            <div className="dropdown" ref={dropdownRef}>
              <button className="servv" onClick={toggleDropdown}><h className="serv"> Services</h></button>
              {showDropdown && (
                <ul className="dropdown-content">
                  <li><Link to="/Search_medicine" className='sear' onClick={closeDropdown}><h className="sea">Search medicine</h></Link></li>
                  <li><Link to="/get" className='assis' onClick={closeDropdown}><h className="sea">Get AI assistance</h></Link></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text">
        <div className="tex">
          <h className="texx">Medi</h>
          <h className="texxx"> Scan</h>
        </div>
        <div className="loca">
          <h className="loc">Your local medical assistant</h>
        </div>
      </div>
      <div className="back">
        <div className="bg">
          <div className="tint">
            <img src={bg} className="bgg" alt="no" />
          </div>
          <div className="overlay-text">
            <h className="overlay">Medication Access, Simplified!</h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
