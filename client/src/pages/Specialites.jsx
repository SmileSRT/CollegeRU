import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import Specialties from '../components/specialties/Specialties.jsx';

const specialties = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <Specialties/>
        <Footer/>
        </div>
    )
}
export default specialties;