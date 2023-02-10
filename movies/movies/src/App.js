import { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

import "./App.css";

// endpoint for the OMDb API
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b7f85bca";

const App = () => {
  
  const [movies, setMovies] = useState([]);                 // state variable to store the search results
  
  const [searchTerm, setSearchTerm] = useState('');         // state variable to store the search term

  
  const searchMovies = async (title) => {                   // function to search for movies using the OMDb API
    
    const response = await fetch(`${API_URL}&s=${title}`);  // fetch the movie data from the API
    
    const data = await response.json();                     // parse the json data

    
    setMovies(data.Search);                                 // set the movies state variable to the search results
  };
  
  
  useEffect(() => {            // useEffect hook to call the searchMovies function with the title "Matrix" when the component first renders
    searchMovies("Matrix");
  }, []);

  return (
    <div className="app">
      <h1>Movie Finder</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* icon to initiate the search */}
        <img 
        src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {/* check if any movies were found */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* map over the search results and render a movie card for each */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No Movies Found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;