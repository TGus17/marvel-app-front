import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages';

function index() {
  return (
    <Switch>
      <Route path='/' component={ Login } />
    </Switch>
  );
}

export default index;
