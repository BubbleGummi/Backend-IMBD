import React from "react";
import "./recentlist.css";

const movieImages = "https://www.themoviedb.org/t/p/w440_and_h660_face";

function Recent({ title, poster_path, id }) {
  return (
    <>
      <div className="recentlist">
        <div>
          <img
            className="recentimg"
            alt={title}
            src={movieImages + poster_path}
          />
        </div>
      </div>
    </>
  );
}

export default Recent;
