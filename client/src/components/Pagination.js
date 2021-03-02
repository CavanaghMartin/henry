import { connect } from "react-redux";
import React, { useEffect } from "react"
import { getVideogames, setPage } from '../actions';
import './pagination.css';

function Pagination(props) {
    const [pageNumber, setpageNumber] = React.useState(1);

    const { setPage } = props
    useEffect(() => {
        setPage(showGames())
    });

    //const { setPage } = props
    var pagination
    var games = props.loaded;

    //var pageNumber = 1; //pagina actual
    var pageSize = 1; //tamaño de la pagina
    //var pagination;
    var pageCont = Math.ceil(games.length / pageSize);//numero de paginas
    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
    function nextPage() {
        if (pageNumber < pageCont) {
            if (games.length > 9) showGames()
            setpageNumber(pageNumber + 1)
            props.setPage(showGames())
        }
    }
    function previusPage() {
        if (pageNumber > 1) {
            if (games.length > 9) showGames()
            setpageNumber(pageNumber - 1)
            props.setPage(showGames())
        }
    }

    const showGames = () => {
        pagination = paginate(games, pageSize, pageNumber);
        return pagination
    }

    return (
        <div className="pagination" >
            <button onClick={() => {previusPage()}}><i class="fas fa-chevron-left"></i></button>
            <span >{pageNumber}</span>
            <button onClick={() => { nextPage() }}><i class="fas fa-chevron-right"></i></button>
        </div>
    );

}
function mapStateToProps(state) {
    return {
        loaded: state.videogamesLoaded,

    }
}

export default connect(mapStateToProps, { setPage, getVideogames })(Pagination);