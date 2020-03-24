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

export function getRequestType(token)
{
    return function(dispatch)
    {
        let  url =UrlRepository.Url_RequestTypeList

        return fetch(url,{
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          }
        }).then(response=>response.json())
        .then(result=>dispatch(getRequestTypeSuccess(result)));
    }
}

  
  export function saveRequestTypeApi(requestType,token) {
    return fetch(UrlRepository.Url_RequestTypeSave, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(requestType)
    })
      .then(handleResponce)
      .catch(handleError);
  
  }
  
  export function updateRequestTypeApi(requestType,token) {
    return fetch(UrlRepository.Url_RequestTypeUpdate, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
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