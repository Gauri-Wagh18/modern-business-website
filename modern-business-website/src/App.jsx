import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import { Import } from "lucide-react";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Header />   {/* NavLink is SAFE now */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
