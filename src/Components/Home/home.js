import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';

const Home = () => {
  const [recMovies, setRecMovies] = useState([]);
  const [recMovies2, setRecMovies2] = useState([]);
  const [popMovies, setPopMovies] = useState([]);
  // trying to get popular series
  const [popSeries, setPopSeries] = useState([]);
  // const [series, setSeries] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching
        const recentMovieRes = await axios.get('http://localhost:3002/movies?category=playing');
        setRecMovies(recentMovieRes.data);

        const recentMovieRes2 = await axios.get('http://localhost:3002/movies?category=playing2');
        setRecMovies2(recentMovieRes2.data);

        const popMovieRes = await axios.get('http://localhost:3002/movies?category=popular');
        setPopMovies(popMovieRes.data);

        const popSeriesRes = await axios.get('http://localhost:3002/series?category=popular');
        setPopSeries(popSeriesRes.data);

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
    <h2 className='h2-title'>Popular Movies & TV Shows</h2>
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

      <section className="nowplay-topsection">
        <div className="container">
          <h2 className="top-title">Recent drops</h2>
          <div className="row">
            {recMovies2.length > 0 ? (
              <div className="col-3">
                <div className="card" style={{ width: '100%' }}>
                  <img
                    className="card-img-top"
                    src={recMovies2[0].imageUrl}
                    alt={recMovies2[0].title}
                  />
                  <div className="card-details">
                    <h5 className="card-title">{recMovies2[0].title}</h5>
                    <div className="card-text-scrollable">
                      <p className="card-text">{recMovies2[0].overview}</p>
                    </div>
                    <p className="card-text">{formatReleaseDate(recMovies2[0].releasedOn)}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-3">
                <p>No recent movies available.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="recent-movies-section">
        <div className="container">
          <h2 className='h2-title'>Now Playing</h2>
          <div className="row flex-nowrap overflow-auto">
            {recMovies.map((movie, index) => (
              <div key={index} className='col-md-2 mb-2'>
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

      <section className="popular-movies-section">
        <div className="container">
          <h2 className='h2-title'>Trending Movies</h2>
          <div className="row flex-nowrap overflow-auto">
            {popMovies.map((movie, index) => (
              <div key={index} className='col-md-2 mb-2'>
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
          <h2 className='h2-title'>TV Shows</h2>
          <div className="row flex-nowrap overflow-auto">
            {popSeries.map((series, index) => (
              <div key={index} className='col-md-2 mb-2'>
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
          <h2 className='h2-title'>Trending Actors</h2>
          <div className="row flex-nowrap overflow-auto">
            {actors.map((actor, index) => (
              <div key={index} className='col-md-2 mb-2'>
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
