import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
// import Results from "./pages/Results";
// import About from "./pages/About";
// import Admissions from "./pages/Admissions";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />

          {/*
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
