import React from 'react';
import CheckBox from './CheckBox';
import DeleteBtn from './DeleteBtn';
import Text from './Text';
import './itemStyle.css';

interface ItemProps {
  completed?: boolean;
  text: string;
}

const Item = ({ completed, text }: ItemProps) => {
  return (
    <>
      <div className='itemContainer'>
        <CheckBox checked={completed} />
        <Text completed={completed}>{text}</Text>
        <DeleteBtn />
      </div>
    </>
  );
};

export default Item;
