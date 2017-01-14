import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import Bill from './Bill';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home} />
    </Route>
    <Route path="/bill/:id" component={Bill}>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(router, root);
});
