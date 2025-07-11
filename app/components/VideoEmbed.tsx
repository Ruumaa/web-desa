import React from 'react';

const VideoEmbed = () => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/Myt8lmOtTJ0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Bawu video"
        className="absolute inset-0 size-full"
      />
    </>
  );
};

export default VideoEmbed;
