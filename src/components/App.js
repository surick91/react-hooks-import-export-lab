import React from "react";
import About from "./components/About";
import Home from  "./components/Home";
import NavBar from "./components/Navbar";
import {username,city} from "./components/Home";;
import image from "./components/About";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
