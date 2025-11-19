import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Users from "./components/Admin/Users/Users";
import Rating from "./components/Admin/Rating/Rating";
import Hotel from "./components/Admin/Hotel/Hotel";
import Package from "./components/Admin/Package/Package";
import Subplace from "./components/Admin/Subplace/Subplace";
import Place from "./components/Admin/Place/Place";


function App() {
  return (
    <>
      <div className="bg-gray-400">
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/user" element={<Users />} />
          <Route path="/admin/place" element={<Place />} />
          <Route path="/admin/subplace" element={<Subplace />} />
          <Route path="/admin/package" element={<Package />} />
          <Route path="/admin/hotel" element={<Hotel />} />
          <Route path="/admin/rating" element={<Rating />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
