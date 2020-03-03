import * as actionsTypes from './ActionTypes'

export function ChangeRequest(requestName)
{
    return {type:actionsTypes.CHANGE_REQUEST,payload:requestName}
}

export function getRequestSuccess(request)
{
    return {type:actionsTypes.GET_REQUEST_SUCCESS,payload:request}
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