import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='mainContainer'>
      <div className='appContainer'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
