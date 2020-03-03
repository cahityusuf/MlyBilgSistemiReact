import * as actionsTypes from './ActionTypes'

export function ChangeRoles(role)
{
    return {type:actionsTypes.CHANGE_ROLES,payload:role}
}

export function getRolesSuccess(roles)
{
    return {type:actionsTypes.GET_ROLES_SUCCESS,payload:roles}
}

export function getRoles()
{
    return function(dispatch)
    {
        let  url ="https://localhost:44335/api/roles/list"

        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getRolesSuccess(result)));
    }
}
