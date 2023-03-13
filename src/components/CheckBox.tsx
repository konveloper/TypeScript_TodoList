import React from 'react';
import './checkBoxStyle.css';

interface CheckBoxProps {
  checked?: boolean;
  onClick?(): void;
}

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <>
      <div className='CheckBoxContainer' onClick={onClick}>
        <div className='checkIcon'>{checked && '✔︎'}</div>
      </div>
    </>
  );
};

export default CheckBox;
