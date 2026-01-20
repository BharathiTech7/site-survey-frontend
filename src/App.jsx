import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Buildings from "./pages/Buildings";
import Spaces from "./pages/Spaces";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";
import Floors from "./pages/Floors";
import Checklists from "./pages/Checklists";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Login />} />

    <Route element={<ProtectedRoute />}>
     <Route element={<DashboardLayout />}>
     <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/properties/new" element={<AddProperty />} />
    <Route path="/buildings" element={<Buildings />} />
    <Route path="/spaces" element={<Spaces />} />
    <Route path="/properties/edit/:id" element={<EditProperty />} />
    <Route path="/floors" element={<Floors />} />
    <Route path="/checklists" element={<Checklists />} />
  </Route>
</Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
