import React from 'react';
import './Card.css';
import placeholder from '../../placeholder.png' //Image par défaut dans le cas ou l'APi n'en fournirait pas

class Card extends React.Component {

  render(){
    // Ceci définit une image par défaut si jamais l'api ne fournit pas d'image
    const image = this.props.movie.backdrop_path === null ? placeholder : this.props.movie.backdrop_path;
    // console.log("Card render, this.state :", this.state)
    // console.log("Card render, this.props :", this.props)
    // const {title, overview, poster_path, id } = this.props  // DESTRUCTURATION 
    return(
      <button 
        className="btn btn-outline-danger my-card" 
        onClick={() => this.props.onClick(this.props.movie.id)}>
        <div className="title">
          <h4>{this.props.movie.title}</h4>
        </div>
        <div>
          <img 
            className="img-fluid rounded" 
            src={`https://image.tmdb.org/t/p/w500${image}`} 
            alt={`${this.props.movie.title}`}
          />
        </div>
      </button>
    )
  }
}

export default Card;