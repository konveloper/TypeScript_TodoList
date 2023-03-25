import React, { useRef, useState } from 'react';
import Item from './Item';
import InputText from './InputText';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<Todo[]>([
    {
      id: 1,
      text: 'To do List',
      completed: false,
    },
  ]);
  const nextId = useRef(2);

  // 체크박스
  const handleClickCheckBox = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // 삭제 버튼
  const handleClickDeleteBtn = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // 입력값 변경
  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  // 입력값 엔터
  const handleInputTextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      const newList: Todo = {
        id: nextId.current,
        text: inputText,
        completed: false,
      };
      setTasks(tasks.concat(newList));
      setInputText('');
      nextId.current += 1;
    }
  };
  console.log(tasks);

  return (
    <>
      {tasks.map((task) => (
        <Item
          key={`${task.id}task`}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onClickCheckBox={handleClickCheckBox}
          onClickDeleteBtn={handleClickDeleteBtn}
        />
      ))}
      <InputText
        onChange={handleInputTextChange}
        onKeyDown={handleInputTextKeyDown}
        inputText={inputText}
      />
    </>
  );
};

export default TodoList;
