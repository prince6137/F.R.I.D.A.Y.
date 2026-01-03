import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Events from "./Components/Event";
import Team from "./Components/Team";
import News from "./Components/News";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<News />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
