// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetchMovies();
//     }, []);

//     const fetchMovies = async () => {
//         try {
//             console.log('Fetching movies...');
//             const response = await axios.get('http://localhost:3002/movies');
//             console.log('Fetched movies:', response.data);
//             setMovies(response.data);
//         } catch (err) {
//             console.error('Error fetching movies:', err);
//         }
//     };

//     return (
//         <>
//             <h2>Featured Movies</h2>
//             <div className="movie-li">
//                 {movies.map((movie, index) => (
//                     <div key={index} className='movie'>
//                         <img src={movie.imageUrl} alt={movie.title} />
//                         <h3>{movie.title}</h3>
//                         <p>{movie.overview}</p>
//                         <p>Released: {movie.releasedOn}</p>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Home;