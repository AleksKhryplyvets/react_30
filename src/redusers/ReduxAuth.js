const initialState = {
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Login":
        return {
          isAuth: true,
        };
      case "Logout":
        return {
          isAuth: false,
        };
      default:
        return state
    }
};
