import React from "react";

export default class NewCommentForm extends React.Component {
  render () {
    return (
      <div
        className="comments-list-container"
      >
        <div>Comment form!</div>

        <form style={ {marginTop: `${this.props.location}px`} }
          className={ this.props.display ? "comment-form" : "hide" }
          onSubmit={this.props.addComment}>

          <label>Comment: <br/>
            <textarea
              value={this.props.body}
              onChange={this.props.update}></textarea>
          </label>

          <button onClick={this.props.addComment}
            value={this.props.parentCommentId}>
            Submit
          </button>

        </form>
      </div>
    );
  }
}
