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
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : 'https://pbs.twimg.com/media/DGrmTHrVoAAk9hy.jpg'
          },
          {
            title : 'Oldboy',
            poster : 'http://studio.kofic.or.kr/wp-content/uploads/1999/07/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4.jpg'
          },
          {
            title : 'Star wars',
            poster : 'http://post.phinf.naver.net/MjAxNzA1MDJfMjEx/MDAxNDkzNzA3Nzg5Njgy.gKJhrTyKMPDMjwuTSVLkhxS3b-l08ayXSbK1EN3ZXdkg.OF_CQO1-OwkYm0uJl75KLCVlYnE6KuVGPhxUFckdNqEg.JPEG/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88%EB%8D%B0%EC%9D%B4.jpg?type=w1200'
          },
          {
            title : "Transformer",
            poster : "https://i.ytimg.com/vi/jAIhHaQQNb4/maxresdefault.jpg"
          }
          ],
      })
    }, 2000);
  }

  _renderMovie = () => {
    return this.state.movies.map( (movie, index) => {
      return (<Movie title={movie.title} poster={movie.poster} key={index} />);
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
