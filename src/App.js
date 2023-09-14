
import React from 'react'
import Home from './Pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MovieDetails from './Components/MovieDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
