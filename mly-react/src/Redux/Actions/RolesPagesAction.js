import * as actionsTypes from "./ActionTypes";
import UrlRepository from "./UrlRepository";

export function getRolesPagesSuccess(rolesId) {
  return { type: actionsTypes.GET_ROLES_PAGES_SUCCESS, payload: rolesId };
}

export function getNaviRolesPagesSuccess(rolesId) {
  return { type: actionsTypes.GET_NAVI_ROLES_PAGES_SUCCESS, payload: rolesId };
}

export function changeRolesPagesSuccess(rolesId) {
  return { type: actionsTypes.CHANGE_ROLES_PAGES, payload: rolesId };
}

export function createRolesPagesSuccess(rolesPages) {
  return { type: actionsTypes.CREATE_ROLES_PAGES_SUCCESS, payload: rolesPages };
}

export function updateRolesPagesSuccess(rolesPages) {
  return { type: actionsTypes.UPDATE_ROLES_PAGES_SUCCESS, payload: rolesPages };
}

export function deleteRolesPagesSuccess(rolesPages) {
  return { type: actionsTypes.DELETE_ROLES_PAGES_SUCCESS, payload: rolesPages };
}

export function deleteRolesPagesApi(rolesPages,token) {
  return fetch(UrlRepository.Url_RolesPagesDelete, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization" : `Bearer ${token}`
    },
    body: JSON.stringify(rolesPages)
  })
    .then(handleResponce)
    .catch(handleError);
}


export function deleteRolesPages(rolesPages, token) {
  return function(dispatch) {
    return deleteRolesPagesApi(rolesPages, token)
      .then(deleteRolesPage => {
        dispatch(deleteRolesPagesSuccess(deleteRolesPage));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function chanceRolesPages(token, roleId) {
  return function(dispatch) {
    let url = UrlRepository.Url_RolesPagesDetailList;

    if (roleId) {
      url = url + "?roleId=" + roleId;
    }

    return fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(changeRolesPagesSuccess(result)));
  };
}

export function getRolesPages(token, roleId) {
  return function(dispatch) {
    let url = UrlRepository.Url_RolesPagesDetailList;

    if (roleId) {
      url = url + "?roleId=" + roleId;
    }

    return fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(getRolesPagesSuccess(result)));
  };
}

export function getNaviRolesPages(token, naviId) {
  return function(dispatch) {
    let url = UrlRepository.Url_RolesPagesNaviList;

    if (naviId) {
      url = url + "?naviId=" + naviId;
    }

    return fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(getNaviRolesPagesSuccess(result)));
  };
}

export function saveRolesPagesApi(rolesPages, token) {
  return fetch(UrlRepository.Url_RolesPagesSave, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(rolesPages)
  })
    .then(handleResponce)
    .catch(handleError);

}

export function updateRolesPagesApi(rolesPages, token) {
  return fetch(UrlRepository.Url_RolesPagesUpdate, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
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

export function updateRolesPages(rolesPages, token) {
  return function(dispatch) {
    return updateRolesPagesApi(rolesPages, token)
      .then(updateRolesPages => {
        dispatch(updateRolesPagesSuccess(updateRolesPages));
      })
      .catch(error => {
        throw error;
      });
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
