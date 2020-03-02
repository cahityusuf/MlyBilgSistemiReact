import * as actionsTypes from './ActionTypes'

export function ChangePage(pages)
{
    return {type:actionsTypes.CHANGE_PAGES,payload:pages}
}
