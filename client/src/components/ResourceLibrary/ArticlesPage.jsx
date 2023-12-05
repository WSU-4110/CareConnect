import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesPage.css'; // Import the CSS file 
import Main from "../Main";





const ArticlesPage = () => {
  const articlesData = [
    {
      image: '/ResourceLibraryImages/article1.jpg', 
      title: 'The Importance of Mental Health Awareness', 
      description: 'Learn why your Mental Health is so Important',
      link: 'https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/', 
    },
    {
      image: '/ResourceLibraryImages/article2.jpg', 
      title: 'Stress Management: How to Reduce and Relieve Stress', 
      link: 'https://www.helpguide.org/articles/stress/stress-management.htm', 
    },
    {
      image: '/ResourceLibraryImages/article3.jpg', 
      title: 'Building Better Mental Health', 
      description: 'Learn how to Fortify your Mental Health...',
      link: 'https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm#:~:text=Your%20mental%20health%20influences%20how,from%20life%27s%20setbacks%20and%20hardships.', 
    },
    // Will add more articles as needed...
  ];

  return (
    <Main>
    <div className="article-page">
      <h1>Articles</h1>
      <div className="article-list">
        {articlesData.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={`Article ${index + 1}`} />
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="read-button"
            >
              Read Article
            </a>
          </div>
        ))}
      </div>
    </div>
    </Main>
  );
};

export default ArticlesPage;
