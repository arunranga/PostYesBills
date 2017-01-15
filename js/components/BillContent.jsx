import React from "react";
import Quill from 'quill';
import Delta from 'quill-delta';
import Annotation from '../util/annotationFormat';
import CommentsListContainer from './CommentsListContainer';
import CommentRatings from './CommentRatings';
import NewCommentForm from './NewCommentForm';

Quill.register(Annotation);

export default class BillContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionRange: null,
      comments: []
     };

    this.handleSelection = this.handleSelection.bind(this);
    this.clearPriorRange = this.clearPriorRange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('.bill-content__text');
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );

    window.addEventListener("mousedown", this.handleClick, false);
    this.setExistingAnnotations();

    const annotations = document.getElementsByClassName("ql-editor");

    document.querySelector(".ql-editor span").classList.add('inline-annotation');

    Array.from(annotations).forEach(el => {
      el.addEventListener("click", this.displayAnnotation.bind(this));
    });
  }

  addComment(commentText, commentLocation) {
    let comments = this.state.comments.concat([{text: commentText, location: commentLocation}]);
    this.setState({comments: comments});
    this.handleClick(window);
  }

  displayAnnotation() {
    this.setState({
      panelView: "addNew"
    });
  }

  handleSave () {
    this.setState({
      panelView: null,
    });
  }

  handleSelection(range, oldRange, source) {
    if (!range || !this.quill.getContents(range.index, range.length)) {
      return;
    };

    if (range.length !== 0) {
      this.quill.formatText(range.index, range.length, "background", "#aad6fe");
      const location = this.quill.getBounds(range.index, range.length);
      this.setState({
        selectionRange: range,
        selectionLocation: ((location.top + location.bottom) / 2) - 15,
        panelView: "addNew"
      });
    }
  }

  handleClick(e) {
    this.clearPriorRange(e);
    this.removeCommentForm(e);
  }

  setExistingAnnotations() {
    const { annotations } = this.props;

    if (!annotations || annotations.length === 0) { return }

    const that = this;
    Array.from(annotations).forEach(el => {
      that.quill.formatText(parseInt(el.startIndex), parseInt(el.endIndex), "background", "#ddefff");
    });
  }

  clearPriorRange(e) {
    if (!e.target) { return }

    if (!(e.target.tagName === 'SPAN')) {
      return;
    }

    const selectionRange = this.state.selectionRange;

    if (selectionRange !== null) {
      this.quill.removeFormat(selectionRange.index, selectionRange.length);
      this.setState({ selectionRange: null });
    }
  }

  removeCommentForm(e) {
    if (!e.target) { return }

    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') {
      return;
    }

    this.setState({
      panelView: null
    });
  }

  render () {
    const {
      text,
      abillto,
      abilltodesc,
      beitenacted,
      section1,
      section1desc,
      section2,
    } = this.props;

    const { selectionRange } = this.state;

    let rightPanel;
    if (this.state.panelView === "addNew") {
      rightPanel = (
        <NewCommentForm
          range={ this.state.selectionRange }
          location={ this.state.selectionLocation }
          clearPriorRange = { this.clearPriorRange }
          addComment = {this.addComment.bind(this)}
          onSave = {this.handleSave.bind(this)}
        />
      );
    } else {
      rightPanel = (
        <CommentsListContainer
          range={ this.state.selectionRange }
          location={ this.state.selectionLocation }
          clearPriorRange = { this.clearPriorRange }
          comments={this.state.comments}
        />
      );
    }

    return (
      <div className="bill-content__container" onClick={this.handleClick}>
        <div className="bill-content">
          <p className="bill-content__abillto">
            { abillto }
            <span className="bill-content__abilltodesc">
               to repeal the Patient Protection and <span className="bill-highlighted">Affordable Care Act</span> and the Health Care and Education Act of 2010
            </span>
          </p>
          <p className="bill-content__beitenacted">
            { beitenacted }
          </p>
          <p className="bill-content__section1">
            { section1 }
          </p>
          <p className="bill-content__section1desc">
            { section1desc }
          </p>
          <p className="bill-content__section2">
            { section2 }
          </p>
          <p className="bill-content__text">
            { text }
          </p>
          <div className="bill-content__comments">
            { rightPanel }
          </div>
          <div className="static-comment comment-form comment">
            <p className="annotation-by">Annotation by <span className="user">Johanna</span></p>
            <p>Also known as ObamaCare</p>
            <CommentRatings down={6} up={78} />
          </div>
        </div>
      </div>
    );
  }
};
