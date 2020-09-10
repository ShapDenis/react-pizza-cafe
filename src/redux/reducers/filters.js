const initinalState = {
    category: 0,
    sortBy: 'popular'
}
export const filters = (state = initinalState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        }
    }
    return state;
}
export default filters;