import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";

export function ChangeRequest(request)
{
    return {type:actionsTypes.CHANGE_REQUEST,payload:request}
}

export function getRequestSuccess(request)
{
    return {type:actionsTypes.GET_REQUEST_SUCCESS,payload:request}
}

export function createRequestSuccess(request) {
    return { type: actionsTypes.CREATE_REQUEST_SUCCESS, payload: request };
  }
  
  export function updateRequestSuccess(request) {
    return { type: actionsTypes.UPDATE_REQUEST_SUCCESS, payload: request };
  }

// export function getRequest()
// {
//     return function(dispatch)
//     {
//         let  url =UrlRepository.Url_RequestList

//         return fetch(url).then(response=>response.json())
//         .then(result=>dispatch(getRequestSuccess(result)));
//     }
// }


export function getRequestDetail(token)
{
  return function(dispatch) {
    let url = UrlRepository.Url_RequestDetailList;
    return fetch(url,{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(getRequestSuccess(result)));
  };
}



  
export function saveRequestApi(request,token) {
  return fetch(UrlRepository.Url_RequestSave, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(request)
  })
    .then(handleResponce)
    .catch(handleError);

  // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
  //     method:role.id?"PUT":"POST",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify(role)
  // });
}
  
  export function updateRequestApi(request,token) {
    return fetch(UrlRepository.Url_RequestUpdate, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(request)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  

  export function saveRequest(request) {
    return function(dispatch) {
      return saveRequestApi(request)
        .then(saveRequestApi => {
          dispatch(createRequestSuccess(saveRequestApi));
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