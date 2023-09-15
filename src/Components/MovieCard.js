

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
      <div className='detail-text' >
        <h3 data-testid="movie-title">{title}</h3>
        <p data-testid="movie-release-date">{release_date}</p>
        <Link id='link' to={`movies/${id}`}><button>View Details</button></Link>
      </div>
    </div>
  )
}

export default MovieCard;
