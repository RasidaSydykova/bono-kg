import React, { useState } from 'react';
import './Video.scss';

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <div className="video-block">
      {isVideoPlaying ? (
        <iframe
          className="video"
          src="https://www.youtube.com/embed/jh4C7w-dvho?autoplay=1&rel=0&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="img container">
          <img className="image" src="/video/video-block-img.jpg" alt="Video" />
          <button
            className="button"
            onClick={() => {
              setIsVideoPlaying(true);
            }}
          >
            <img src="/icons/video/play.svg" alt="#" />
          </button>
          <div className="info">
            <span>Оцените лучший ресторан - Бар</span>
            <p>
              и проведите время с чутким персоналом которые обслужат вас и ваших гостей в самом
              лучшем формате!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
