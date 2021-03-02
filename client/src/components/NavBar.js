import { Link } from "react-router-dom";
import './inicio.css';
import './NavBar.css';
import { SearchBar } from './SearchBar';
import { connect } from "react-redux";
import { getVideogames, getVideogamesdetail, alphabeticalOrder } from '../actions';
import SortByrating from "./sortByRating"
import AlphabeticalOrder from "./AlphaSort"
import OriginSort from "./originSort"
import SortBar from "./SortBar"
function NavBar(props) {
    return (
        <div class="navbar">
            <a href="#">Order by:</a>
            <div class="dropdown">
                <button class="dropbtn">
                    Rating
        <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <SortByrating class="nuevoButton" />
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    Alphabetical
         <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <AlphabeticalOrder />
                </div>
            </div>
            <a href="#">Filter by:</a>
            <div class="dropdown">
                <button class="dropbtn">Origin
        <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <OriginSort />
                </div>
            </div>
            <div  class="search-container2 botonSearch" >
                <SortBar  />
            </div>
            <div class="search-container botonSearch">
                <SearchBar getGame={props.getGame} />
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        videogames: state.videogamesLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getGame: title => dispatch(getVideogames(title)),
        getDetail: id => dispatch(getVideogamesdetail(id)),

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);