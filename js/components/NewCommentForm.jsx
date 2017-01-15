import React from "react";

export default class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ""
    };
  }

  handleChange(e) {
    this.setState({commentText: e.currentTarget.value});
  }

  render () {
    return (
      <div
        className="comments-list-container"
      >
        <div>Comment form!</div>

        <form style={ {marginTop: `${this.props.location}px`} }
          className={ "comment-form" }
          onSubmit={this.props.addComment}>

          <label>Comment: <br/>
            <textarea
              value={this.state.commentText}
              onChange={this.handleChange}></textarea>
          </label>

          <button onClick={this.props.addComment}>
            Submit
          </button>

        </form>
      </div>
    );
  }
}
