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
