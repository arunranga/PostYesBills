import React from "react";

import CommentRatings from './CommentRatings';

export default class CommentsListContainer extends React.Component {
  render () {
    const { comments } = this.props;
    let commentDivs = comments.map( (comment, idx) => {
      let loc = comment.location + 270;
      return (
        <div
          className="comment-form comment"
          style={ {top: `${loc}px`} }
          key={idx}
        >
          <p className="annotation-by">Annotation by <span className="user">{comment.user || 'arun'}</span></p>
          <p>{comment.text}</p>
          <CommentRatings down={0} up={0} />
        </div>
      );
    });

    return (
      <div className="comments-list-container">
        { comments ? commentDivs : <div>Highlight text to the left to leave a comment!</div> }
      </div>
    );
  }
}
