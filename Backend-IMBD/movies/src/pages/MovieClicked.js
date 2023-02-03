import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./movieclicked.css";
import { Link } from "react-router-dom";
import Recent from "../components/Recent";

function MovieClicked({ recently, setRecently }) {
  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=1026eea38d091b7fb22916e8c7542406&language=en-US&page=1`
      );
      const data = await result.json();
      setMovieInfo(data);
      addRecentMovie(data);
    };
    getMovie();
  });
  const addRecentMovie = (movie) => {
    const existingMovie = recently.find((recent) => recent.id === movie.id);
    if (existingMovie) return;

    setRecently([movie, ...recently].slice(0, 5));
  };

  return (
    <>
      <h2 className="clicked-title">{movieInfo.title}</h2>
      <Link to={"/"} className="title">
        <button type="button" className="redirect">
          Back to Movies
        </button>
      </Link>
      <div className="movieclicked">
        <article className="moviedescription">
          <div className="imagediv">
 <img
              className="movieimageclicked"
              src={
                "https://www.themoviedb.org/t/p/w440_and_h660_face" +
                movieInfo.backdrop_path
              }
              alt={movieInfo.title}
            />
          </div>
          <div className="description">
            <p className="p">
              <b>Overview:</b> {movieInfo.overview}
            </p>
            <p className="p">
              {" "}
              <b>Release Date:</b> {movieInfo.release_date}
            </p>
            <p className="p">
              <b>Popularity:</b> {movieInfo.popularity}
            </p>
            <p className="p">
              {" "}
              <b>Vote Average:</b> {movieInfo.vote_average}
            </p>
            <p className="p">
              {" "}
              <b>Number of Votes:</b> {movieInfo.vote_count}
            </p>
          </div>
        </article>
      </div>

      <div>
        <h2 className="recent-heading">Recently Viewed</h2>
        <div className="recent-container">
          {recently.length > 0 &&
            recently.map((movie) => <Recent key={movie.id} {...movie} />)}
        </div>
      </div>
    </>
  );
}

export default MovieClicked;
