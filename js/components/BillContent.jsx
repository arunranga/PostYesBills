import React from "react";
import Quill from 'quill';
import Delta from 'quill-delta';
import Annotation from '../util/annotationFormat';
import CommentsListContainer from './CommentsListContainer';
import NewCommentForm from './NewCommentForm';

Quill.register(Annotation);

export default class BillContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionRange: null,
     };

    this.handleSelection = this.handleSelection.bind(this);
    this.clearPriorRange = this.clearPriorRange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('.bill-show-text');
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
    window.addEventListener("mousedown", this.handleClick, false);
  }

  handleSelection(range, oldRange, source) {
    if (!range || !this.quill.getContents(range.index, range.length)) {
      return;
    };

    if (range.length !== 0) {
      this.quill.formatText(range.index, range.length, "background", "#ffff64");
      const location = this.quill.getBounds(range.index, range.length);
      this.setState({
        selectionRange: range,
        selectionLocation: ((location.top + location.bottom) / 2) - 15,
        panelView: "addNew"
      });
    }
  }

  handleClick(e) {
    this.clearPriorRange();
    this.removeCommentForm();
  }

  clearPriorRange() {
    const selectionRange = this.state.selectionRange;

    if (selectionRange !== null) {
      this.quill.removeFormat(selectionRange.index, selectionRange.length);
      this.setState({ selectionRange: null });
    }
  }

  removeCommentForm() {

  }

  render () {
    const {
      text
    } = this.props;

    const { selectionRange } = this.state;

    let rightPanel;
    if (this.state.panelView === "addNew") {
      rightPanel = (
        <NewCommentForm
          range={ this.state.selectionRange }
          location={ this.state.selectionLocation }
          clearPriorRange = { this.clearPriorRange }
        />
      );
    } else {
      rightPanel = (
        <CommentsListContainer
          range={ this.state.selectionRange }
          location={ this.state.selectionLocation }
          clearPriorRange = { this.clearPriorRange }
        />
      );
    }

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
          <div
            className="bill-comments"
            style={ { minWidth: '500px' } }
          >
            { rightPanel }
          </div>
        </div>
      </div>
    );
  }
};
