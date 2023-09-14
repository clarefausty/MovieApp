

import React from 'react'
import { Link } from 'react-router-dom';
import "./MovieCard.css"

const getPosterURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({ poster_path, title, release_date, id }) => {
  return (
    <div data-testid="movie-card" className='movie-card-container'>
      <img data-testid="movie-poster" className='movie-img' src={getPosterURL(poster_path)} alt={title} />
      <div >
        <h3>{title}</h3>
        <p>{release_date}</p>
        <Link to={`movies/${id}`}>View Details</Link>
      </div>
    </div>
  )
}

export default MovieCard;
