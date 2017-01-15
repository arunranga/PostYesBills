import React from "react";

export default class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "Got something to say?"
    };
  }

  addComment(e) {
    e.preventDefault();
    this.props.addComment(this.state.commentText, this.props.location);
    this.props.onSave();
  }

  handleChange(e) {
    this.setState({commentText: e.currentTarget.value});
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render () {
    let loc = this.props.location + 270;
    return (
      <div className="comments-list-container" onClick={this.handleClick}>

        <form style={ {marginTop: `${loc}px`} }
          className={ "comment-form" }
          onSubmit={this.addComment.bind(this)}>
            <textarea
              className="comment-textarea"
              defaultValue={this.state.commentText}
              onChange={this.handleChange.bind(this)}
              />
          <button className="comment-submit" onClick={this.addComment.bind(this)}>
            Post
          </button>

        </form>
      </div>
    );
  }
}
