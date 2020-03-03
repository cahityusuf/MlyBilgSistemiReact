import * as actionsTypes from './ActionTypes'

export function getPageSuccess(login)
{
    return {type:actionsTypes.GET_LOGIN_SUCCESS,payload:login}
}

export function getToken()
{
    return function(dispatch)
    {
        let  url ="https://localhost:44335/api/auth/loginemail"

        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getPageSuccess(result)));
    }
}