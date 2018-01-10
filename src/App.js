import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(error => console.log(error))
  }

  _renderMovie = () => {
    return this.state.movies.map( (movie, index) => {
      return (<Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} />);
    });
  }

  render() {
    console.log('did render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : 'Loading'}
      </div>
    )
  }
}

export default App;
