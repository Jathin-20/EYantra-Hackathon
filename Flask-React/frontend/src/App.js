
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">


       <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link className="App-link" to="/page2">Page2</Link>
          </div>
          <Switch>
            <Route exact path="/">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                
            </Route>
            <Route path="/page2">
                <p>This is page 2!</p>
            </Route>
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
