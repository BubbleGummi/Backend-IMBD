import React, { useState, useEffect } from "react";
import MovieSection from "./MovieSection";

const movies_popular =
  "https://api.themoviedb.org/3/movie/popular?api_key=81bfbe17a407be51163c0a34073f25d7&language=en-US&page=1";

const movies_top =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=81bfbe17a407be51163c0a34073f25d7&language=en-US&page=1";

function MovieList(recently, setRecently) {
  const [movies, setMovies] = useState([]);
  const [moviestop, setMoviesTop] = useState([]);

  useEffect(() => {
    fetch(movies_popular)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(movies_top)
      .then((response) => response.json())
      .then((data) => {
        setMoviesTop(data.results);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Popular</h2>
        <div className="moviecontainer">
          {movies.length > 0 &&
            movies.map((movie) => <MovieSection key={movie.id} {...movie} />)}
        </div>
      </div>
      <div>
        <h2>Top rated</h2>
        <div className="moviecontainer">
          {moviestop.length > 0 &&
            moviestop.map((movie) => (
              <MovieSection key={movie.id} {...movie} />
            ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
