import React from "react";
import { BrowserRouter } from "react-router-dom";
import AboutOrg from "./components/aboutOrg/AboutOrg.jsx";
import Accreditation from "./components/accreditation/Accreditation.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/nav/Navbar.jsx";
import Specialties from "./components/specialties/Specialties.jsx";


const App = () => {
  return(
    <BrowserRouter>
    {/* <div class="container w-100"> */}
      <Navbar/>
        <Carousel/>
        <AboutOrg/>
        <Specialties/>
    {/* Распечатать фото с голубями камила */}

      <Accreditation/>
      <Footer/>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App;
