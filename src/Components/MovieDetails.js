
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./MovieDetails.css"
import {LiaHomeSolid} from "react-icons/lia"
import {BiCameraMovie} from "react-icons/bi"
import {PiTelevisionSimpleBold} from "react-icons/pi"
import {GrLogout} from "react-icons/gr"

const base_url = 'https://api.themoviedb.org/3';
const API_key = 'api_key=9dcd1bbe1fcddd151198933257ad3d4a';

const MovieDetails = () => {
  const {movieId }= useParams()
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        
        const movieDetailsURL = `${base_url}/movie/${movieId}?${API_key}`;

        
        const response = await axios.get(movieDetailsURL);

        setMovieDetails(response.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="movie-details">
      {loading ? (
        <p>Loading...</p>
      ) : movieDetails ? (
        <div className='moviedetails-container'>
          <div className='sidebar'>
            <div className='sidebar-pad'>
            <div className='sidebar-details'>
              <img src='/Asset/tv.png' alt='Logo'/>
              <p>MovieBox</p>
            </div>
            <div className='sidebar-details'>
              <LiaHomeSolid/>
              <p>Home</p>
            </div>
            <div className='sidebar-details'>
              <BiCameraMovie/>
              <p>Movies</p>
            </div>
            <div className='sidebar-details'>
              <PiTelevisionSimpleBold/>
              <p>TV Series</p>
            </div>
            <div className='sidebar-details'>
              <GrLogout/>
              <p>Log out</p>
            </div>
            <div className='bet'>
                <p>Play movie quizes and earn free tickets</p>
                <small>50k people are play now</small>
                <button>Start Playing</button>
              </div>
            </div>
          </div>
        <div className='genres'>
          <h1 data-testid="movie-title">{movieDetails.title}</h1>
          <p data-testid="movie-release-date">{movieDetails.release_date}</p>
          <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
          <p data-testid="movie-overview">{movieDetails.overview}</p>
        </div>
        </div>
      ) : (
        <p>Movie details not found.</p>
      )}
    </div>
  );
};

export default MovieDetails;

