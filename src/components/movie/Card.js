import React from 'react';
import './Card.css';
import placeholder from '../../no-image.png' //Image par défaut dans le cas ou l'APi n'en fournirait pas

class Card extends React.Component {
  render() {
    // Ceci définit une image par défaut si jamais l'api ne fournit pas d'image
    const image = this.props.movie.poster_path === null ? placeholder : `https://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;
    // console.log(this.props.movie.title)
    return(
      <button className="btn btn-outline-danger my-card" onClick = {() => this.props.onClick(this.props.movie.id)}>
        <div className="title">
          <h5>{this.props.movie.title}</h5>
        </div>
        <div>
          <img className="img-fluid rounded" src={`${image}`} alt={`${this.props.movie.title}`}/>
        </div>
      </button>
    )
  }
}

export default Card;