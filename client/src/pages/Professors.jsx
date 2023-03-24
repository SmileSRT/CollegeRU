import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";


const AboutProfessors = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>

        <Footer/>
        </div>
    );
}
export default AboutProfessors;