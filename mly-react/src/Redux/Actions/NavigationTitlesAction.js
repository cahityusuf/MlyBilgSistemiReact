import * as actionsTypes from './ActionTypes'
import UrlRepository from "./UrlRepository";


export function getNavigationTitlesSuccess(navigation)
{
    return {type:actionsTypes.GET_NAVIGATION_TITLES_SUCCESS,payload:navigation}
}

export function createNavigationTitlesSuccess(navigation) {
    return { type: actionsTypes.CREATE_NAVIGATION_TITLES_SUCCESS, payload: navigation };
  }
  
  export function updateNavigationTitlesSuccess(navigation) {
    return { type: actionsTypes.UPDATE_NAVIGATION_TITLES_SUCCESS, payload: navigation };
  }


  export function deleteNavigationTitlesSuccess(navigation) {
    return { type: actionsTypes.DELETE_NAVIGATION_TITLES_SUCCESS, payload: navigation };
  }
  
  export function deleteNavigationTitlesApi(navigation,token) {
    return fetch(UrlRepository.Url_NavigationTitlesDelete, {
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
  
  
  export function deleteNavigationTitles(navigation, token) {
    return function(dispatch) {
      return deleteNavigationTitlesApi(navigation, token)
        .then(deleteNavigation => {
          dispatch(deleteNavigationTitlesSuccess(deleteNavigation));
        })
        .catch(error => {
          throw error;
        });
    };
  }

export function getNavigationTitles(token)
{
    return function(dispatch)
    {
        return fetch(UrlRepository.Url_NavigationTitlesList,{
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
          }
        }).then(response=>response.json())
        .then(result=>dispatch(getNavigationTitlesSuccess(result)));
    }
}

export function saveNavigationTitlesApi(navigation,token) {
    return fetch(UrlRepository.Url_NavigationTitlesSave, {
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
  
  export function updateNavigationTitlesApi(navigation,token) {
    return fetch(UrlRepository.Url_NavigationTitlesUpdate, {
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
  
  export function saveNavigationTitles(navigation) {
    return function(dispatch) {
      return saveNavigationTitlesApi(navigation)
        .then(savedNavigation => {
          dispatch(createNavigationTitlesSuccess(savedNavigation));
        })
        .catch(error => {
          throw error;
        });
    };
  }
  
  export function updateNavigationTitles(navigation) {
    return function(dispatch) {
      return updateNavigationTitlesApi(navigation)
        .then(updateNavigation => {
          dispatch(updateNavigationTitlesSuccess(updateNavigation));
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
