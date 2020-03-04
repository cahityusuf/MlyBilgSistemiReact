import React, { Component } from "react";
import { Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pagesActions from "../../../Redux/Actions/PageAction";

class PageList extends Component {

    componentDidMount() {
        this.props.actions.getPages();
      }

  render() {
    return (
      <div>
        <Label for="exampleSelect">Sayfayı Seçiniz</Label>
        <Input type="select" name="select" id="exampleSelect">
          {this.props.pages.map(page => (
            <option key={page.pagesId}>{page.pagesDetail}</option>
          ))}
        </Input>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pageListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPages: bindActionCreators(pagesActions.getPages, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
