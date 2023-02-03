import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieClicked from "./pages/MovieClicked";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Recent from "./components/Recent";

function App() {
  const [recently, setRecently] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Navbar />} />
        <Route
          path="/title/:id"
          element={
            <MovieClicked recently={recently} setRecently={setRecently} />
          }
        />
        <Route
          path="/title/:id"
          element={<Recent recently={recently} setRecently={setRecently} />}
        />

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
