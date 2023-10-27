import Home from "./components/home.js";
import NavBar from "./components/navbar.js";
import Socials from "./components/socials.js";
import About from "./components/about.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>

      <Socials />
    </div>
  );
}

export default App;
