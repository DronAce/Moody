import React from 'react';
import Chat from './Chat'
import Sidebar from './Sidebar'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__body">
        <Router>

          <Switch>
          <Sidebar />

            <Route path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route path="/">
              <Chat /> 
            </Route>

          </Switch>

        </Router>
      </div>
    </div>
  );
}


export default App;
