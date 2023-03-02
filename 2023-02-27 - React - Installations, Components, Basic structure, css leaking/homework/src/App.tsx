import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <div className="row">
          <div className="col"><Header/></div>
        </div>
        <div className="row">
          <div className="col-6"><Details/></div>
          <div className="col-6"><Skills/></div>
        </div>
    </div>
  );
}

export default App;
