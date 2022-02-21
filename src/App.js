import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./About";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/users/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
