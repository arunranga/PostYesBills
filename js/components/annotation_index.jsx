import React from "react";

class AnnotationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAnnotations();
  }

  componentWillReceiveProps() {
    this.props.fetchAnnotations();
  }

  render() {
    let annotations = this.props.annotations.map( (annotation) => {
      return (
        <div className="annotation">
          This is an annotation
          <CommentIndex comments={annotation.comments}/>
          <CommentForm/>
        </div>
      );
    });

    return (
      <div className="annotation-index">
        annotations here:
        {annotations}
      </div>
    );
  }
}

const CommentIndex = props => {
  let comments = props.comments.map( (comment, idx) => {
    return (
      <div key={idx}>
        {comment.text}
      </div>
    );
  });
  return (
    <div className="comment-index">
      comments here:
      {comments}
    </div>
  );
};

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  updateText (e) {
    this.setState({text: e.target.value});
  }

  render () {
    return(
      <form
        onSubmit={props.addComment}>

        <label>Comment:
          <textarea
            value={this.state.text}
            onChange={this.updateText}></textarea>
        </label>

        <button onClick={props.addComment}
          value={props.parentCommentId}>
          Submit
        </button>

      </form>
    );
  }
}

export default AnnotationIndex;
