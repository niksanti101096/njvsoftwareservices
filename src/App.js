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
          <Route path="/njvsoftwareservices" element={<Home />} />
          <Route path="/njvsoftwareservices/aboutUs" element={<About />} />
          <Route path="/njvsoftwareservices/careers" element={<Careers />} />
          <Route path="/njvsoftwareservices/contactUs" element={<Contact />} />
          <Route path="/njvsoftwareservices/services" element={<Services />} />
          <Route path="/njvsoftwareservices/technologies" element={<Technologies />} />
        </Routes>
      </Router>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
