import React from 'react';

// functional component to display the movie card
const MovieCard = ({ movie }) => {
    return (

        <div className="movie">
            <div>
                {/* display the year of the movie */}
                <p>{movie.Year}</p>
            </div>
            <div>
                {/* display the poster of the movie, if the poster url is not 'N/A' display the poster otherwise use a placeholder */}
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}></img>
            </div>
            <div>
                {/* display the type of the movie */}
                <span>{movie.Type}</span>
                {/* display the title of the movie */}
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard