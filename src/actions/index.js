// {
//     type: 'ADD_MOVIES';
//     movies: [m1,m2,m3] 
// }
// {
//     type:' DECREASE_COUNT'
// }

// action types
export const ADD_MOVIES= 'ADD_MOVIES';
export const ADD_FAVOURITE= 'ADD_FAVOURITE';
export const REM_FAVOURITE= 'REM_FAVOURITE';
export const SET_FAVOURITE= 'SET_FAVOURITE';

// action creators
export function addMovies (movies, id) {
    return {
            type: 'ADD_MOVIES',
            movies: movies ,
            id
    }
} 

export function addFavourite (movie, id) {
    return {
            type: 'ADD_FAVOURITE',
            movie: movie ,
            id
    }
} 

export function remFavourite (movie, id) {
    return {
            type: 'REM_FAVOURITE',
            movie: movie ,
            id
    }
} 

export function setFavourite (val) {
    return {
            type: 'SET_FAVOURITE',
            val
    }
} 

