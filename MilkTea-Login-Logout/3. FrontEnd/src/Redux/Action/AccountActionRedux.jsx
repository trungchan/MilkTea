// // Trong file Action/AccountActionRedux.js
// import axios from 'axios';

// export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// export const fetchAllUsers = () => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_USERS_REQUEST });

//     axios.get('http://localhost:8080/api/v1/Account') 
//       .then((response) => {
//         const users = response.data;
//         dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
//       })
//       .catch((error) => {
//         dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
//       });
//   };
// };
