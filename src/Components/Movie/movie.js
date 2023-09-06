import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './movie.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchMovies = useCallback(async () => {
        try {
            console.log('Fetching movies...');
            let url = 'http://localhost:3002/movies';
            if (searchQuery) {
                url += `?searchQuery=${searchQuery}`;
            }
            const response = await axios.get(url);
            console.log('Fetched movies:', response.data);
            setMovies(response.data);
            console.log('Updated movies:', response.data);
        } catch (err) {
            console.error('Error fetching movies:', err);
        }
    }, [searchQuery]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <>
            <div className="search-bar d-flex justify-content-center mb-3">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn" onClick={fetchMovies}>
                    Search
                </button>
            </div>
            <div className="container">
                <div className="row">
                    {movies.map((movie, index) => (
                        <div key={index} className='col-md-2 mb-4'>
                            <div className='card' style={{ width: '100%' }}>
                                <div className="card-image">
                                    <img
                                        className="card-img-top"
                                        src={movie.imageUrl}
                                        alt={movie.title}
                                    />
                                </div>
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
        </>
    )
}

export default Movie;