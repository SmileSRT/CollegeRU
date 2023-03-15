import React from "react";
import { BrowserRouter } from "react-router-dom";
import Carousel from "./components/carousel/Carousel.jsx";
import Navbar from "./components/nav/Navbar.jsx";


const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
        <Carousel/>

      <div>client version hi</div>
    </BrowserRouter>
  )
}

export default App;
