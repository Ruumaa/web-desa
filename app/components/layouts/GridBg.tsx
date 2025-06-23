import React from 'react';

const GridBg = () => {
  return (
    <div
      className="absolute z-0 inset-0 pointer-events-none
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:30px_30px] 
[mask-image:radial-gradient(ellipse_47%_47%_at_50%_50%,#000_80%,transparent_100%)]"
    />
  );
};

export default GridBg;
