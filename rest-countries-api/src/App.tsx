import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Countries } from "./pages/Countries";
import { Country } from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:alpha3Code" element={<Country />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
