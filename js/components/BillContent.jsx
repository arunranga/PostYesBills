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
      selectionLocation: null,
      comments: [],
      panelView: null
     };

    this.handleSelection = this.handleSelection.bind(this);
    this.clearPriorRange = this.clearPriorRange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('.bill-content__text');
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );

    // window.addEventListener("mousedown", this.handleClick, false);
    this.setExistingAnnotations();

    document.querySelector(".ql-editor span").classList.add('inline-annotation');

    const annotations = document.getElementsByClassName("inline-annotation");

    Array.from(annotations).forEach(el => {
      el.addEventListener("click", this.displayAnnotation.bind(this));
    });
  }

  addComment(commentText, commentLocation) {
    let comments = this.state.comments.concat([{text: commentText, location: commentLocation}]);
    this.setState({comments: comments});
    this.handleClick(window);
  }

  displayAnnotation(e) {
    this.setState({
      panelView: "addNew",
      selectionLocation: e.pageX - 450
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
      <div className="bill-content__container">
        <div className="bill-content">
          <p className="bill-content__abillto">
            { abillto }
            <span className="bill-content__abilltodesc">
              { abilltodesc }
            </span>
          </p>
          <p className="bill-content__beitenacted">
            { beitenacted }
          </p>
          <p className="bill-content__section1">
            { section1 }
          </p>
          <p className="bill-content__section1desc">
            { section1desc } <span className="bill-highlighted">``` Obamacare Repeal Act".</span>
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
            <p>Steve King’s proposal has finally been considered under budget reconciliation. While it is true that many insurers are leaving the insurance exchange, some of this may be due to bad math on the part of the initial planning pool — that is, not enough of the young and healthy entered the pool. Instead of repeal act, a mechanism to fix the insurance pool problems would be much better. What’s needed is better actuarial science — that’s the kind of overhaul that would serve us well.</p>
            <CommentRatings down={3} up={14} />
          </div>
        </div>
      </div>
    );
  }
};
