import React from "react";

export default class CommentRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			down: this.props.down,
			up: this.props.up,
    };
  }

	handleClickDown () {
		let down = this.state.down+1;

		this.setState({
			down,
		});
	}

	handleClickUp () {
		let up = this.state.up+1;

		this.setState({
			up,
		});
	}

	render () {
		return (
			<div className="comment-ratings">
				<span className="comment-ratings__thumbs-up" onClick={this.handleClickUp.bind(this)}>{this.state.up}</span>
				<span className="comment-ratings__vote">VOTE</span>
				<span className="comment-ratings__thumbs-down" onClick={this.handleClickDown.bind(this)}>{this.state.down}</span>
			</div>
		);
	}
}

