import React from 'react';
import './App.css';
import { FooterLeft } from './components/Footer Content/Footer Left/FooterLeft';
import { FooterRight } from './components/Footer Content/Footer Right/FooterRight';
import { Header } from './components/Header/Header/Header';
import { MiddleLeft } from './components/Middle Content/Middle Left/MiddleLeft';
import { MiddleRight } from './components/Middle Content/Middle Right/MiddleRight';



function App() {
  return (
    <div className='all_body breakpoints'>
              <Header />
      <div className='app-wrapper'>

        <div className='container'><MiddleLeft /></div>
        <div className='container'><MiddleRight /></div>
        <div className='container'><FooterLeft /></div>
        <div className='container'><FooterRight /></div>
      </div>
    </div>
  );
}

export default App;
