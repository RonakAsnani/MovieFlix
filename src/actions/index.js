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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

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

export function addMovieToList(movie){
    return {
        type: 'ADD_MOVIE_TO_LIST',
        movie
    }
}
export function handleMovieSearch(searchText){
   
    return function (dispatch) {
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((movie) => {
            console.log(movie);

            // dispatch an action
           dispatch(addMovieSearchResult(movie))
        })
    }
}

export function addMovieSearchResult (movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}

