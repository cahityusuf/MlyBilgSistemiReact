import * as actionsTypes from "./ActionTypes";
import UrlRepository from "./UrlRepository";

export function ChangeRoles(role) {
  return { type: actionsTypes.CHANGE_ROLES, payload: role };
}

export function getRolesSuccess(roles) {
  return { type: actionsTypes.GET_ROLES_SUCCESS, payload: roles };
}

export function createRolesSuccess(roles) {
  return { type: actionsTypes.CREATE_ROLES_SUCCESS, payload: roles };
}

export function updateRolesSuccess(roles) {
  return { type: actionsTypes.UPDATE_ROLES_SUCCESS, payload: roles };
}

export function saveRoleApi(role) {
  return fetch(UrlRepository.Url_RoleSave, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(role)
  })
    .then(handleResponce)
    .catch(handleError);

  // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
  //     method:role.id?"PUT":"POST",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify(role)
  // });
}

export function updateRoleApi(role) {
  return fetch(UrlRepository.Url_RoleUpdate, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(role)
  })
    .then(handleResponce)
    .catch(handleError);
}

export function saveRole(role) {
  return function(dispatch) {
    return saveRoleApi(role)
      .then(savedRole => {
        dispatch(createRolesSuccess(savedRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateRole(role) {
  return function(dispatch) {
    return updateRoleApi(role)
      .then(updateRole => {
        dispatch(updateRolesSuccess(updateRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getRoles() {
  return function(dispatch) {
    return fetch(UrlRepository.Url_RolesList)
      .then(response => response.json())
      .then(result => dispatch(getRolesSuccess(result)));
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