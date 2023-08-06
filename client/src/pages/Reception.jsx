import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AbiAboutOrg from '../components/abiAboutOrg/abiAboutOrg.jsx';
import Specialties from '../components/specialties/Specialties.jsx';
import AbiAdmission from '../components/abiAdmission/abiAdmission.jsx';

const Reception = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AbiAboutOrg/>
        <Specialties/>
        <AbiAdmission/>
        <Footer/>
        </div>
    )
}
export default Reception;