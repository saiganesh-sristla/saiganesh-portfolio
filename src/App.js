import Home from "./components/home.js";
import NavBar from "./components/navbar.js";
import Socials from "./components/socials.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Experience/>
      <Socials />
    </div>
  );
}

export default App;
