import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./src/views/Home.jsx";
import Videos from "./src/views/Videos.jsx";

function AppRoutes() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Conteúdo%20Interativo" element={<Navigate to="/videos" replace />} />
  <Route path="/videos" element={<Videos />} />
      
    </Routes>
  );
}

export default AppRoutes;
