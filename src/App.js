import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Series from './Components/Series/series';
import Movie from './Components/Movie/movie';
import Kids from './Components/Kids/kids';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
