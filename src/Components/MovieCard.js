import React from 'react'
import "./MovieCard.css"


const getPosterURL =(posterpath)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}
const MovieCard = ({poster_path, title, release_date}) => {
  return (
    <div data-testid= "movie-card" className='movie-card-container'>
      <img data-testid= "movie-poster" className='movie-img' src={getPosterURL(poster_path)} alt={title}/>
      <div >
        <h1>{title}</h1>
        <p>{release_date}</p>
      </div>

    </div>
  )
}

export default MovieCard