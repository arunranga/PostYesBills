import React from "react";

export default class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ""
    };
  }

  addComment(e) {
    e.preventDefault();
    this.props.addComment(this.state.commentText);
  }

  handleChange(e) {
    this.setState({commentText: e.currentTarget.value});
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render () {
    return (
      <div
        className="comments-list-container"
        onClick={this.handleClick}
      >
        <div>Comment form!</div>

        <form style={ {marginTop: `${this.props.location}px`} }
          className={ "comment-form" }
          onSubmit={this.state.addComment}>

          <label>Comment: <br/>
            <textarea
              value={this.state.commentText}
              onChange={this.handleChange.bind(this)}></textarea>
          </label>

          <button onClick={this.addComment}>
            Submit
          </button>

        </form>
      </div>
    );
  }
}
