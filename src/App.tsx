import React from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className='mainContainer'>
      <div className='appContainer'>
        <Item text='ㅎㅇ' />
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
