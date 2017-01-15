import React, { Component } from 'react';

import BillListContainer from '../containers/BillListContainer';
import HotBillContainer from '../containers/HotBillContainer';

export default class Home extends Component {
  render() {
    return (
      <div className="container home">
      	<h1 className="home-header">Actual Policy</h1>
      	<h2 className="home-subheader">Get to the bottom of things. The Source.</h2>
        <HotBillContainer />
        <BillListContainer />
      </div>
    );
  }
}
