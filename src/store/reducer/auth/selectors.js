const selectAuthStatus = (state) => state.AUTH_DATA.authorizationStatus;

const selectUserEmail = (state) => state.AUTH_DATA.userEmail;

export {selectAuthStatus, selectUserEmail};
