import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";


export function getRequestTypeSuccess(requestType)
{
    return {type:actionsTypes.GET_REQUEST_TYPE_SUCCESS,payload:requestType}
}

export function createRequestTypeSuccess(requestType) {
    return { type: actionsTypes.CREATE_REQUEST_TYPE_SUCCESS, payload: requestType };
  }
  
  export function updateRequestTypeSuccess(requestType) {
    return { type: actionsTypes.UPDATE_REQUEST_TYPE_SUCCESS, payload: requestType };
  }

export function getRequestType()
{
    return function(dispatch)
    {
        let  url =UrlRepository.Url_RequestTypeList

        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getRequestTypeSuccess(result)));
    }
}

  
  export function saveRequestTypeApi(requestType) {
    return fetch(UrlRepository.Url_RequestTypeSave, {
      method: "POST",
      headers: { "content-type": "application/json","Accept": "application/json" },
      body: JSON.stringify(requestType)
    })
      .then(handleResponce)
      .catch(handleError);
  
    // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
    //     method:role.id?"PUT":"POST",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(role)
    // });
  }
  
  export function updateRequestTypeApi(requestType) {
    return fetch(UrlRepository.Url_RequestTypeUpdate, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestType)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  
  export function saveRequestType(requestType) {
    return function(dispatch) {
      return saveRequestTypeApi(requestType)
        .then(savedRequestType => {
          dispatch(createRequestTypeSuccess(savedRequestType));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export function updateRequestType(requestType) {
    return function(dispatch) {
      return updateRequestTypeApi(requestType)
        .then(updateRequestType => {
          dispatch(updateRequestTypeSuccess(updateRequestType));
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