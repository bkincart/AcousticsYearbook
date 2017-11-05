import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import OtherPage from './components/OtherPage';
import DynamicPage from './components/DynamicPage';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/other' component={OtherPage} />
      <Route path='/:dynamic' component={DynamicPage} />
    </Router>
  )
}

export default App;
