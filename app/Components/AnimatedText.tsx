import React from 'react';

interface AnimatedTextProps {
  size: string;
  color: string;
  marginTop: number;
  animate: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({size, color, marginTop, animate}) => {
  let classes = `mt-[${marginTop}px] opacity-80 leading-none text-${size} text-${color}`;
  
  if (animate) {
    classes += ' self-center animate-pulse';
  }

  return (
    <div className={animate ? 'self-center animate-pulse' : ''}>
      <p className={classes}>∨</p>
      <p className={classes}>∨</p>
      <p className={classes}>∨</p>
    </div>
  );
};

export default AnimatedText;