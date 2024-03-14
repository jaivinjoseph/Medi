import React from 'react';
import "./about.css";
import alensa from "../ASSETS/alensa.png";
import aloshi from "../ASSETS/aloshi.png";
import jaivin from "../ASSETS/jaivin.png";
import john from "../ASSETS/john.png";

const About = () => {
  return (
    <div>
      <h1 className="about_us">ABOUT US</h1>
      <div className="abt">
        <p>At MediScan, our core mission is to tackle the pervasive issue of limited medicine accessibility head-on. We understand the profound implications of this challenge on individuals' health and overall well-being, which is why we've developed an innovative platform that serves as a vital link between healthcare providers, pharmacies, and consumers. Through seamless communication and collaboration, we strive to revolutionize the way essential medications are accessed.</p>
        <p>Our platform offers a suite of cutting-edge features designed to streamline the medication procurement process. With real-time inventory updates, we ensure that crucial medications are always readily available when needed most. Furthermore, our user-friendly website and AI-driven chatbot empower consumers to effortlessly locate and acquire medications within their vicinity, significantly enhancing convenience and accessibility.</p>
        <p>At the heart of MediScan lies a commitment to transparency, collaboration, and user-centric design. By fostering meaningful interaction among stakeholders, including healthcare providers, pharmacies, and consumers, we've created a dynamic ecosystem that prioritizes health, convenience, and effective communication. Our dedication to innovation drives us to continuously refine and enhance our platform to meet the evolving needs and challenges of the healthcare landscape.</p>
        <p>Together, we're on a mission to bridge the gap in medicine accessibility and propel the advancement of healthcare services worldwide. Through our collective efforts, we aspire to improve health outcomes and enhance the quality of life for individuals across the globe. Join us in our journey towards a healthier, more accessible future with MediScan.</p>
      </div>
      <div className='meettt'>
        <div className="meett">
          <h2 className="meet">MEET THE TEAM</h2>
        </div>
      </div>
      <div className='abtt_img'>
        <div className='abt_img_container'>
          <img src={alensa} alt="Alensa Anto" className='abt_img' />
          <h className="abt_de">Alensa Anto</h>
        </div>
        <div className='abt_img_container'>
          <img src={aloshi} alt="Alosyius J Kolapran" className='abt_img' />
          <h className="abt_de">Alosyius J Kolapran</h>
        </div>
        <div className='abt_img_container'>
          <img src={jaivin} alt="Jaivin Joseph" className='abt_img' />
          <h className="abt_de">Jaivin Joseph</h>
        </div>
        <div className='abt_img_container'>
          <img src={john} alt="Pelliserry John Antony" className='abt_img' />
          <h className="abt_de">Pelliserry John Antony</h>
        </div>
      </div>
    </div>
  );
}

export default About;
