import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MoviePoster.css';

class MoviePoster extends Component {

    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render() {
    return (<img src={this.props.poster} />)
    }
}

export default MoviePoster;
