import React from 'react';
import './App.css';
import SwagWagon from './SwagWagon'
import Tesla from './Tesla'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cars React</h1>
        <SwagWagon />
      </header>
      <main>
      <a className="App-link"
          href="https://www.pixar.com/feature-films/cars"
          target="_blank"
          rel="noopener noreferrer">Link to the only cars dealership that matters.. PIXAR BABY
        </a>
        <Tesla />
      </main>
    </div>
  );
}

export default App;
