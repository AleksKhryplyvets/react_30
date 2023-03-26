const initialValue = {
    count: 0
};

export const countReducer = (state = initialValue, action) =>{
    switch (action.type) {
      case "Increment":
        return {
          count: state.count + 1,
        };
      case "Decrement":
        return {
          count: state.count - 1,
        };
      case "Reset":
        return {
          count: initialValue.count,
        };

      default:
        return state
    }
};
