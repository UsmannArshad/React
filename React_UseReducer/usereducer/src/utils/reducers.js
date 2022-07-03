export const Reducers=(state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "changeuser":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
