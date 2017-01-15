import React from "react";
export default class CommentsListContainer extends React.Component {
  render () {
    const { comments } = this.props;

    return (
      <div
        className="comments-list-container"
      >
        { comments ? this.comments : <div>Highlight text to the left to leave a comment!</div> }
      </div>
    );
  }
};
