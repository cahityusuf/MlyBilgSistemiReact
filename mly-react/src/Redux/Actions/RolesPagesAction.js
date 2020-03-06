import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";


export function getRolesPagesSuccess(rolesId)
{
    return {type:actionsTypes.GET_ROLES_PAGES_SUCCESS,payload:rolesId}
}

export function createRolesPagesSuccess(rolesPages) {
    return { type: actionsTypes.CREATE_ROLES_PAGES_SUCCESS, payload: rolesPages };
  }
  
  export function updateRolesPagesSuccess(rolesPages) {
    return { type: actionsTypes.UPDATE_ROLES_PAGES_SUCCESS, payload: rolesPages };
  }

export function getRolesPages(rolId)
{
    return function(dispatch)
    {
        
       let  url =UrlRepository.Url_RolesPagesDetailList

       if(rolId)
       {
           url = url +"?roleId="+rolId
       }

        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getRolesPagesSuccess(result)));
    }
}

export function saveRolesPagesApi(rolesPages) {
    return fetch(UrlRepository.Url_RolesPagesSave, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(rolesPages)
    })
      .then(handleResponce)
      .catch(handleError);
  
    // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
    //     method:role.id?"PUT":"POST",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(role)
    // });
  }
  
  export function updateRolesPagesApi(rolesPages) {
    return fetch(UrlRepository.Url_RolesPagesUpdate, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(rolesPages)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  
  export function saveRolesPages(rolesPages) {
    return function(dispatch) {
      return saveRolesPagesApi(rolesPages)
        .then(savedRolesPage => {
          dispatch(createRolesPagesSuccess(savedRolesPage));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export function updateRolesPages(rolesPages) {
    return function(dispatch) {
      return updateRolesPagesApi(rolesPages)
        .then(updateRolesPages => {
          dispatch(updateRolesPagesSuccess(updateRolesPages));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export async function handleResponce(response){
      if(response.ok){
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
