import React from 'react';
import AboutOrg from "../components/aboutOrg/AboutOrg.jsx";
import Accreditation from "../components/accreditation/Accreditation.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/nav/Navbar.jsx";
import Specialties from "../components/specialties/Specialties.jsx";


const Index = () => {
    return( 
        <div>
            <Navbar/>
            <Carousel/>
            <AboutOrg/>
            <Specialties/>
            <Accreditation/>
            <Footer/>
        </div>
    );
}
export default Index;