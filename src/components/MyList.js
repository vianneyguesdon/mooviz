import React from 'react';
import config from '../config';
import Card from './movie/Card';

class MyList extends React.Component{

  constructor (props) {
    super (props);

    this.state = {
      moviesList: [],
      listOfIds : this.getFromLocalStorage(),
    };

    this.onClickCard = this.onClickCard.bind(this)
  }

  componentDidMount() {

    this.getFromLocalStorage();
    // console.log('this.state.listOfIds', this.state.listOfIds);

    //On définit notre constante qui va récupérer les promesses. MovieId est définit ici. Il représente l'id de 1 seul movie.
    const fetchMovie = (movieId) => fetch(`http://api.themoviedb.org/3/movie/${movieId}?${config.API_KEY}`)
    .then(res => res.json())
    .then(data => data);

    // Promise all active le fetch qui va chercher les données et les retourne dans le then. Dans le then, je définit une nouvelle variable qui va recevoir les infos du fetch
    Promise.all(this.state.listOfIds.map(movieId => fetchMovie(movieId)))
    .then((moviesList) => {
      // receives an array of responses
      moviesList.forEach(movieId => {
        // console.log('<< promiseAll movieId', movieId);
        // console.log("<< moviesList", moviesList)
        this.setState ({
          moviesList
        })
      });  
    });
  }

  // Méthode pour récupérer la liste stockée dans le local storage
  getFromLocalStorage() {
    let listOfIds = localStorage.getItem('myList');
    listOfIds = JSON.parse(listOfIds);
    console.log(">> getFromlocalStorage listOfIds",listOfIds);
    return listOfIds
  }

  onClickCard (movieId) {
    // console.log("<< onClickCard")
    console.log("movieId onClick MyList", movieId)
    // console.log("moviesList onClick", this.state.moviesList)
    
    // Je filtre le tableau listOfIds. Chaque élément du tableau est une ID. Je compare l'Id et le movieId.
    const filteredItems = this.state.listOfIds.filter(Id => Id !== movieId)
    this.setState ({
      listOfIds : filteredItems
    })

    // J'applique la méthode filter sur le tableau d'objets moviesList. Cette méthode retourne un film du tableau. 
    // Pour chaque film, je compare l'id de ce film avec l'Id du movie cliqué. 
    // On retourne un tableau contenant les éléments !== (possible de retourner 1 élément avec ===)
    const filteredMovies = this.state.moviesList.filter(movie => movie.id !== movieId)
    this.setState ({
      moviesList : filteredMovies
    })

    //Je réécris le local storage avec le nouveau tableau, qui doit être stringifié
    localStorage.setItem("myList", JSON.stringify(this.state.listOfIds));
    console.log(localStorage)
  }

  render(){
    // console.log("this.state", this.state)
    console.log("moviesList in MyListrender", this.state.moviesList)
    console.log("listOfIds in MyListrender", this.state.listOfIds)
    return(
      <div className="container">
        <div className="row">
          {this.state.moviesList.map((movie, index) => {
            return(
              <div key={movie.id} className="col-3"> 
                  <Card 
                    movie={movie} // On fait passer le movie en entier pour pouvoir récupérer tout l'objet
                    onClick = {this.onClickCard}
                  />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default MyList;