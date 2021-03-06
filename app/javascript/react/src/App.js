import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './main/components/Home';
import OtherPage from './main/components/OtherPage';
import DynamicPage from './main/components/DynamicPage';
import NavBar from './main/components/NavBar';

import CreateProfileFormContainer from './createProfile/containers/CreateProfileFormContainer'
import ProfileShowContainer from './showProfile/containers/ProfileShowContainer'

const App = ({ store }) => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/other' component={OtherPage} />
            <Route path='/profiles/new' component={CreateProfileFormContainer} />
            <Route path='/profiles/:id' component={ProfileShowContainer} />
            <Route path='/:dynamic' component={DynamicPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
