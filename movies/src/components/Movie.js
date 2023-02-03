import React from "react";
import "../pages/movieclicked.css";

const clickedIMG = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <>
      <>
        <div className="movie">
          <img
            className="movieimage"
            src={clickedIMG + poster_path}
            alt={title}
          />
          <h3 className="title">{title + " " + vote_average}</h3>
        </div>
      </>
    </>
  );
}

export default Movie;
