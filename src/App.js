import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Movie from "./Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
