import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import PrimaryButton from './../PrimaryButton/PrimaryButton';
import mn1 from '../MainHome/images/mn7.jpg';
import mn2 from '../MainHome/images/mn8.jpg';
import mn3 from '../MainHome/images/mn6.jpg';

// Mock data for articles
const articles = [
  {
    title: "Understanding and Managing Anxiety",
    date: "08 Jul 2022",
    readTime: "3 min read",
    description: "Explore effective strategies to manage anxiety and improve your mental well-being.",
    tag: "#MentalHealth"
  },
  {
    title: "The Benefits of Mindfulness Meditation",
    date: "28 Jun 2020",
    readTime: "2 min read",
    description: "Learn how mindfulness meditation can help you reduce stress and increase focus.",
    tag: "#Mindfulness"
  },
  {
    title: "Breaking the Stigma Around Depression",
    date: "27 Jun 2020",
    readTime: "4 min read",
    description: "Join us in a discussion about depression and how to support those who are struggling.",
    tag: "#DepressionAwareness"
  }
  
  // ... add more articles as needed
];

// Mock data for carousel images
const carouselImages = [
  mn1,
  mn2,
  mn3,
  // Add more images as needed
];

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const delay = 3000; // Delay in milliseconds (3000ms = 3 seconds)

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = current === images.length - 1 ? 0 : current + 1;
      setCurrent(nextIndex);
    }, delay);

    return () => clearTimeout(timer);
  }, [current, images.length]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null; // Return null if no images are provided
  }

  return (
    <section className={styles.slider}>
      {images.map((image, index) => (
        <div
          className={index === current ? styles.slideActive : styles.slide}
          key={index}
        >
          {index === current && (
            <img src={image} alt={`Slide ${index}`} className={styles.image} />
          )}
        </div>
      ))}
      <button className={styles.prev} onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}>
        &#10094;
      </button>
      <button className={styles.next} onClick={() => setCurrent(current === images.length - 1 ? 0 : current + 1)}>
        &#10095;
      </button>
    </section>
  );
};

const MainHome = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>CareConnect</h1>
        <div className={styles.nav_links}>
          <PrimaryButton><Link to="/MainHome">Home</Link></PrimaryButton>
          <PrimaryButton><Link to="/viewProfile">Profile</Link></PrimaryButton>
          <PrimaryButton><Link to="/Home">Social Media</Link></PrimaryButton>
          <PrimaryButton><Link to="/appointment">Appointment</Link></PrimaryButton>
          <PrimaryButton><Link to="/discussion-Threads">Discussions</Link></PrimaryButton>
          <PrimaryButton><Link to="/FeedbackForm">Feedback</Link></PrimaryButton>

        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      
      <div className={styles.welcomeContainer}>
        <h1>Welcome to CareConnect</h1>
      </div>

      {/* Carousel Section */}
      <Carousel images={carouselImages} />

      {/* Articles Section */}
      <div className={styles.articlesContainer}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <h2>{article.title}</h2>
            <p>{article.date} | {article.readTime}</p>
            <p>{article.description}</p>
            <p>{article.tag}</p>
          </div>
        ))}
      </div>
      
      {children}
    </div>
  );
};

export default MainHome;
