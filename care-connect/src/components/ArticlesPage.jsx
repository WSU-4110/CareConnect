import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlesPage.css';

class ArticleCard {
  constructor(image, title, description, link) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.link = link;
  }

  create() {
    return (
      <div className="article-card">
        <img src={this.image} alt={this.title} />
        <h2>{this.title}</h2>
        {this.description && <h3>{this.description}</h3>}
        <a
          href={this.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-button"
        >
          Read Article
        </a>
      </div>
    );
  }
}

const ArticlesPage = () => {
  const articlesData = [
    new ArticleCard(
      '/ResourceLibraryImages/article1.jpg',
      'The Importance of Mental Health Awareness',
      'Learn why your Mental Health is so Important',
      'https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/'
    ),
    new ArticleCard(
      '/ResourceLibraryImages/article2.jpg',
      'Stress Management: How to Reduce and Relieve Stress',
      null,
      'https://www.helpguide.org/articles/stress/stress-management.htm'
    ),
    new ArticleCard(
      '/ResourceLibraryImages/article3.jpg',
      'Building Better Mental Health',
      'Learn how to Fortify your Mental Health...',
      'https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm#:~:text=Your%20mental%20health%20influences%20how,from%20life%27s%20setbacks%20and%20hardships.'
    ),
    // Add more articles as needed...
  ];

  return (
    <div className="article-page">
      <h1>Articles</h1>
      <div className="article-list">
        <Link to="/" className="go-back-button">
          Back to HomePage
        </Link>
        {articlesData.map((article, index) => (
          <div key={index}>{article.create()}</div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
