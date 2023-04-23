// {
//     type: 'ADD_MOVIES'
    // movies: [m1, m2, m3]
//}

//this whole object structure is an action

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

//action creators
export function addMovies (movies) {
    return {
        type : ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite (movie) {
    return {
        type : ADD_FAVOURITE,
        movie: movie  //shorthand - write only (movie)
    }
}