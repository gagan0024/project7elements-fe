import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DesignCalculation from "./pages/DesignCalculation";
import NotFound from "./pages/NotFound";
import InitialSetup from "./pages/InitialSetup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/design-calculation" element={<DesignCalculation />} />

        {/* File Setup */}
        <Route path="/initial-setup" element={<InitialSetup />} />

        {/* Electrical */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
