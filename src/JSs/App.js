import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSSs/App.css';

import Main from './Main'
import '../CSSs/Main.css'
import Resultado from './Resultado'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Resultado" component={Resultado} />
        <Route path="/" component={Main} />
        <Route path="*" render={() => <div id="NotFound">Not Found 404</div>} />
      </Switch>
    </Router>
  );
}

export default App;