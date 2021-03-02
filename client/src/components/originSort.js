import React from 'react';
import {  sortByOrigin } from '../actions';
import { connect } from "react-redux";
function OriginSort(props) {
    const [origin, setOrigin] = React.useState({
        videogamesLoaded: props.loaded
    })

    const orig = (e) => {
        e.preventDefault()
        const videogamesLoaded= props.loaded.filter(g => typeof g.id === 'number')
        setOrigin({
            videogamesLoaded
        })
        props.sortByOrigin(videogamesLoaded)
    }
    const added = (e) => {
        e.preventDefault()
        const videogamesLoaded= props.loaded.filter(g => typeof g.id === 'string')
        setOrigin({
            videogamesLoaded
        })
        props.sortByOrigin(videogamesLoaded)
    }

    return (
        <div >
            <button class="nuevoButton" onClick={(e) => orig(e)}>
                original
            </button>
            <button class="nuevoButton" onClick={(e) => added(e)}>
                added
            </button>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        loaded: state.videogamesLoaded
    }
}
export default connect(mapStateToProps, { sortByOrigin })(OriginSort);