import React from 'react';
import CheckBox from './CheckBox';
import DeleteBtn from './DeleteBtn';
import Text from './Text';
import './itemStyle.css';

interface ItemProps {
  onClickCheckBox(id: number): void;
  completed?: boolean;
  text: string;
  id: number;
}

const Item = ({ onClickCheckBox, completed, text, id }: ItemProps) => {
  return (
    <>
      <div className='itemContainer'>
        <CheckBox checked={completed} onClick={() => onClickCheckBox(id)} />
        <Text completed={completed}>{text}</Text>
        <DeleteBtn />
      </div>
    </>
  );
};

export default Item;
