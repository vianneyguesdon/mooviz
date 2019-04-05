import React from 'react';
import moment from 'moment';
import config from '../config';
import Card from './movie/Card';

const TODAY = moment().format('YYYY-MM-DD')
const NEXT_WEEK = moment().add(7, 'days').format('YYYY-MM-DD');

// const NEXT_WEKK =

class Discover extends React.Component {

  constructor (props){
    super (props);

    this.state = {
      movies : []
    }

    this.onClickMovie = this.onClickMovie.bind(this)
  }

  // Appel à une api (asynchrone)
  componentDidMount() {
    // console.log(config.API_KEY) // Ici on importe la clef API contenue dans config.js (CONSTANTE)
    const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&${config.API_KEY}`;
    fetch(url)
      .then (res => res.json())
      .then (data => {
        console.log("data",data)
    
        this.setState({
          movies: data.results
        })
      });
  }

  onClickMovie(movieId) {
    console.log("<< onClickMovie")
    console.log("moviesId", movieId)

    this.saveToLocalStorage(movieId)
  }

  saveToLocalStorage(movieId) {
    console.log(">>saveToLocalStorage")
    console.log("movieId", movieId)
    
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
    return(
      <div className="container">
        <div className="row">
          {this.state.movies.map((movie, index) => {
            // console.log(movie)
            return(
              <div key={movie.id} className="col-2"> 
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

export default Discover;