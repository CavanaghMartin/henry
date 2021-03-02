import { alphabeticalOrder } from "../actions/index"
import { connect } from "react-redux";
import React from 'react';

function AlphaSort(props) {
    const [input, setInput] = React.useState({
        videogamesLoaded: props.loaded
    })

    const desc = (e) => {
        e.preventDefault()
        setInput({
            videogamesLoaded: props.loaded.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
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
        setInput({
            videogamesLoaded: props.loaded.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
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
    return (
        <React.Fragment>
            <button class="nuevoButton" onClick={(e) => desc(e)}>
                ascending order
            </button>
            <button class="nuevoButton" onClick={(e) => asc(e)}>
                descending order
            </button>
        </React.Fragment>
    );
}
function mapDispatchToProps(dispatch) {
    return {
        sort: (array) => dispatch(alphabeticalOrder(array)),

    };
}
function mapStateToProps(state) {
    return {
        loaded: state.videogamesLoaded
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlphaSort);
