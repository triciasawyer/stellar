import React, { useEffect, useState } from 'react';
import MovieRow from './movieRow';
import axios from 'axios';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  // Fetch data for popular movies and TV shows
  useEffect(() => {
    async function fetchPopularData() {
      try {
        // Fetching popular movies
        const moviesResponse = await axios.get('/popular-movies');
        setPopularMovies(moviesResponse.data);

        // Fetching popular series
        const tvShowsResponse = await axios.get('/popular-series');
        setPopularTVShows(tvShowsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPopularData();
  }, []);

  return (
    <div className="home">
      <MovieRow title="Popular Movies" movies={popularMovies} />
      <MovieRow title="Popular TV Shows" movies={popularTVShows} />
    </div>
  );
};

export default Home;
