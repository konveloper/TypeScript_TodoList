import React from 'react';
import './inputTextStyle.css';

interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  inputText: string;
}

const InputText = ({ onChange, onKeyDown, inputText }: InputTextProps) => {
  return (
    <>
      <input
        type='text'
        className='inputText'
        placeholder='내용 입력 후 엔터를 누르세요.'
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        value={inputText}
      />
    </>
  );
};

export default InputText;
