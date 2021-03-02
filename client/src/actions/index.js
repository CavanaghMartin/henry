const GET_VIDEOGAMES = "GET_VIDEOGAMES"
const GET_VIDEOGAMES_DETAIL = "GET_VIDEOGAMES_DETAIL"
const FILTER_BY_GENRE = "FILTER_BY_GENRE"
const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER"
const SORT_BY_RATING = "SORT_BY_RATING"
const SET_PAGE = "SET_PAGE"
const SORT_BY_ORIGIN = "SORT_BY_ORIGIN"

export function getVideogames(titulo) {
    return function (dispatch) {
        //if (titulo) {
            return fetch("http://localhost:3001/videogames?name=" + titulo)
                .then(response => response.json())
                .then(json => {
                    dispatch({ type: GET_VIDEOGAMES, payload: json });
                });
        //} 
    }
}
export function getVideogamesdetail(id) {
    return function (dispatch) {
        return fetch("http://localhost:3001/videogame/" + id)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_VIDEOGAMES_DETAIL, payload: json });
            });
    };
}

export function filterbyGenre(genre) {
    return { type: FILTER_BY_GENRE, payload: genre }
}
export function alphabeticalOrder(payload) {
    return { type: ALPHABETICAL_ORDER, payload: payload }
}
export function sortByrating(payload) {
    return { type: SORT_BY_RATING, payload: payload }
}
export function setPage(payload) {
    return { type: SET_PAGE, payload: payload }
}
export function sortByOrigin(payload) {
    return { type: SORT_BY_ORIGIN, payload: payload }
}