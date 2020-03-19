import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,REGISTER_SUCCESS,REGISTER_FAIL} from './ActionTypes'
import {returnErrors} from "./ErrorActions"
import UrlRepository from "./UrlRepository";

export const loadUser = ()=>(dispatch, getState)=>{
dispatch({type:USER_LOADING});

const token = getState().auth.token;

const config = {
    headers :{
        "Content-type":"application/json"
    }
}

if(token){
    config.headers['x-auth-token']=token;
}

// return fetch(UrlRepository.Url_LoginSave, config)
//   .then(res=>dispatch({
//       type:USER_LOADED,
//       payload:res.data
//   }))
//   .catch(err=>{
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//           type: AUTH_ERROR
//       });
//   });

}