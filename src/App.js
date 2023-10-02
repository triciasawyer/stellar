import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Series from './Components/Series/series';
import Movie from './Components/Movie/movie';
import Kids from './Components/Kids/kids';
import Actor from './Components/Home/actor';
import SearchPage from './Components/Home/searchPage';
import Footer from './Components/Footer/footer';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actor/:id" element={<Actor />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
