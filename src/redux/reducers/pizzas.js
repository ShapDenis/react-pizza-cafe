const initinalState = {
    items: [],
    isLoaded: false,
}
export const pizzas = (state = initinalState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        }
    }
    return state;
}
export default pizzas;