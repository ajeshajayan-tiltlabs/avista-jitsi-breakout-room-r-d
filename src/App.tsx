import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'home'} className='App-link'>
          Dig in
        </Link>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
