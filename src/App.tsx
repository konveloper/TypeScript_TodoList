import React from 'react';
import './App.css';
import TodoList from 'components/TodoList';

function App() {
  return (
    <div className='mainContainer'>
      <div className='appContainer'>
        <TodoList />
        <input
          type='text'
          className='inputText'
          placeholder='내용을 입력하세요.'
        />
      </div>
    </div>
  );
}

export default App;
