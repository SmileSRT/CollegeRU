import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutStandarts from '../components/aboutStandarts/aboutStandarts.jsx';

const StandartsEdu = (props) => {
    const title = props.title
    document.title = title;
    return( 
        <div>
        <Navbar/>
        <AboutStandarts/>
        <Footer/>
        </div>
    );
}
export default StandartsEdu;