import React from 'react';
import { BsTrash } from 'react-icons/bs/';
import './deleteBtnStyle.css';

interface DeleteBtnProps {
  onClick?(): void;
}

const DeleteBtn = ({ onClick }: DeleteBtnProps) => {
  return (
    <>
      <div className='deleteBtnContainer' onClick={onClick}>
        <BsTrash />
      </div>
    </>
  );
};

export default DeleteBtn;
