import React from 'react';
import { Link } from 'react-router-dom';
import './OtherResourcesPage.css'; // Import the CSS file

const otherResourcesData = [
  {
    title: 'BLOG: How to support someone with a Mental Health Problem',
    thumbnail: './ResourceLibraryImages/resource1.jpg',
    link: 'https://www.mentalhealth.org.uk/explore-mental-health/articles/how-support-someone-mental-health-problem',
  },
  {
    title: 'Study on Talk Therapy for Depression',
    thumbnail: './ResourceLibraryImages/resource2.avif',
    link: 'https://www.health.harvard.edu/heart-health/talk-therapy-for-depression-may-help-lower-heart-disease-risk',
  },

  // Will add more resource data as needed
];

const OtherResourcesPage = () => {
  return (
    <div className="other-resources-page">
      <h1>Other Resources</h1>
      <div className="resource-list">
      <Link to="/" className="go-back-button">
      Back to HomePage
      </Link>
        {otherResourcesData.map((resource, index) => (
          <div key={index} className="resource-card">
            <img src={resource.thumbnail} alt={`Resource ${index + 1}`} />
            <h2>{resource.title}</h2>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherResourcesPage;