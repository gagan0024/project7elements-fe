import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import DesignCalculation from "./pages/DesignCalculation";
import NotFound from "./pages/NotFound";
import InitialSetup from "./pages/InitialSetup";
import Login from "./pages/AuthPages/Login";
import Signup from "./pages/AuthPages/Signup";
import Hvacheat from "./pages/hvac/forms/hvacHeatload";
import Hvacvent from "./pages/hvac/forms/hvacVent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hvacheat" element={<Hvacheat />} />
        <Route path="/hvacvent" element={<Hvacvent />} />

        <Route path="/design-calculation" element={<DesignCalculation />} />

        {/* File Setup */}
        <Route path="/initial-setup" element={<InitialSetup />} />

        {/* Electrical */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
