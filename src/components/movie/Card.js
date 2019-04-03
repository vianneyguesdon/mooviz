import React from 'react';
import './Card.css';
import placeholder from '../../placeholder.png'

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      backdrop_path : placeholder // Ceci définit une image par défaut si jamais l'api ne fournit pas d'image
    }
  }

  render(){
    return(
      <div>
        <div className="title">
          <h4>{this.props.movie.title}</h4>
        </div>
        <div>
          <img className="img-fluid rounded" src={`https://image.tmdb.org/t/p/w500${this.props.movie.backdrop_path}`} alt={`${this.props.movie.title}`}/>
        </div>
      </div>
    )
  }
}

export default Card;