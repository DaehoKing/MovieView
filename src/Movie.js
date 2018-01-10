import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import MoviePoster from './MoviePoster';
class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render() {
        return (
        <div>
            <h1> {this.props.title} </h1>
            <MoviePoster poster={this.props.poster}/>
        </div>)
    }
}

export default Movie;