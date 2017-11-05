import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import OtherPage from './components/OtherPage';
import DynamicPage from './components/DynamicPage';

const App = ({ store }) => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/other' component={OtherPage} />
          <Route path='/:dynamic' component={DynamicPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
