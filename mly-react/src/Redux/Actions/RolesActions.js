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

export function deleteRolesSuccess(roles) {
  return { type: actionsTypes.DELETE_ROLES_SUCCESS, payload: roles };
}

export function deleteRoleApi(role,token) {
  return fetch(UrlRepository.Url_RoleDelete, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(role)
  })
    .then(handleResponce)
    .catch(handleError);
}


export function deleteRole(role, token) {
  return function(dispatch) {
    return deleteRoleApi(role, token)
      .then(deleteRole => {
        dispatch(deleteRolesSuccess(deleteRole));
      })
      .catch(error => {
        throw error;
      });
  };
}


export function saveRoleApi(role,token) {
  return fetch(UrlRepository.Url_RoleSave, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(role)
  })
    .then(handleResponce)
    .catch(handleError);
}

export function updateRoleApi(role,token) {
  return fetch(UrlRepository.Url_RoleUpdate, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(role)
  })
    .then(handleResponce)
    .catch(handleError);
}

export function saveRole(role, token) {
  return function(dispatch) {
    return saveRoleApi(role, token)
      .then(savedRole => {
        dispatch(createRolesSuccess(savedRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateRole(role,token) {
  return function(dispatch) {
    return updateRoleApi(role,token)
      .then(updateRole => {
        dispatch(updateRolesSuccess(updateRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getRoles(token) {

  return function(dispatch)
  {
      return fetch(UrlRepository.Url_RolesList,{

      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }

      }).then(response=>response.json())
      .then(result=>dispatch(getRolesSuccess(result)));
  }

}

export async function handleResponce(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}
