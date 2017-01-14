import React, { Component } from 'react';

import BillList from './components/BillList';
import HotBill from './components/HotBill';

export default class App extends Component {
  render() {
    return (
      <div className="App">
		<div className="container home">
			<HotBill />
			<BillList />
		</div>
      </div>
    );
  }
}
