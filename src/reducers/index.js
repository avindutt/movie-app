//passing an initial state and action to the function
import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initialMovieState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMovieState, action) {
    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies //this action will return the same state 
    //         // passed to it by updating list key value
    //     };
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        default:
            return state;
    }
}

//this reducer must return something whether it's a new state or old state