import React from 'react';
import { Link } from 'react-router-dom';
import './VideosPage.css';

class VideoCard {
  constructor(title, thumbnail, link) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
  }

  create() {
    return (
      <div className="video-card">
        <img src={this.thumbnail} alt={this.title} />
        <h2>{this.title}</h2>
        <a
          href={this.link}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-button"
        >
          Watch Video
        </a>
      </div>
    );
  }
}

const VideosPage = () => {
  const videosData = [
    new VideoCard(
      'How to release Stress and Overthinking',
      '/ResourceLibraryImages/video1.jpg',
      'https://www.youtube.com/watch?v=RCheYNZN88k'
    ),
    new VideoCard(
      'Inspiring Speech on Mental Health',
      '/ResourceLibraryImages/video2.jpg',
      'https://www.youtube.com/watch?v=2NZDp0E-HFc'
    ),
    new VideoCard(
      'Rebuild Yourself',
      '/ResourceLibraryImages/video3.jpg',
      'https://www.youtube.com/watch?v=6OLhDIpvu9w'
    ),
    // Add more video data as needed...
  ];

  return (
    <div className="video-page">
      <h1>Videos</h1>
      <div className="video-list">
        <Link to="/" className="go-back-button">
          Back to HomePage
        </Link>
        {videosData.map((video, index) => (
          <div key={index}>{video.create()}</div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
