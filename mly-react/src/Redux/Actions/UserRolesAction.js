import * as actionsTypes from "./ActionTypes";
import UrlRepository from "./UrlRepository";

export function ChangeUserRoles(users) {
  return { type: actionsTypes.CHANGE_USER_ROLES, payload: users };
}

export function getUserRolesSuccess(users) {
  return { type: actionsTypes.GET_USER_ROLES_SUCCESS, payload: users };
}

export function createUserRolesSuccess(users) {
  return { type: actionsTypes.CREATE_USER_ROLES_SUCCESS, payload: users };
}

export function updateUserRolesSuccess(users) {
  return { type: actionsTypes.UPDATE_USER_ROLES_SUCCESS, payload: users };
}

export function deleteUserRolesSuccess(userroles) {
  return { type: actionsTypes.DELETE_USER_ROLES_SUCCESS, payload: userroles };
}

export function deleteUserRolesApi(userroles,token) {
  return fetch(UrlRepository.Url_UserRolesDelete, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(userroles)
  })
    .then(handleResponce)
    .catch(handleError);
}


export function deleteUserRoles(userroles, token) {
  return function(dispatch) {
    return deleteUserRolesApi(userroles, token)
      .then(deleteUserRole => {
        dispatch(deleteUserRolesSuccess(deleteUserRole));
      })
      .catch(error => {
        throw error;
      });
  };
}


export function saveUserRolesApi(users,token) {
  return fetch(UrlRepository.Url_UserRolesSave, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(users)
  })
    .then(handleResponce)
    .catch(handleError);

  // return fetch(UrlRepository.Url_RoleSave+"/"+(role.id||""),{
  //     method:role.id?"PUT":"POST",
  //     headers:{"content-type":"application/json"},
  //     body:JSON.stringify(role)
  // });
}

export function updateUserRolesApi(role,token) {
  return fetch(UrlRepository.Url_UserRolesUpdate, {
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

export function saveUserRoles(role) {
  return function(dispatch) {
    return saveUserRolesApi(role)
      .then(savedRole => {
        dispatch(createUserRolesSuccess(savedRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateUserRoles(role) {
  return function(dispatch) {
    return updateUserRolesApi(role)
      .then(updateRole => {
        dispatch(updateUserRolesSuccess(updateRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getUserRoles(userId,token) {

  return function(dispatch) {
    let url = UrlRepository.Url_UserRolesDetailList;

    if (userId) {
      url = url + "?userId=" + userId;
    }

    return fetch(url,{
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(getUserRolesSuccess(result)));
  };
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
