export const initialState = {
    loading: false,
    results: [],
    value: '',
    submit: false,
    name: '',
    route: ''
  };
  
export const parksReducer = (state, action) => {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState;
        case 'START_SEARCH':
            return { ...state, loading: true, submit: false, value: action.query };
        case 'FINISH_SEARCH':
            // only show the top 5 results
            return { ...state, loading: false, submit: false, results: action.results.slice(0, 5) };
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection, submit: true, name: action.name, route: action.route };
        default:
            throw new Error();
    }
};