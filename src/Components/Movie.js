import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const apiKey = 'YOUR_API_KEY';

  useEffect(() => {
    // Replace 'API_ENDPOINT' with the actual API endpoint of the movie database API
    fetch(`API_ENDPOINT?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results); // Assuming 'results' is the key containing movie data
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
