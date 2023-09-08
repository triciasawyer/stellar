import React from 'react';

const MovieRow = ({ title, movies }) => {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Released: {movie.releasedOn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
