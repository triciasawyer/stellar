import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './home.css';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchPopularData() {
      try {
        // Fetch movies
        const popularMovieRes = await axios.get('http://localhost:3002/movies?category=popular');
        setPopularMovies(popularMovieRes.data);

        // Fetch TV series
        const seriesResponse = await axios.get('http://localhost:3002/series');
        setSeries(seriesResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchPopularData();
  }, []);

  return (
    <div className="home">
      <section className="popular-movies-section">
        <div className="container">
          <h2>Popular Movies</h2>
          <div className="row flex-nowrap overflow-auto">
            {popularMovies.map((movie, index) => (
              <div key={index} className='col-md-2 mb-4'>
                <div className='card' style={{ width: '100%' }}>
                  <img
                    className="card-img-top"
                    src={movie.imageUrl}
                    alt={movie.title}
                  />
                  <div className='card-details'>
                    <h5 className="card-title">{movie.title}</h5>
                    <div className="card-text-scrollable">
                      <p className="card-text">{movie.overview}</p>
                    </div>
                    <p className="card-text">Released: {movie.releasedOn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="series-section">
        <div className="container">
          <h2>TV Shows</h2>
          <div className="row flex-nowrap overflow-auto">
            {series.map((series, index) => (
              <div key={index} className='col-md-2 mb-4'>
                <div className='card' style={{ width: '100%' }}>
                  <img
                    className="card-img-top"
                    src={series.imageUrl}
                    alt={series.title}
                  />
                  <div className='card-details'>
                    <h5 className="card-title">{series.title}</h5>
                    <div className="card-text-scrollable">
                      <p className="card-text">{series.overview}</p>
                    </div>
                    <p className="card-text">Released: {series.releasedOn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
