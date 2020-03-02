import * as actionsTypes from './ActionTypes'

export function ChangeRoles(roles)
{
    return {type:actionsTypes.CHANGE_ROLES,payload:roles}
}

