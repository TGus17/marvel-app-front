import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Home, Register, Profile } from '../pages';

function index() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route exact path='/home' component={ Home } />
      <Route exact path='/register' component={ Register } />
      <Route exact path='/profile' component={ Profile } />
    </Switch>
  );
}

export default index;
