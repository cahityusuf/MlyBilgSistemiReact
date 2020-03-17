import * as actionsTypes from "./ActionTypes";
import UrlRepository from "./UrlRepository";

export function ChangeUsers(users) {
  return { type: actionsTypes.CHANGE_USERS, payload: users };
}

export function getUsersSuccess(users) {
  return { type: actionsTypes.GET_USER_SUCCESS, payload: users };
}

export function createUsersSuccess(users) {
  return { type: actionsTypes.CREATE_USER_SUCCESS, payload: users };
}

export function updateUsersSuccess(users) {
  return { type: actionsTypes.UPDATE_USER_SUCCESS, payload: users };
}

export function saveUsersApi(users) {
  return fetch(UrlRepository.Url_UsersSave, {
    method: "POST",
    headers: { "content-type": "application/json", "Accept": "application/json" },
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

export function updateUsersApi(role) {
  return fetch(UrlRepository.Url_UsersUpdate, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(role)
  })
    .then(handleResponce)
    .catch(handleError);
}

export function saveUsers(role) {
  return function(dispatch) {
    return saveUsersApi(role)
      .then(savedRole => {
        dispatch(createUsersSuccess(savedRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateUsers(role) {
  return function(dispatch) {
    return updateUsersApi(role)
      .then(updateRole => {
        dispatch(updateUsersSuccess(updateRole));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getUsers() {
  return function(dispatch) {
    return fetch(UrlRepository.Url_UsersList)
      .then(response => response.json())
      .then(result => dispatch(getUsersSuccess(result)));
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