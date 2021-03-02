import { sortByrating } from "../actions/index"
import { connect } from "react-redux";
import React from 'react';

function Byrating(props) {
    const [input, setInput] = React.useState({
        videogamesLoaded: props.loaded
    })

    const desc = (e) => {
        e.preventDefault()
        setInput({
            videogamesLoaded: props.loaded.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return 1;
                }
                if (a.rating < b.rating) {
                    return -1;
                }
                return 0;
            })
        })
        console.log(input.videogamesLoaded)
        if (input.videogamesLoaded.length === 0) {
            console.log("error")
        } else {
            props.sort([...props.loaded])
        }
    }
    const asc = (e) => {
        e.preventDefault()
        const videogamesLoaded = props.loaded.sort(function (a, b) {
            if (a.rating < b.rating) {
                return 1;
            }
            if (a.rating > b.rating) {
                return -1;
            }
            return 0;
        })
        setInput({
            videogamesLoaded
        })
        if (input.videogamesLoaded.length === 0) {
            console.log("error")
        } else {
            props.sort([...props.loaded])
        }
    }
    return (
        <React.Fragment>
            <button class="nuevoButton" onClick={(e) => desc(e)}>
                lower rating
            </button>
            <button class="nuevoButton" onClick={(e) => asc(e)}>
                higher rating
            </button>
        </React.Fragment >
    );
}
function mapDispatchToProps(dispatch) {
    return {
        sort: (array) => dispatch(sortByrating(array)),

    };
}
function mapStateToProps(state) {
    return {
        loaded: state.videogamesLoaded
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Byrating);
