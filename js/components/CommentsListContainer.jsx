import React from "react";

export default class CommentsListContainer extends React.Component {
  render () {
    const { comments } = this.props;
    let commentDivs = comments.map( (comment, idx) => {
      let loc = comment.location + 270;
      return <div className="comment"
           style={ {marginTop: `${loc}px`} }
           key={idx}>
        {comment.text}
      </div>;
      return (
        <div className="comment"
           key={idx}
        >
          <div style={ { fontWeight: 'bold' } }>
            {comment.user || 'arun'}
          </div>
          <br />
          {comment.text}
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
