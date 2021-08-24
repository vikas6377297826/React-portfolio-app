import { Navbar } from "./components/Navbar.js";
import About from "./components/About.js";
import Project from "./components/Project.js";
import { Skills } from "./components/Skills.js";
import { Testimonials } from "./components/Testimonials.js";
import { Contact } from "./components/Contact.js";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
