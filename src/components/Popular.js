import React from 'react';
import Card from '../components/movie/Card';
import config from '../config';
import vs from '../vs.png';
import './Popular.css'

class Popular extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      movies: [],
      currentMovie: 0,
    }

    this.onClickMovie = this.onClickMovie.bind(this);
  }

  // Appel à une api (asynchrone)
  componentDidMount() {
    // console.log(config.API_KEY) // Ici on importe la clef API contenue dans config.js (CONSTANTE)
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${config.API_KEY}`;
    fetch(url)
      .then (res => res.json())
      .then (data => {
        // console.log("data",data.results)
    
        this.setState({
          movies: data.results
        })
      });
  }

  onClickMovie(movieId) {

    // 1) Incrémentation du currentMovie de 2 à chaque click
    console.log(">>onClickMovie")
    console.log("moviesId", movieId)
    const currentMovie = this.state.currentMovie + 2

    this.setState({
      currentMovie
    });

    // 2) Je lance la fonction this.saveToLocalStorage qui va effectuer une autre action
    this.saveToLocalStorage(movieId)
    // console.log("currentMovie", currentMovie)
  }

  saveToLocalStorage(movieId) {
    // console.log(">>saveToLocalStorage")
    // console.log("movieId", movieId)
    
    //Récupérer les films contenu dans le localstorage
    const storageStr = localStorage.getItem('myList');
    let myList = [];
    if (storageStr !== null) {
      myList = JSON.parse(storageStr);
    }
    // On ajoute le movie dans l'array uniquement si il n'y est pas déjà
    if (myList.includes(movieId) === false) {
      myList.push(movieId);
    } 
    // Pour sauvegarder cette liste dans la totalité de l'application (App), on le stocke dans le local storage
    localStorage.setItem("myList", JSON.stringify(myList))
  }



  render() {
    // console.log("this.state.movies", this.state.movies)
    let displayedMov = this.state.movies.slice((this.state.currentMovie),(this.state.currentMovie + 2))
    // console.log("displayedMov", displayedMov)

    return(
      <div className="container">
        <div className="row">
          <img src={`${vs}`} className="img-vs" alt="vs"/>
          {displayedMov.map((movie, index) => {
            // console.log(movie)
            return(
              <div key={movie.id} className="col-5 offset-1"> 
                  <Card 
                    movie={movie} // On fait passer le movie en entier pour pouvoir récupérer tout l'objet
                    onClick={this.onClickMovie}
                  />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Popular;