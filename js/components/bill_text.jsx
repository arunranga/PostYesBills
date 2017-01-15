import React from "react";

class BillText extends React.Component {
  constructor(props) {
    super(props);
  }

  createAnnotation(yPos, text) {
    console.log(text);
    console.log(yPos);
  }

  displayAnnotation(text) {
    console.log(text);
  }

  highlightHandler(e) {
    debugger
    let text = document.getSelection();
    // debugger
    if(text !== '' && !e.currentTarget.getAttribute("data-selected")) {
      this.createAnnotation(e.pageY, text);
    } else {
      this.displayAnnotation(text);
    }
  }

  render() {
    if (!this.props.text) {
      return (
        <div>LOADING...</div>
      );
    } else {
      let sentences = this.props.text.split(" ").map( (sentence, idx) => {
        return <span data-selected={false}
                     key={idx}
                     onClick={this.highlightHandler.bind(this)}>{sentence}. </span>;
      });
      return (
        <div className="bill-text">
          {sentences}
        </div>
      );
    }
  }
}

export default BillText;
