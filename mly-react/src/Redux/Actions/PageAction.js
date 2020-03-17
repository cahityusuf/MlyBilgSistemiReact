import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";

export function ChangePage(page)
{
    return {type:actionsTypes.CHANGE_PAGES,payload:page}
}

export function getPageSuccess(pages)
{
    return {type:actionsTypes.GET_REQUEST_SUCCESS,payload:pages}
}

export function createPagesSuccess(pages) {
    return { type: actionsTypes.CREATE_PAGES_SUCCESS, payload: pages };
  }
  
  export function updatePagesSuccess(pages) {
    return { type: actionsTypes.UPDATE_PAGES_SUCCESS, payload: pages };
  }


export function getPages()
{
    return function(dispatch)
    {
        return fetch(UrlRepository.Url_PageList).then(response=>response.json())
        .then(result=>dispatch(getPageSuccess(result)));
    }
}

export function savePageApi(page) {
    return fetch(UrlRepository.Url_PageSave, {
      method: "POST",
      headers: { "content-type": "application/json","Accept": "application/json" },
      body: JSON.stringify(page)
    })
      .then(handleResponce)
      .catch(handleError);
  
    // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
    //     method:role.id?"PUT":"POST",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(role)
    // });
  }
  
  export function updatePageApi(page) {
    return fetch(UrlRepository.Url_PageUpdate, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(page)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  
  export function savePage(page) {
    return function(dispatch) {
      return savePageApi(page)
        .then(savedPage => {
          dispatch(createPagesSuccess(savedPage));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export function updatePage(page) {
    return function(dispatch) {
      return updatePageApi(page)
        .then(updatePage => {
          dispatch(updatePagesSuccess(updatePage));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export async function handleResponce(response){
      if(response.ok){
          return response.json()
      }
      const error = await response.text()
      throw new Error(error)
  }
  
  export function handleError(error)
  {
      console.error("Bir hata oluştu")
      throw error;
  }
