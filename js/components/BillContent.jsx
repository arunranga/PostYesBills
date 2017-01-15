import React from "react";

export default class BillContent extends React.Component {
  render () {
    const {
      text
    } = this.props;

    return (
      <div
        className="bill-content-container"
        style={ { marginTop: '68px' } }
      >
        <div
          className="bill-content"
          style={ { display: 'flex' } }
        >
          <div className="bill-show-text">
            { text }
          </div>
          <div className="bill-comments">
            COMMENTS
          </div>
        </div>
      </div>
    );
  }
};
