import React, { Component } from 'react';

export default class Navbar extends Component {
  render () {
    return (
			<div className="navbar">
				<ul className="nav-links">
					<li className="nav-links__item active">
						<a className="nav-link" href="#">Home</a>
						</li>
					<li className="nav-links__item">
						<a className="nav-link" href="#">Bills</a>
						</li>
					<li className="nav-links__item">
						<a className="nav-link" href="#">Learn</a>
						</li>
				</ul>
				<ul className="login">
					<li className="login__item login__item--is_login">
						<a className="nav-link" href="#">Log in</a>
					</li>
					<li className="login__item login__item--is_signup">
						<a className="nav-link" href="#">Sign up</a>
					</li>
				</ul>
			</div>
    );
  }
}


