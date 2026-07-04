import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;