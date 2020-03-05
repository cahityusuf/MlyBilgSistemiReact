import * as actionsTypes from './ActionTypes'

export function getRolesPagesSuccess(rolesId)
{
    return {type:actionsTypes.GET_ROLES_PAGES_SUCCESS,payload:rolesId}
}

export function getRolesPages(rolId)
{
    return function(dispatch)
    {
        
       let  url ="https://localhost:44335/api/rolespages/listdetail"
       if(rolId)
       {
           url = url +"?roleId="+rolId
       }

        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getRolesPagesSuccess(result)));
    }
}