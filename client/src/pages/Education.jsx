import React from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/nav/Navbar.jsx'
import LinkBox from '../components/UI/link-box/LinkBox.jsx';
import AboutEducation from '../components/aboutEducation/aboutEducation.jsx'


const aboutEducation = (props) => {


    document.title = props.title
    return( 
        <div>
            <Navbar/>
                <AboutEducation/>
            <Footer/>
        </div>
    );
}
export default aboutEducation;