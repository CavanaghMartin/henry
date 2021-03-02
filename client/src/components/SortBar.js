import React from 'react';
import { filterbyGenre } from '../actions';
import { connect } from "react-redux";

function SortBar(props) {
    const [input, setInput] = React.useState({
        genre: "",
    })
    const handleInputChange = (e) => {
        setInput({
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.filterbyGenre(input.genre)

    }

    return (
        <form id="formAdd" onSubmit={(e) => handleSubmit(e)}>
            <input
                placeholder="Filter by genre"
                type="text"
                name="genre"
                onChange={handleInputChange}
            ></input>
            <button
                type="submit"
            ><i class="fa fa-search"></i></button>
        </form>
    );

}

function mapStateToProps(state) {
    return {
        loaded: state.videogamesLoaded
    }
}
export default connect(mapStateToProps, { filterbyGenre })(SortBar);