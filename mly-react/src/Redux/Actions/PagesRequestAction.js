import * as actionsTypes from "./ActionTypes";
import UrlRepository from "./UrlRepository";

export function getPagesRequestSuccess(pagesId) {
  return { type: actionsTypes.GET_PAGES_REQUEST_SUCCESS, payload: pagesId };
}

export function createPagesRequestSuccess(pagesRequest) {
  return {
    type: actionsTypes.CREATE_PAGES_REQUEST_SUCCESS,
    payload: pagesRequest
  };
}

export function updatePagesRequestSuccess(pagesRequest) {
  return {
    type: actionsTypes.UPDATE_PAGES_REQUEST_SUCCESS,
    payload: pagesRequest
  };
}

export function deletePagesRequestSuccess(pagesRequest) {
  return { type: actionsTypes.DELETE_PAGES_REQUEST_SUCCESS, payload: pagesRequest };
}

export function deletePagesRequestApi(pagesRequest,token) {
  return fetch(UrlRepository.Url_PagesRequestDelete, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(pagesRequest)
  })
    .then(handleResponce)
    .catch(handleError);
}


export function deletePagesRequest(pagesRequest, token) {
  return function(dispatch) {
    return deletePagesRequestApi(pagesRequest, token)
      .then(deletePagesRequest => {
        dispatch(deletePagesRequestSuccess(deletePagesRequest));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getPagesRequest(rolesPagesId, token) {
  return function(dispatch) {
    let url = UrlRepository.Url_PagesRequestDetailList;

    if (rolesPagesId) {
      url = url + "?rolesPagesId=" + rolesPagesId;
    }

    return fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(getPagesRequestSuccess(result)));
  };
}

export function savePagesRequestApi(pagesRequest, token) {
  return fetch(UrlRepository.Url_PagesRequestSave, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(pagesRequest)
  })
    .then(handleResponce)
    .catch(handleError);

  // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
  //     method:role.id?"PUT":"POST",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify(role)
  // });
}

export function updatePagesRequestApi(pagesRequest, token) {
  return fetch(UrlRepository.Url_PagesRequestUpdate, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(pagesRequest)
  })
    .then(handleResponce)
    .catch(handleError);
}

export function savePagesRequest(pagesRequest) {
  return function(dispatch) {
    return savePagesRequestApi(pagesRequest)
      .then(savedPagesRequest => {
        dispatch(createPagesRequestSuccess(savedPagesRequest));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updatePagesRequest(pagesRequest) {
  return function(dispatch) {
    return updatePagesRequestApi(pagesRequest)
      .then(updatePagesRequest => {
        dispatch(updatePagesRequestSuccess(updatePagesRequest));
      })
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponce(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}
