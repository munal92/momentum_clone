import React from 'react';
import Home from './components/Home';
import './styles.css';
import PopperBtn from './components/PopperBtn';
import TodoPopper from './components/TodoPopper';


function App() {
  return (
    <>
      <Home/>
      <TodoPopper/>
      <PopperBtn/>
    </>
  );
}

export default App;
