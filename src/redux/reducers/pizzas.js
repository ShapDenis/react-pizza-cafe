const initinalState = {
    items: [],
    isLoaded: false,
}
export const pizzas = (state = initinalState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
        }
    }
    return state;
}
export default pizzas;