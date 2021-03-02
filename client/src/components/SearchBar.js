import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideogames, getVideogamesdetail } from '../actions';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }
    handleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleSubmit(event) {

        event.preventDefault();
        this.props.getGame(this.state.title);
    }

    render() {
        const { title } = this.state;
        return (
            <div>
                <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <input
                            placeholder="Search videogame"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <button type="submit"><i class="fa fa-search"></i></button>

                    </div>
                </form>


            </div>
        );
    }
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
)(SearchBar);
