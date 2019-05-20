/* create a reducer function that takes in two parameters(state and action */
export default (state, action) => {
    // console.log(action)
    // return state
    switch (action.type) {
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech: action.text
            };
        default:
            return state;
    }
}