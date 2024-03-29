import React from 'react';
import './textStyle.css';

interface TextProps {
  completed?: boolean;
  children: React.ReactNode;
}

const Text = ({ completed, children }: TextProps) => {
  return (
    <>
      <div className={`text ${completed ? 'completedText' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default Text;
