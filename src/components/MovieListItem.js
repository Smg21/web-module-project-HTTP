
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props) => {
  const { id, title, director, genre, metascore } = props.movie;

  const addToFavorites = () => {

    setFavorites((prevFavorites) => [...prevFavorites, props.movie]);
  };


  const [favorites, setFavorites] = useState([]);

  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{director}</td>
      <td>{genre}</td>
      <td>{metascore}</td>
      <td>
        <Link to={`/movies/${id}`} className="view">
          <button onClick={addToFavorites}>Favorite</button>
          <input type="button" className="btn btn-secondary" value="View" />
        </Link>
      </td>
    </tr>
  );
}

export default MovieListItem;

