import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";


export function getProjectNavigationSuccess(navigation)
{
    return {type:actionsTypes.GET_PROJECTS_NAVIGATION_SUCCESS,payload:navigation}
}

export function getProjectNavigationDetailSuccess(navigation)
{
    return {type:actionsTypes.GET_PROJECTS_NAVIGATION_DETAIL_SUCCESS,payload:navigation}
}

export function createProjectNavigationSuccess(navigation) {
    return { type: actionsTypes.CREATE_PROJECTS_NAVIGATION_SUCCESS, payload: navigation };
  }
  
  export function updateProjectNavigationSuccess(navigation) {
    return { type: actionsTypes.UPDATE_PROJECTS_NAVIGATION_SUCCESS, payload: navigation };
  }


  export function deleteProjectNavigationSuccess(navigation) {
    return { type: actionsTypes.DELETE_PROJECTS_NAVIGATION_SUCCESS, payload: navigation };
  }
  
  export function deleteProjectNavigationApi(navigation,token) {
    return fetch(UrlRepository.Url_ProjectNavigationDelete, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(navigation)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  
  
  export function deleteProjectNavigation(navigation, token) {
    return function(dispatch) {
      return deleteProjectNavigationApi(navigation, token)
        .then(deleteNavigation => {
          dispatch(deleteProjectNavigationSuccess(deleteNavigation));
        })
        .catch(error => {
          throw error;
        });
    };
  }

export function getProjectNavigationDetail(roleId,token)
{

  return function(dispatch) {

    let url = UrlRepository.Url_ProjectNavigationDetailList;

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
      .then(result => dispatch(getProjectNavigationDetailSuccess(result)));
  };

}

export function getProjectNavigation(token)
{
    return function(dispatch)
    {
        return fetch(UrlRepository.Url_ProjectNavigationList,{
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          }
        }).then(response=>response.json())
        .then(result=>dispatch(getProjectNavigationSuccess(result)));
    }
}

export function saveProjectNavigationApi(navigation,token) {
    return fetch(UrlRepository.Url_ProjectNavigationSave, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(navigation)
    })
      .then(handleResponce)
      .catch(handleError);
  
  }
  
  export function updateProjectNavigationApi(navigation,token) {
    return fetch(UrlRepository.Url_ProjectNavigationUpdate, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(navigation)
    })
      .then(handleResponce)
      .catch(handleError);
  }
  
  export function saveProjectNavigation(navigation) {
    return function(dispatch) {
      return saveProjectNavigationApi(navigation)
        .then(savedNavigation => {
          dispatch(createProjectNavigationSuccess(savedNavigation));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export function updateProjectNavigation(navigation) {
    return function(dispatch) {
      return updateProjectNavigationApi(navigation)
        .then(updateNavigation => {
          dispatch(updateProjectNavigationSuccess(updateNavigation));
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
