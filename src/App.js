import About from "./components/About";

import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Hero from "./components/Hero.js";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
