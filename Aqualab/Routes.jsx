import { Routes, Route} from "react-router-dom";
import Home from "./src/views/Home.jsx";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />      
    </Routes>
  );
}

export default AppRoutes;
