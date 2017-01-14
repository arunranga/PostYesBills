import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store/store';
import Bill from './Bill';

// components

import App from './App';
import Template from './containers/Template';

const router = (
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Template} />
        <Route path="template" component={Template} />
      </Route>
      <Route path="/bill/:id" component={Bill} />
    </Router>
  </Provider>

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(router, root);
});
