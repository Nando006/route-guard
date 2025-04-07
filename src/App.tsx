import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import RotaPrivada from "./pages/rotaPrivada";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rota-privada" element={<RotaPrivada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
