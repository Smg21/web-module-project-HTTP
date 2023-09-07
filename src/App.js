import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import MovieHeader from './components/MovieHeader';
import FavoriteMovieList from './components/FavoriteMovieList';
import EditMovieForm from "./components/EditMovieForm";
import axios from 'axios';

const App = (props) => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addToFavorites = (movie) => {
    const isAlreadyFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id);

    if (!isAlreadyFavorite) {
      setFavoriteMovies(prevFavorites => [...prevFavorites, movie]);
    }
  };

  return (
    <div>
      {/* Navbar and other components */}
      <div className="container">
        <MovieHeader />
        <div className="row">
          <FavoriteMovieList favoriteMovies={favoriteMovies} />
          <Routes>
            <Route path="movies/edit/:id" element={<EditMovieForm setMovies={setMovies} />} />
            <Route path="movies/:id" element={<Movie addToFavorites={addToFavorites} />} />
            <Route path="movies" element={<MovieList movies={movies} addToFavorites={addToFavorites} />} />
            <Route path="/" element={<Navigate to="/movies" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
