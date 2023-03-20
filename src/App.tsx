import React from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className='mainContainer'>
      <div className='appContainer'>
        <Item text='테스트' />
        <Item text='테스트 테스트' />
        <Item
          text='테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 '
          completed
        />
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
