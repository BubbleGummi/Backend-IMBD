import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';
import "./movie.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function MovieSection({ title, vote_average, poster_path, id }) {
  return (
    <>
      <div className="movie">
        <div className="votestar">
          <StarRateIcon /> {vote_average}
        </div>

        <Link to={`title/${id}`} className="title">
          <img
            className="movieimage"
            src={movieImages + poster_path}
            alt={title}
          />
          <h3 className="card-info">{title}</h3>{" "}
        </Link>
      </div>
    </>
  );
}

export default MovieSection;
