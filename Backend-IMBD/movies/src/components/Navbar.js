import React, { useRef, useState } from "react";
import MovieSearch from "./MovieSearch";
import { Link } from "react-router-dom";

const search_api =
  "https://api.themoviedb.org/3/search/movie?api_key=1026eea38d091b7fb22916e8c7542406&query=";

function Navbar() {
  const [searchmovie, setSearchMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(search_api + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        if (searchTerm) {
          setSearchMovie(data.results);
        }
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <img
          className="API-source"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
        ></img>

        <form onSubmit={handleSearch}>
          <input
            className="searchmovie"
            type="search"
            placeholder="Search for a movie"
            minLength="1"
            value={searchTerm}
            onChange={handleChange}
            ref={search}
          />
          <Link to={`/search`}></Link>
        </form>
      </header>
      <div className="moviecontainersearch">
        {searchTerm.length > 0 &&
          searchmovie.map((movie) => <MovieSearch key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default Navbar;
