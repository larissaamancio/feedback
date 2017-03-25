const NAMESPACE = 'FEEDBACK';

export const user = {
  login: `${NAMESPACE}_USER_LOGIN`,
  loginFailure: `${NAMESPACE}_USER_LOGIN_ERROR`,
  navigation: `${NAMESPACE}_USER_NAVIGATION`,
  logged: `${NAMESPACE}_USER_LOGGED`,
  loaded: `${NAMESPACE}_USER_LOADED`,
  logout: `${NAMESPACE}_USER_LOGOUT`,
  register: `${NAMESPACE}_USER_REGISTER`,
  registerFailure: `${NAMESPACE}_USER_ERROR`,
  recover: `${NAMESPACE}_USER_RECOVER`,
  reset: `${NAMESPACE}_USER_RESET_PASSWORD`,
  resetFailure: `${NAMESPACE}_USER_RESET_PASSWORD_ERROR`,
  hasBeenReset: `${NAMESPACE}_USER_HAS_BEEN_RESET_PASSWORD_MESSAGE`,
  change: `${NAMESPACE}_USER_CHANGE_PASSWORD`,
  changeFailure: `${NAMESPACE}_USER_CHANGE_PASSWORD_ERROR`,
  rememberMe: `${NAMESPACE}_USER_REMEMBER_ME`,
  updateForm: `${NAMESPACE}_USER_UPDATE_FORM`,
};

export const crud = {
  filter: `${NAMESPACE}-CRUD-FILTER`,
  filterSuccess: `${NAMESPACE}-CRUD-FILTER-SUCCESS`,
  onChange: `${NAMESPACE}-CRUD-FILTER-CHANGE`,
  onClear: `${NAMESPACE}-CRUD-FILTER-CLEAR`,
  find: `${NAMESPACE}-CRUD-FIND`,
  findSuccess: `${NAMESPACE}-CRUD-FIND-SUCCESS`,
}

export const invite = {
  okr: `${NAMESPACE}-OKR`,
}


export const authDispatchers = (dispatch) => ({
  login: () => ( dispatch({ type: user.login }) ),
  logout: () => ( dispatch({ type: user.logout }) ),
  register: () => ( dispatch({ type: user.register }) ),
  onChange: payload => ( dispatch({ type: user.updateForm, payload }) )
});

export default {
  user,
  invite,
}

// export default dispatch => (
//   {
//     onChange: payload => (
//       dispatch({ type: crud.onChange, payload })
//     ),
//     onClear: () => (
//       dispatch({ type: crud.onClear })
//     ),
//     onSubmit: () => (
//       dispatch({ type: crud.filter })
//     ),
//     request: payload => (
//       dispatch({ type: crud.find, payload })
//     ),
//   }
// )
