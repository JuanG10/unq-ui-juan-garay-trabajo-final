import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSSs/App.css';

import Main from './Main'
import '../CSSs/Main.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="*" render={() => <div className="NotFound">NotFound</div>} />
      </Switch>
    </Router>
  );
}

export default App;

/*
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
*/