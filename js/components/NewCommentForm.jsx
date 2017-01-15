import React from "react";
import CommentRatings from './CommentRatings';

export default class NewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "Got something to say?"
    };
  }

  componentDidMount () {
    this.refs.textarea.focus();
    this.refs.textarea.select();
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

  commentDivs() {
    const { comments } = this.props;

    let divs = comments.map( (comment, idx) => {
      let loc = comment.location + 270;

      return (
        <div>
          <p className="annotation-by">Annotation by <span className="user">{comment.user || 'arun'}</span></p>
          <p>{comment.text}</p>
          <CommentRatings down={0} up={0} />
        </div>
      );
    });

    return <div>{ divs }</div>;
  }

  render () {
    let loc = this.props.location + 270;
    const { comments } = this.props;

    return (
      <div
        className="comments-list-container comment-form"
        onClick={this.handleClick}
        style={ {marginTop: `${loc}px`} }
      >
        { comments ? this.commentDivs() : null }

        <form
          onSubmit={this.addComment.bind(this)}
        >
          <textarea
            className="comment-textarea"
            defaultValue={this.state.commentText}
            onChange={this.handleChange.bind(this)}
            ref="textarea"
          />
          <button className="comment-submit" onClick={this.addComment.bind(this)}>
            Post
          </button>
        </form>
      </div>
    );
  }
}
