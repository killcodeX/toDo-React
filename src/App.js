import React from 'react';
import './App.css';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Add from './components/layouts/add'; 
import { StateManager } from './components/context/stateManager';
import TodoList from './components/layouts/todolist';

function App() {
  return (
    <StateManager>
      <Navbar/>
      <div className='section'>
        <div className='container'>
          <Add/>
          <TodoList/>
        </div>
      </div>
      <Footer/>
    </StateManager>
  );
}

export default App;
