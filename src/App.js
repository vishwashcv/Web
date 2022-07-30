import React from 'react';
import './App.css';
import vishwash from './images/vishwash_profile.png';

function App() {
  return (
    <div className="App" >
      <div className="App-front">
      <div class="loader-wrapper">
      <span class="loader"><span class="loader-inner"></span></span>
      </div>
      <div className='square'></div>
      <div className='square-1'></div>
      <div className='square-2'></div>
      <img src={vishwash} className="back-logo"/>
      <div className='black'>
        <div className='nav'>
            
        </div>
        <div className='front-content'>
          <h1>Hi, I'm Vishwash</h1>
          <h4 className='front-content-1'>I am passionate about designing and developing UI and websites using latest technologies, here are some sample projects added which I have developed on my own interest.</h4>
        </div>
        </div>

        <main>
        <div>
            <img src={vishwash} alt="circle"/>
        </div>
         </main>
        
      </div>
    </div>
  );
}

export default App;
