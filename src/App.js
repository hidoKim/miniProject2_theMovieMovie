import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import NotFound from './pages/NotFound';
import Header from "./components/Header";
import Movie from './components/Movie';
import { dummy } from './movieDummy';
import MovieDetail from './pages/MovieDetail';
import { peopleD } from './peopleDummy';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
