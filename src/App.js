import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import SeriesPage from "./pages/SeriesPage";
import PopularPage from "./pages/PopularPage";
import TrendingPage from "./pages/TrendingPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Series />} />
      </Routes>
    </>
  );
}

export default App;
