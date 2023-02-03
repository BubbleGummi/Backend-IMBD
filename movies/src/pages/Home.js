import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <>
      <div className="App">
        <Navbar />
        <MovieList />
        <footer>
          This product uses the TMDB API but is not certified by
          TMDB.
        </footer>
      </div>
    </>
  );
}
export default Home;
