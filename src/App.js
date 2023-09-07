// import React, { useEffect, useState } from "react";

// import { Route, Routes, Navigate } from "react-router-dom";
// import MovieList from './components/MovieList';
// import Movie from './components/Movie';

// import MovieHeader from './components/MovieHeader';

// import FavoriteMovieList from './components/FavoriteMovieList';

// import axios from 'axios';

// const App = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [favoriteMovies, setFavoriteMovies] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:9000/api/movies')
//       .then(res => {
//         setMovies(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const deleteMovie = (id) => {
//   }

//   const addToFavorites = (movie) => {

//   }

//   return (
//     <div>
//       <nav className="navbar navbar-dark bg-dark">
//         <span className="navbar-brand" > HTTP / CRUD Module Project</span>
//       </nav>

//       <div className="container">
//         <MovieHeader />
//         <div className="row ">
//           <FavoriteMovieList favoriteMovies={favoriteMovies} />

//           <Routes>
//             <Route path="movies/edit/:id" />

//             <Route path="movies/:id" />

//             <Route path="movies" element={<MovieList movies={movies} />} />

//             <Route path="/" element={<Navigate to="/movies" />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default App;
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import MovieHeader from './components/MovieHeader';
import FavoriteMovieList from './components/FavoriteMovieList';
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
    // Check if the movie is already in favorites
    const isAlreadyFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id);

    if (!isAlreadyFavorite) {
      // Add the movie to the list of favorite movies
      setFavoriteMovies(prevFavorites => [...prevFavorites, movie]);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" >HTTP / CRUD Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader />
        <div className="row ">
          <FavoriteMovieList favoriteMovies={favoriteMovies} />

          <Routes>
            <Route path="movies/edit/:id" />

            <Route path="movies/:id" />

            <Route path="movies" element={<MovieList movies={movies} addToFavorites={addToFavorites} />} />

            <Route path="/" element={<Navigate to="/movies" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
