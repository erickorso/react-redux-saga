import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteApp from './components/App';
import getStore from './store/getStore';

import './index.css';
import Users from './components/Users';
import Counter from './components/Counter';
import Home from './components/Home';
import UsersRedux from './components/UsersRedux';

const { store } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RouteApp path={'/users'} component={Users} />
        <RouteApp path={'/counter'} component={Counter} />
        <RouteApp path={'/users-redux'} component={UsersRedux} />
        <RouteApp path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
