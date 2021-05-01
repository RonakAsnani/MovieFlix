import {ADD_MOVIES, ADD_FAVOURITE, REM_FAVOURITE, SET_FAVOURITE} from '../actions' 

const initialState = {
    list:[],
    favourites:[],
    showFavourites:false
}

export default function movies (state = initialState,action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
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
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REM_FAVOURITE:
            const index = state.favourites.indexOf(action.movie);
            if(index != -1){
                    state.favourites.splice(index,1);
            }
            return {
                ...state,
                
            }
        case SET_FAVOURITE:
            return {
                ...state,
                setFavourites: action.val
            }

        default:
            return state;
    }

}
