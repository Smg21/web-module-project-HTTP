// import React from 'react';

// import MovieListItem from './MovieListItem';
// import MovieFooter from './MovieFooter';
// import FavoriteMovieList from './FavoriteMovieList';

// const MovieList = (props) => {
//   const { movies, favoriteMovies } = props;

//   return (
//     <div className="col">
//       <table className="table table-striped table-hover">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Director</th>
//             <th>Genre</th>
//             <th>Metascore</th>
//             <th></th>
//           </tr>
//         </thead>

//         <tbody>
//           {
//             movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
//           }
//         </tbody>
//       </table>
//       <MovieFooter totalMovies={movies.length} />
//     </div>
//   );
// }

// export default MovieList;
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  const { movies, addToFavorites } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Genre</th>
          <th>Metascore</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.genre}</td>
            <td>{movie.metascore}</td>
            <td>
              <Link to={`/movies/${movie.id}`} className="view">
                <button onClick={() => addToFavorites(movie)}>Favorite</button>
                <input type="button" className="btn btn-secondary" value="View" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
