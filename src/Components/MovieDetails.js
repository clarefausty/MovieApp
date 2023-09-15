
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
  const [loading, setLoading] = useState(true)
  const [videoKey, setVideoKey] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        
        const movieDetailsURL = `${base_url}/movie/${movieId}?${API_key}`;
        const movieVideoURL = `${base_url}/movie/${movieId}/videos?${API_key}`;
        
        const response = await axios.get(movieDetailsURL);
        const res = await axios.get(movieVideoURL)

        setMovieDetails(response.data);

        const videoResult = res.data.results.find(
          (result) => result.type === 'Trailer'
        );
        if (videoResult) {
          setVideoKey(videoResult.key);
        }
        
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
              <img className='icon' src='/Asset/tv.png' alt='Logo'/>
              <p>MovieBox</p>
            </div>
            <div className='sidebar-details'>
              <LiaHomeSolid className='icon'/>
              <p>Home</p>
            </div>
            <div className='sidebar-details'>
              <BiCameraMovie className='icon'/>
              <p>Movies</p>
            </div>
            <div className='sidebar-details'>
              <PiTelevisionSimpleBold className='icon'/>
              <p>TV Series</p>
            </div>
              <div className='sidebar-details'>
              <GrLogout className='icon'/>
              <p>Log out</p>
            </div>
            </div>
          </div>
        <div className='genres'>
          <nav>
            <div className='nav-responsive-logo'>
          <img src='/Asset/tv.png' alt='logo'/>
            <h3>Movie Box</h3>
            </div>
          <span><img src='/Asset/Menu.png' alt='menu'/></span> 
          </nav>
        <div className='video-container'>
              {videoKey ? (
                <iframe
                  title="Movie Trailer"
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  frameBorder="8"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>No trailer available.</p>
              )}
            </div>
          <div className='name-date'>
          <p data-testid="movie-title">{movieDetails.title}</p>
          <p data-testid="movie-release-date">{movieDetails.release_date}</p>
          </div>
          <p className='time' data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
          <div className='overview'>
          <p className='overview' data-testid="movie-overview">{movieDetails.overview}</p>
          <div className='overview-btn'>
            <button className='orange'>See Showtimes</button>
            <button className='pink'>More watch Options</button>
          </div>
          </div>
        </div>
        </div>
      ) : (
        <p>Movie details not found.</p>
      )}
    </div>
  );
};

export default MovieDetails;

