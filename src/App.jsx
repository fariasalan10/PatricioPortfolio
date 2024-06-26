import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-800 selection:text-neutral-300">
      <div className="fixed top-0 -z-10 h-screen w-screen">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4">
        <Navbar />
      </div>
      <Home />
      <AboutMe />
      <Experience />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
