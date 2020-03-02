import * as actionsTypes from './ActionTypes'

export function ChangeRequest(requestName)
{
    return {type:actionsTypes.CHANGE_REQUEST,payload:requestName}
}
