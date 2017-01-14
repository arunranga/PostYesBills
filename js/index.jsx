import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store/store';


// components

import App from './App';
// import Template from './containers/Template';
import Home from './components/Home';
import BillPage from './components/BillPage';

const router = (
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/bill/:id" component={BillPage} />
      </Route>
    </Router>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(router, root);
});
