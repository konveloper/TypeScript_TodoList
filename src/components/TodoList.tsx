import React, { useRef, useState } from 'react';
import Item from './Item';

interface TodoListProps {}

const TodoList = () => {
  const [tasks, setTasks] = useState([
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

  const handleClickCheckBox = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClickDeleteBtn = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      {tasks.map((task) => (
        <Item
          id={task.id}
          text={task.text}
          completed={task.completed}
          onClickCheckBox={handleClickCheckBox}
          onClickDeleteBtn={handleClickDeleteBtn}
        />
      ))}
    </div>
  );
};

export default TodoList;
