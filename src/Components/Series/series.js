import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Series = () => {
    const [series, setSeries] = useState([]);
    // Get rid of this
    const [searchQuery, setSearchQuery] = useState('');

    const fetchSeries = useCallback(async () => {
        try {
            console.log('Fetching series...');
            let url = 'http://localhost:3002/series';
            if (searchQuery) {
                url += `?searchQuery=${searchQuery}`;
            }
            const response = await axios.get(url);
            console.log('Fetched series:', response.data);
            setSeries(response.data);
            console.log('Updated series:', response.data);
        } catch (err) {
            console.error('Error fetching series:', err);
        }
    }, [searchQuery]);

    useEffect(() => {
        fetchSeries();
    }, [fetchSeries]);

    return (
        <>
            {/* <div className="search-bar d-flex justify-content-center mb-3">
                <input
                    type="text"
                    placeholder="Search series..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn" onClick={fetchSeries}>
                    Search
                </button>
            </div> */}
            <div className="container">
                <div className="row">
                    {series.map((series, index) => (
                        <div key={index} className='col-md-2 mb-4'>
                            <div className='card' style={{ width: '100%' }}>
                                <div className="card-image">
                                    <img
                                        className="card-img-top"
                                        src={series.imageUrl}
                                        alt={series.title}
                                    />
                                </div>
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

        </>
    )
}

export default Series;