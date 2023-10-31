import React from 'react';
import { Link } from 'react-router-dom';
import './OtherResourcesPage.css';

class ResourceCard {
  constructor(title, thumbnail, link) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
  }

  create() {
    return (
      <div className="resource-card">
        <img src={this.thumbnail} alt={this.title} />
        <h2>{this.title}</h2>
        <a
          href={this.link}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-link"
        >
          View Resource
        </a>
      </div>
    );
  }
}

const OtherResourcesPage = () => {
  const otherResourcesData = [
    new ResourceCard(
      'BLOG: How to support someone with a Mental Health Problem',
      '/ResourceLibraryImages/resource1.jpg',
      'https://www.mentalhealth.org.uk/explore-mental-health/articles/how-support-someone-mental-health-problem'
    ),
    new ResourceCard(
      'Study on Talk Therapy for Depression',
      '/ResourceLibraryImages/resource2.avif',
      'https://www.health.harvard.edu/heart-health/talk-therapy-for-depression-may-help-lower-heart-disease-risk'
    ),
    // Add more resource data as needed...
  ];

  return (
    <div className="other-resources-page">
      <h1>Other Resources</h1>
      <div className="resource-list">
        <Link to="/" className="go-back-button">
          Back to HomePage
        </Link>
        {otherResourcesData.map((resource, index) => (
          <div key={index}>{resource.create()}</div>
        ))}
      </div>
    </div>
  );
};

export default OtherResourcesPage;
