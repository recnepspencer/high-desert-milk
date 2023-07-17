import React from 'react';

interface AnimatedTextProps {
  className: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>∨</p>
      <p>∨</p>
      <p>∨</p>
    </div>
  );
};

export default AnimatedText;