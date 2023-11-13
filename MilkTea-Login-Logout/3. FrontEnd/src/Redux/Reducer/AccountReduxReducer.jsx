// // reducer.js

// import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../Action/AccountActionRedux";

// const initialState = {
//   users: [],
//   loading: false,
//   error: null
// };
  
//   const AccountreducerRedux = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_USERS_REQUEST:
//         return {
//           ...state,
//           loading: true
//         };
//       case FETCH_USERS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           users: action.payload,
//           error: null
//         };
//       case FETCH_USERS_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default AccountreducerRedux;
  