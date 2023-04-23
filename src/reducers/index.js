//passing an initial state and action to the function
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES } from "../actions";

const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
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
                favourites: [action.movie, ...state.favourites]  // ...state.favourites has been added because
                // favourites array would already be having some movies into it and they must not get lost. 
            }
        case REMOVE_FAVOURITE:
        const filteredArray = state.favourites.filter((movie) => movie.Title !== action.movie.Title);
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}

//this reducer must return something whether it's a new state or old state