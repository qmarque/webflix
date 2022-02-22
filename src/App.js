import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Movie from "./Movie";

const queryClient = new QueryClient();

function App() {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => (event) => {
    event.preventDefault();
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };
  return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Header favorites={favorites} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home addToFavorite={addToFavorite} favorites={favorites} />
                }
              />
              <Route
                path="/movies/:id"
                element={
                  <Movie addToFavorite={addToFavorite} favorites={favorites} />
                }
              />
              <Route
                path="/about"
                element={
                  <About />
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
  );
}
export default App;
