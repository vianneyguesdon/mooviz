import React from 'react';
import Card from '../components/movie/Card';

class Popular extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      movies: [],
      currentPage: 1,
      displayedMov: [],
      myList: [],
    }

    this.onClickMovie = this.onClickMovie.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this)
  }

  // Ceci permet de faire appel à une api (asynchrone)
  componentDidMount() {
    const apiKey = "api_key=0da4cec8cd7c7f9e6892097255ca707c"
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKey}`;
    fetch(url)
      .then (res => res.json())
      .then (json => {
        // console.log("json",json.results)
    
        this.setState({
          movies: json.results
        })
      });
  }

  saveToLocalStorage(movieId) {
    console.log(">>saveToLocalStorage")
    const myList = this.state.myList
    this.setState({
      myList
    })
    console.log("<< saveToLocalStorage myList", myList)
  }

  onClickMovie(movieId) {

    // 1) Incrémentation du currentPage de 2 à chaque click
    console.log(">>onClickMovie")
    console.log("moviesId", movieId)
    let currentPage = this.state.currentPage
    currentPage = currentPage + 2

    this.setState({
      currentPage
    });

    // 2) Je lance la fonction this.saveToLocalStorage qui va effectuer une autre action
    this.saveToLocalStorage(movieId)
    // console.log("currentPage", currentPage)
  }

  render() {
    // console.log("this.state.movies", this.state.movies)
    let displayedMov = this.state.movies.slice((this.state.currentPage-1),(this.state.currentPage+1))
    // console.log("displayedMov", displayedMov)

    return(
      <div className="container">
        <div className="row">
          {displayedMov.map((movie, index) => {
            // console.log(movie)
            return(
              <div key={index} className="col-6">
                  <Card movie={movie} onClick={this.onClickMovie}/>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Popular;