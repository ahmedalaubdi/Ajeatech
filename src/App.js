import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Customers from "./components/Customer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Customers />
      <Contact />
    </div>
  );
}

export default App;
