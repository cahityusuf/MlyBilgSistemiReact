import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPages, savePage } from "../../../Redux/Actions/PageAction";
import AddPage from "./AddPage";


function NewPage({ getPages, savePage, updatePage, pages, history, ...props }) {
  const [page, setPage] = useState({ ...props.page });

  useEffect(() => {
    if (pages.length === 0) {
      getPages();
    }
    setPage({ ...props.page });
  }, [props.page]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPage(previousRole => ({
      ...previousRole,
      [name]: name === value
    }));
  }

  function handleSave(params) {
    params.preventDefault();
    savePage(page).then(() => {
      history.push("/");
    });
  }

  return <AddPage role={page} onChange={handleChange} onSave={handleSave} />;
}

export function getRoleById(pages, Id) {
  let page = pages.find(page => page.Id === Id) || null;
  return page;
}

function mapStateToProps(state) {
    return {
      pages: state.pageListReducer,
    };
  }

const mapDispatchToProps = {
  getPages,
  savePage
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage );
