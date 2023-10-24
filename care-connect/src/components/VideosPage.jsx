import React from 'react';
import { Link } from 'react-router-dom';
import './VideosPage.css'; // Import the CSS file

const videosData = [
  {
    title: 'How to release Stress and Overthinking',
    thumbnail: './ResourceLibraryImages/video1.jpg',
    link: 'https://www.youtube.com/watch?v=RCheYNZN88k',
  },
  {
    title: 'Inspiring Speech on Mental Health',
    thumbnail: './ResourceLibraryImages/video2.jpg',
    link: 'https://www.youtube.com/watch?v=2NZDp0E-HFc',
  },
  {
    title: 'Rebuild Yourself',
    thumbnail: './ResourceLibraryImages/video3.jpg',
    link: 'https://www.youtube.com/watch?v=6OLhDIpvu9w',
  },
  // Will add more video data as needed
];

const VideosPage = () => {
  return (
    <div className="video-page">
      <h1>Videos</h1>
      <div className="video-list">
      <Link to="/" className="go-back-button">
      Back to HomePage
      </Link>
        {videosData.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.thumbnail} alt={`Video ${index + 1}`} />
            <h2>{video.title}</h2>
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-button"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;