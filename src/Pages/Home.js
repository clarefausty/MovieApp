import {useEffect, useState} from 'react'
import "./Home.css"
import {BiSearch} from "react-icons/bi"
import {AiFillPlayCircle} from "react-icons/ai"
import MovieCard from '../Components/MovieCard'
import axios from 'axios'



function Home() {
    const[movies, setMovies] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9dcd1bbe1fcddd151198933257ad3d4a&language=en-US&page=1').then(response=>{
            setMovies(response.data.results)
        }).catch(err=>{console.log(err)})
        
    }, []);
  return (
    <div className='home-container'>
        <div className='intro-section'>
            <div className='moviebox-container'>
            <img src='/Asset/tv.png' alt='logo'/>
            <h3>Movie Box</h3>
            </div>
            <div className='search-input'>
            <input
            type='text'
            placeholder='what do you want to watch?'
            />
            <BiSearch className='search-icon'/>
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
        <button><AiFillPlayCircle className="play-icon"/>Watch Trailer</button>
    </div>
    <div className='card-container' >
        <div className='card-con-title'>
        <h1>Featured Movies</h1>
        <p>See More </p>
        </div>
        <div className='card-component'>
    {movies.map((movie, index)=>{
        return<MovieCard key={index} {...movie}/>
    })}
        </div>
    </div>
    </div>
  )
}

export default Home