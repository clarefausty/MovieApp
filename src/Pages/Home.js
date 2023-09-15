
import { useEffect, useState } from 'react';
import './Home.css';
import { BiSearch } from 'react-icons/bi';
import { AiFillPlayCircle } from 'react-icons/ai';
import MovieCard from '../Components/MovieCard';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { red } from '@mui/material/colors';


const base_url = 'https://api.themoviedb.org/3';
const API_key = 'api_key=9dcd1bbe1fcddd151198933257ad3d4a';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    let url = base_url + '/movie/top_rated?' + API_key;

    
    if (search) {
      url = base_url + '/search/movie?' + API_key + '&query=' + search;
    }

    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [search]);

  const handleSearch = (evt) => {
    if (evt.key === 'Enter') {
      setSearch(evt.target.value);
      evt.target.value = '';
    }
  };

  return (
    <div className="home-container">
      <div className='intro-section'>
             <div className='moviebox-container'>
             <img src='/Asset/tv.png' alt='logo'/>
            <h3>Movie Box</h3>
            </div>
      <div className="search-input">
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          onKeyDown={handleSearch}
        />
        <BiSearch className="search-icon" />
      </div>
      <div className='signing-container'>
        <p>Sign in</p>
        <span><img src='/Asset/Menu.png' alt='menu'/></span>      
        </div>
      </div>
      <div className='content'>
        <h3>John Wick 3 <br></br> Parabellum</h3>
        <div className='rate'>
        <div className='rate-num'>
        <img src='/Asset/IMDB.png' alt='IMDB logo'/>
        <p>86.0/100</p>
     </div>
         <div className='rate-percent'>
             <img src='/Asset/Tomatoes.png' alt='Tomatoes'/>
             <p>97%</p>
         </div>
         </div>
         <p>John Wick is on the run after killing a member of the international assassians' guild and with a $14 million price tag on his head, he is the target of heat men and women everywhere</p>
         <div className='watch-btn'>
         <button><AiFillPlayCircle className="play-icon"/>Watch Trailer</button>
         </div>
     </div>
     <div className='card-container' >
         <div className='card-con-title'>
         <h1>Featured Movies</h1>
         </div>
      <div className="card-component">

      {loading ? <ClipLoader
        color={red}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />: movies.length === 0 ? (
          <p className="not found">NOT FOUND</p>
        ) : (
          movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })
        )}

        {/* {movies.length === 0 ? (
          <p className="not found">NOT FOUND</p>
        ) : (
          movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })
        )} */}
      </div>
      </div>
    </div>
  );
}

export default Home;
