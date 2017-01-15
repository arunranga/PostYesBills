import React from "react";

export default class CommentsListContainer extends React.Component {
  render () {
    const { comments } = this.props;
    let commentDivs = comments.map( (comment, idx) => {
      return <div className="comment"
           style={ {marginTop: `${comment.location}px`} }
           key={idx}>
        {comment.text}
      </div>;
    });

    return (
      <div
        className="comments-list-container"
      >
        { comments ? commentDivs : <div>Highlight text to the left to leave a comment!</div> }
      </div>
    );
  }
}
