// import * as actionType from '../../Actions/ActionTypes'
// //import initialState from '../InitialState'

// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     isLoading: false,
//     user: null,
// };

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case actionType.USER_LOADING:
//             return {
//                 ...state,
//                 isLoading: true
//             };
//         case actionType.USER_LOADED:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 isLoading: false,
//                 user: action.payload
//             }
//         case actionType.LOGIN_SUCCESS:
//         case actionType.REGISTER_SUCCESS:
//             return {
//                 ...state,
//                 ...action.payload,
//                 isAuthenticated: true,
//                 isLoading: false,
//                 user: action.payload
//             };
//         case actionType.AUTH_ERROR:
//         case actionType.LOGIN_FAIL:
//         case actionType.LOGOUT_SUCCESS:
//         case actionType.REGISTER_FAIL:
//             localStorage.removeItem('token');
//             return {
//                 ...state,
//                 token: null,
//                 user: null,
//                 isAuthenticated: false,
//                 isLoading:false
//             };
//         default:
//             return state;
//     }
// }