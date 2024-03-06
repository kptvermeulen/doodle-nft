import React from "react";
import "styles/main.css";
import Home from "views/Home";
import Play from "views/Play";
import Leaderboard from "views/Leaderboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "swiper/css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
