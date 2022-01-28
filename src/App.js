
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextCount" mode={mode} toggleMode={toggleMode} />
        <div className="container mb-5">
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyse." mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;
