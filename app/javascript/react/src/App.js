import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import OtherPage from './components/OtherPage';
import DynamicPage from './components/DynamicPage';

const App = props => {
  return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/other' component={OtherPage} />
          <Route path='/:dynamic' component={DynamicPage} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
