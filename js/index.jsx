import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store/store';
import Bill from './Bill';
import { BillPageContainer } from "./components/bill_page_container";
import Home from './containers/Home';
import Template from './containers/Template';
import App from './App';
import BillPageContainer from "./components/bill_page_container";

const router = (
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Template} />
        <Route path="template" component={Template} />
        <Route path="/bills/:billNo" component={BillPageContainer} />
      </Route>
    </Router>
  </Provider>

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(router, root);
});
