import React, { useState, createContext } from 'react';
import Title from './Title';
import Com1 from './Com1';
import Com2 from './Com2';

export const makePink = createContext({});

const ForUseContext = () => {
  const [isPink, setIsPink] = useState(false);

  return (
    <makePink.Provider value={{ isPink, setIsPink }}>
      <Title text='useContext' />
      <Com1 />
      <Com2 />
    </makePink.Provider>
  );
};

export default ForUseContext;
