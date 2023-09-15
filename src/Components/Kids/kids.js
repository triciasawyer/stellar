import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Kids = () => {
    const [kids, setKids] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchKids = useCallback(async () => {
        try {
            console.log('Fetching kids content...');
            let url = 'http://localhost:3002/kids';

            if (searchQuery) {
                url += `?searchQuery=${searchQuery}`;
            }
            const response = await axios.get(url);
            console.log('Fetched kids content:', response.data);

            setKids(response.data);
            console.log('Updated kids content:', response.data);
        } catch (err) {
            console.error('Error fetching kids content:', err);
        }
    }, [searchQuery]);

    useEffect(() => {
        fetchKids();
    }, [fetchKids]);

    return (
        <>
            <div className="search-bar d-flex justify-content-center mb-3">
                <input
                    type="text"
                    placeholder="Search kids..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn" onClick={fetchKids}>
                    Search
                </button>
            </div>
            <div className="container">
                <div className="row">
                    {kids.map((kid, index) => (
                        <div key={index} className='col-md-2 mb-4'>
                            <div className='card' style={{ width: '100%' }}>
                                <div className="card-image">
                                    <img
                                        className="card-img-top"
                                        src={kid.imageUrl}
                                        alt={kid.title}
                                    />
                                </div>
                                <div className='card-details'>
                                    <h5 className="card-title">{kid.title}</h5>
                                    <div className="card-text-scrollable">
                                        <p className="card-text">{kid.overview}</p>
                                    </div>
                                    <p className="card-text">Released: {kid.releasedOn}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Kids;