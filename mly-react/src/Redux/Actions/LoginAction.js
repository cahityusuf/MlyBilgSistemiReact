import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";

export function getLoginSuccess(login)
{
    return {type:actionsTypes.GET_LOGIN_SUCCESS,payload:login}
}

export function createLoginSuccess(login) {
    return { type: actionsTypes.CREATE_LOGIN_SUCCESS, payload: login };
  }

export function getToken()
{
    return function(dispatch)
    {
        let  url ="https://localhost:44335/api/auth/loginemail"

        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(createLoginSuccess(result)));
    }
}





export function saveTokenApi(login) {
    return fetch(UrlRepository.Url_LoginSave, {
      method: "POST",
      headers: { "content-type": "application/json","Accept": "application/json" },
      body: JSON.stringify(login)
    })
    .then(handleResponce)
    .catch(handleError);
  
  }

  export function saveToken(login) {
    return function(dispatch) {
      return saveTokenApi(login)
        .then(savedToken => {
          dispatch(createLoginSuccess(savedToken));
        })
        .catch(error => {
          throw error;
        });
    };
  }


  export async function handleResponce(response){

    if(response.ok)
    {
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