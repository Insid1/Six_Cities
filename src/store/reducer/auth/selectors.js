const getAuthStatus = (state) => state.AUTH_DATA.authorizationStatus;

const getUserEmail = (state) => state.AUTH_DATA.userEmail;

export {getAuthStatus, getUserEmail};
