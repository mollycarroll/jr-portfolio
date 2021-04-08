import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Home from './components/Home'
import Jeopardy from './components/Jeopardy'
import Travelist from './components/Travelist'
import Gather from './components/Gather'
import Serapis from './components/Serapis'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/jeopardy' component={Jeopardy} />

        <Route exact path='/travelist' component={Travelist} />

        <Route exact path='/gather' component={Gather} />

        <Route exact path ='/serapis' component={Serapis} />

      </Switch>
    </Router>
  );
}

export default App;
