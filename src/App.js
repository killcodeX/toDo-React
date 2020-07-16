import React from 'react';
import './App.css';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Add from './components/layouts/add'; 

function App() {
  return (
    <>
      <Navbar/>
      <div className='section'>
        <div className='container'>
          <Add/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
