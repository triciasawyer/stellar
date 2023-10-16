import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`http://localhost:3002/movies/${movieId}`);
        setMovieDetails(response.data);
      } catch (err) {
        console.error('Error fetching movie details:', err);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>{movieDetails.imageUrl}</p>
      <p>{movieDetails.releasedOn}</p>
    </div>
  );
};

export default MovieDetail;
