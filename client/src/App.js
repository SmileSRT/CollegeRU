import { React, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AboutOrg from "./components/aboutOrg/AboutOrg.jsx";
import Accreditation from "./components/accreditation/Accreditation.jsx";
import AppRouter from "./components/AppRouter/AppRouter.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/nav/Navbar.jsx";
import Specialties from "./components/specialties/Specialties.jsx";
import Auth from "./pages/Auth.jsx";


const App = () => {
    return(
        <BrowserRouter>
            <AppRouter />
            {/* <div class="container w-100"> */}
                {/* <Navbar/>
                <Carousel/>
                <AboutOrg/>
                <Specialties/> */}
                {/* <Auth/> */}
            {/* Распечатать фото с голубями камила */}

                {/* <Accreditation/>
                <Footer/> */}
        {/* </div> */}
        </BrowserRouter>
    )
}

export default App;
