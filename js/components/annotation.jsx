import React from "react";
const Annotation = props => {
  return (
      <marquee>THIS IS THE TEST DIV (it's actually a marquee hehehe)</marquee>
  );
};


BillHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  sponsor: React.PropTypes.integer.isRequired
};
