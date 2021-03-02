const GET_VIDEOGAMES = "GET_VIDEOGAMES"
const GET_VIDEOGAMES_DETAIL = "GET_VIDEOGAMES_DETAIL"
const FILTER_BY_GENRE = "FILTER_BY_GENRE"
const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER"
const SORT_BY_RATING = "SORT_BY_RATING"
const SET_PAGE = "SET_PAGE"
const SORT_BY_ORIGIN = "SORT_BY_ORIGIN"

const initialState = {
    videogamesLoaded: [],
    videogamesDetail: {},
    pageLoaded: []
};

function rootReducer(state = initialState, action) {

    if (action.type === GET_VIDEOGAMES) {
        return {
            ...state,
            videogamesLoaded: action.payload
        };
    }
    if (action.type === GET_VIDEOGAMES_DETAIL) {
        return {
            ...state,
            videogamesDetail: action.payload
        };
    }
    if (action.type === FILTER_BY_GENRE) {
        action.payload = action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
        return {
            ...state,
            videogamesLoaded: state.videogamesLoaded.filter(game => game?.genrs.includes(action.payload))
        }

    }
    if (action.type === ALPHABETICAL_ORDER) {
        
        return {
            ...state,
            videogamesLoaded: action.payload
        }
    }
    if (action.type === SORT_BY_RATING) {
        
        return {
            ...state,
            videogamesLoaded: action.payload
        }
    }


    if(action.type===SET_PAGE){
        return{
            ...state,
            pageLoaded:action.payload,
        }
    }
    if(action.type===SORT_BY_ORIGIN){
        return{
            ...state,
            videogamesLoaded: action.payload
        }
    }

    return state;
}

///hacer las dos restantes
export default rootReducer;