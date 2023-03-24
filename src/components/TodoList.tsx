import React, { useRef, useState } from 'react';
import Item from './Item';

interface TodoListProps {}

const TodoList = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      text: '할 일 1',
      completed: false,
    },
    {
      id: 2,
      text: '할 일 2',
      completed: false,
    },
    {
      id: 3,
      text: '할 일 3',
      completed: true,
    },
  ]);
  const nextId = useRef(4);

  return (
    <div>
      {task.map((task) => (
        <Item text={task.text} completed={task.completed} />
      ))}
    </div>
  );
};

export default TodoList;
