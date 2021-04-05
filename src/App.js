import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Home from './components/Home'
import Jeopardy from './components/Jeopardy'
import Travelist from './components/Travelist'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/jeopardy' component={Jeopardy} />

        <Route exact path='/travelist' component={Travelist} />


      </Switch>
    </Router>
  );
}

export default App;
