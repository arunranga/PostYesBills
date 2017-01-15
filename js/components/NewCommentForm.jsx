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
    this.props.addComment(this.state.commentText, this.props.location);
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

          <label>Comment: <br/>
            <textarea
              value={this.state.commentText}
              onChange={this.handleChange.bind(this)}></textarea>
          </label>

          <button onClick={this.addComment.bind(this)}>
            Submit
          </button>

        </form>
      </div>
    );
  }
}
