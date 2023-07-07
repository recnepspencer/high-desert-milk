import React from 'react';

interface SideArrowButton {
  width: string;
}

const SideArrowButton: React.FC<SideArrowButton> = ({width}) => {
  const classes = `w-${width} bg-home-blue rounded text-white`;

  return (
      <img src="side-arrow.png" alt="" className={classes} />
  );
};

export default SideArrowButton;