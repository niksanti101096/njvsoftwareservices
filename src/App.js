import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MyHeader from "./components/MyHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </Router>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
