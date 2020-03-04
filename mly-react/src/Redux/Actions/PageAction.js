import * as actionsTypes from './ActionTypes'

export function ChangePage(page)
{
    return {type:actionsTypes.CHANGE_PAGES,payload:page}
}

export function getPageSuccess(pages)
{
    return {type:actionsTypes.GET_REQUEST_SUCCESS,payload:pages}
}

export function getPages()
{
    return function(dispatch)
    {
        let  url ="https://localhost:44335/api/pages/list"

        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getPageSuccess(result)));
    }
}
