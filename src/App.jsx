import { Routes, Route, Navigate } from "react-router-dom";
import FireFightPage from "./pages/FireFightPage";
import ElectricalPage from "./pages/ElectricalPage";
import PlumbingPage from "./pages/PlumbingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/fire-fight" />} />
      <Route path="/fire-fight" element={<FireFightPage />} />
      <Route path="/electrical" element={<ElectricalPage />} />
      <Route path="/plumbing" element={<PlumbingPage />} />
    </Routes>
  );
}
export default App;
