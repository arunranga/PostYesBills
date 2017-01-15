import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
// import Store from './store/store';
import configureStore from './store/configureStore';
import App from './App';
import Template from './containers/Template';
import Home from './containers/Home';
import BillPageContainer from "./containers/BillPageContainer";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="template" component={Template} />
        <Route path="/bills/:billNo" component={BillPageContainer} />
      </Route>
    </Router>
  </Provider>
)

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
