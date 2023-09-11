import React from 'react'
import "./Home.css"
import {BiSearch} from "react-icons/bi"
import {AiFillPlayCircle} from "react-icons/ai"



function Home() {
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
        <button>Watch Trailer<AiFillPlayCircle/></button>
    </div>
    </div>
  )
}

export default Home