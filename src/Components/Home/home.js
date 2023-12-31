import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [recMovies, setRecMovies] = useState([]);
  const [popMovies, setPopMovies] = useState([]);
  // const [popSeries, setPopSeries] = useState([]);
  const [series, setSeries] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching
        const recentMovieRes = await axios.get('http://localhost:3002/movies?category=playing');
        setRecMovies(recentMovieRes.data);

        const popMovieRes = await axios.get('http://localhost:3002/movies?category=popular');
        setPopMovies(popMovieRes.data);

        // const popSeriesRes = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=YOUR_TMDB_API_KEY&language=en-US&page=1');
        // setPopSeries(popSeriesRes.data.results);

        const seriesRes = await axios.get('http://localhost:3002/series');
        setSeries(seriesRes.data);

        const actorsRes = await axios.get('http://localhost:3002/trending-actors');
        setActors(actorsRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchData();
  }, []);

  function formatReleaseDate(releaseDate) {
    if (!releaseDate) return "N/A";

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(releaseDate).toLocaleDateString(undefined, options);

    const [month, day, year] = formattedDate.split('/');
    return `${month}-${day}-${year}`;
  }

  return (
    <div className="home">
      {/* Creating a row for trending series and movies together */}

      {/* <section className="mixed-section">
  <div className="container">
    <h2 style={{ fontSize: '25px' }}>Popular Movies & TV Shows</h2>
    <div className="row flex-nowrap overflow-auto">
      {popMovies.map((movie, index) => (
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
      {popSeries.map((show, index) => (
        <div key={index} className='col-md-2 mb-4'>
          <div className='card' style={{ width: '100%' }}>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
            <div className='card-details'>
              <h5 className="card-title">{show.name}</h5>
              <div className="card-text-scrollable">
                <p className="card-text">{show.overview}</p>
              </div>
              <p className="card-text">First Aired: {show.first_air_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}

      <section className="popular-movies-section">
        <div className="container">
          <h2 style={{ fontSize: '20px', fontWeight: '200', marginLeft: '25px' }}>Trending Movies</h2>
          <div className="row flex-nowrap overflow-auto">
            {popMovies.map((movie, index) => (
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
                    <p className="card-text">{formatReleaseDate(movie.releasedOn)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recent-movies-section">
        <div className="container">
          <h2 style={{ fontSize: '20px', fontWeight: '200', marginLeft: '25px' }}>Now Playing</h2>
          <div className="row flex-nowrap overflow-auto">
            {recMovies.map((movie, index) => (
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
                    <p className="card-text">{formatReleaseDate(movie.releasedOn)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="series-section">
        <div className="container">
          <h2 style={{ fontSize: '20px', fontWeight: '200', marginLeft: '25px' }}>TV Shows</h2>
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
                    <p className="card-text">{formatReleaseDate(series.releasedOn)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="actors-section">
        <div className="container">
          <h2 style={{ fontSize: '20px', fontWeight: '200', marginLeft: '25px' }}>Trending Actors</h2>
          <div className="row flex-nowrap overflow-auto">
            {actors.map((actor, index) => (
              <div key={index} className='col-md-2 mb-4'>
                <Link to={`/actor/${actor.id}`} className="actor-link">
                  <div className='card' style={{ width: '100%' }}>
                    {actor.profileImageUrl ? (
                      <img
                        className="card-img-top"
                        src={actor.profileImageUrl}
                        alt={actor.name}
                      />
                    ) : (
                      <div className="placeholder-image">No Image Available</div>
                    )}
                    <div className='card-details'>
                      <h5 className="card-title">{actor.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
