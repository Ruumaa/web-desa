import React from 'react';

const DotBg = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none
bg-[radial-gradient(circle,#73737350_1px,transparent_1px)]
bg-[size:20px_20px]
[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"
    />
  );
};

export default DotBg;
