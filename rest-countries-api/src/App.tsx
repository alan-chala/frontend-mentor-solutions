import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Countries } from "./pages/Countries";
import { CountryDetail } from "./pages/CountryDetail";

// Components
import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="md:px-20 md:py-10 py-6 px-4 space-y-10">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:alpha3Code" element={<CountryDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
