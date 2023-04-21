//passing an initial state and action to the function
export default function movies (state = [], action) {
    if(action.type === 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}

//this reducer must return something whether it's a new state or old state