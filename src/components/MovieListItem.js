// import React from 'react';
// import { Link } from 'react-router-dom';

// const MovieListItem = (props) => {
//   const { id, title, director, genre, metascore } = props.movie;
//   const toggleFavorite = () => {
  
//     addToFavorites(movie);
//   };

//   return (<tr key={id}>
//     <td>{title}</td>
//     <td>{director}</td>
//     <td>{genre}</td>
//     <td>{metascore}</td>
//     <td>
//       <Link to={`/movies/${id}`} className="view">
//       <button onClick={toggleFavorite}>Favorite</button>
//         <input type="button" className="btn btn-secondary" value="View" />
//       </Link>
//     </td>
//   </tr>);
// }

// export default MovieListItem;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props) => {
  const { id, title, director, genre, metascore } = props.movie;

  // Define addToFavorites function
  const addToFavorites = () => {
    // Add the movie to the list of favorites
    setFavorites((prevFavorites) => [...prevFavorites, props.movie]);
  };

  // State to keep track of favorite movies
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

