import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
