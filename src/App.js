import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Movie from "./Movie";

const queryClient = new QueryClient();

function App() {
  return (
        <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
  );
}
export default App;
