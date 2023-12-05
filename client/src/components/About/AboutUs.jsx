import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (

    <div className="about-us">
        <div className='background'>
    <div className="about-header">
      About Us
    </div>

      <div className="about-description">
      <p>
        <br></br>
        Welcome to Care Connect, where we are dedicated to making a meaningful impact on your mental health journey. We understand that mental health challenges can be a heavy burden, and finding the right support can sometimes feel like an uphill battle. That's why we're here, standing by your side, ready to help you every step of the way.
      </p>
      <p>
        At Care Connect, we believe that everyone deserves access to compassionate and professional support, especially during the most challenging times. We are not just a platform; we are a community of empathetic specialists, therapists, and counselors who are passionate about making your life better.
      <br></br> <br></br><br></br>
      </p>
      <div className="our-mission">
        CareConnect is Here For You
        </div>
      <p>
        <br></br>
        Our mission is simple: to provide you with a space where you can talk openly about your mental health issues without fear, judgment, or stigma. We aim to create a nurturing environment where you feel valued and understood.
      </p>
      <p>
        Our specialists are not only highly qualified but deeply caring. We understand that listening is the first step to healing. We are here to listen to your thoughts, feelings, and concerns. Your story is unique, and we tailor our approach to address your individual needs.
      </p>
      <p>
        We recognize that addressing anxiety, depression, or other mental health issues is a challenging journey. With Care Connect, you're not alone. We will stand by your side and provide you with tools, strategies, and the guidance you need to overcome your mental health challenges.
      </p>
      <p>
        You're more than just a user to us; you're an essential member of our community. We invite you to explore our platform, share your thoughts, and let us accompany you on the path to improved mental health. You don't have to face your challenges alone – we are here to help you, always.
      </p>
      
      <br></br><br></br>
      </div>

      {/* Our Team Section */}
      <div className="our-team-header">Our Team</div>
      <div className="our-team">
        <div className="team-member">
          <div className="name">Kawsar Islam</div>
          Wayne State University Senior (Computer Science)
        </div>
        <div className="team-member">
          <div className="name">Saifur Sabbir</div>
          Wayne State University Senior (Computer Science)
        </div>
        <div className="team-member">
          <div className="name">Lucas Prifti</div>
          Wayne State University Senior (Computer Science)
        </div>
        <div className="team-member">
          <div className="name"> Prangon Talukdar </div>
          Wayne State University Senior (Computer Science)
        </div>
        <div className="team-member">
          <div className="name"> Mohan Sreeramulu</div>
          Wayne State University Senior (Computer Science)
        </div>
        <div className="team-member">
          <div className="name"> Burahaun Uddin </div>
          Wayne State University Senior (Computer Science)
        </div>
        <div className="buttons">
        <Link to="/">
          <button className="back-button">Back to HomePage</button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;