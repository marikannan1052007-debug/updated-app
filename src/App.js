import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;