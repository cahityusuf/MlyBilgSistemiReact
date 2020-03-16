import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPages, savePage } from "../../../Redux/Actions/PageAction";
import AddPage from "./AddPage";

function NewPage({ getPages, savePage, updatePage, pages, history, ...props }) {
  const [page, setPage] = useState({ ...props.page });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (pages.length === 0) {
      getPages();
    }
    setPage({ ...props.page });
  }, [props.page]);

  function handleChange(event) {

    const { name, value } = event.target;
console.log(event.target.name)
    if (event.target.name === "status") {
      if (event.target.checked === true) {
        setPage(previousRole => ({
          ...previousRole,
          [name]: name === "categoryId" ? parseInt(value, 10) : true
        }));
      } else if (event.target.checked === false) {
        setPage(previousRole => ({
          ...previousRole,
          [name]: name === "categoryId" ? parseInt(value, 10) : false
        }));
      }
    }else{
      setPage(previousRole => ({
        ...previousRole,
        [name]: name === "categoryId" ? parseInt(value, 10) : value
      }));
    }


    if (event.target.name === "pagesId") {
      getPages(value);
    }

    Validate(name, value);
  }

  function Validate(name, value) {
    if (value === "" && name === "rolId") {
      setErrors(previousErrors => ({
        ...previousErrors,
        name: "Ürün ismi olmalıdır"
      }));
    } else {
      setErrors(previousErrors => ({
        ...previousErrors,
        name: ""
      }));
    }
  }

  function handleSave(params) {
    params.preventDefault();
    console.log(page);
    // savePage(page).then(() => {
    //   history.push("/");
    // });
  }

  return (
    <AddPage
      pages={pages}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getRoleById(pages, Id) {
  let page = pages.find(page => page.Id === Id) || null;
  return page;
}

function mapStateToProps(state) {
  return {
    pages: state.pageListReducer
  };
}

const mapDispatchToProps = {
  getPages,
  savePage
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
