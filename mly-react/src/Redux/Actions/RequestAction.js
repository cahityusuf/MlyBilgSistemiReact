import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";

export function ChangeRequest(requestName)
{
    return {type:actionsTypes.CHANGE_REQUEST,payload:requestName}
}

export function getRequestSuccess(request)
{
    return {type:actionsTypes.GET_REQUEST_SUCCESS,payload:request}
}

export function createRequestSuccess(roles) {
    return { type: actionsTypes.CREATE_REQUEST_SUCCESS, payload: roles };
  }
  
  export function updateRequestSuccess(roles) {
    return { type: actionsTypes.UPDATE_REQUEST_SUCCESS, payload: roles };
  }

export function getRequest()
{
    return function(dispatch)
    {
        let  url ="https://localhost:44335/api/roles/list"

        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getRequestSuccess(result)));
    }
}

  
  export function saveRequestApi(role) {
    return fetch(UrlRepository.Url_RequestSave, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(role)
    })
      .then(handleResponce)
      .catch(handleError);
  
    // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
    //     method:role.id?"PUT":"POST",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(role)
    // });
  }
  
  export function updateRequestApi(request) {
    return fetch(UrlRepository.Url_RequestUpdate, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(request)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  
  export function saveRequest(request) {
    return function(dispatch) {
      return saveRequestApi(request)
        .then(savedRequest => {
          dispatch(createRequestSuccess(savedRequest));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export function updateRequest(request) {
    return function(dispatch) {
      return updateRequestApi(request)
        .then(updateRequest => {
          dispatch(updateRequestSuccess(updateRequest));
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