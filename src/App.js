import React from 'react';
import Chat from './Chat'
import Sidebar from './Sidebar'
import './App.css';


function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
