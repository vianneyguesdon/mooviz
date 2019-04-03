import React from 'react';
import Card from '../components/movie/Card';


class Popular extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      movies: [],
      currentPage: 1,
      movie: {},
      displayedMov: [],
      
    }

    this.onClickMovie = this.onClickMovie.bind(this);
  }

  // Ceci permet de faire appel à une api (asynchrone)
  componentDidMount() {
    const apiKey = "api_key=0da4cec8cd7c7f9e6892097255ca707c"
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKey}`;
    fetch(url)
      .then (res => res.json())
      .then (json => {
        console.log("json",json.results)
    
        this.setState({
          movies: json.results
          
        })
      });
  }

  onClickMovie() {
    // Incrémentation du currentPage de 2 à chaque click
    console.log(">>onClickMovie")
    let currentPage = this.state.currentPage
    currentPage = currentPage + 2

    this.setState({
      currentPage
    });
    console.log("currentPage", currentPage)
  }

  saveToLocalStorage(movieId) {
    localStorage.setItem('{}', JSON.stringify(['1993-02-02', '2001-09-11']));
    let bdays = localStorage.getItem('birthdays');
    bdays = JSON.parse(bdays);
    console.log(bdays[0]); 
    console.log(bdays[1]);

  }

  render() {
    console.log("this.state.movies", this.state.movies)
    let displayedMov = this.state.movies.slice((this.state.currentPage-1),(this.state.currentPage+1))
    console.log("displayedMov", displayedMov)

    return(
      <div className="container">
        <div className="row">
          {displayedMov.map((movie, index) => {
            // console.log(movie)
            return(
              <div key={index} className="col-6">
                <button className="btn btn-outline-success my-card" onClick={this.onClickMovie}>
                  <Card movie={movie}/>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Popular;