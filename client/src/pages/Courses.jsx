import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AbiCourses from '../components/abiCourses/abiCourses.jsx';
import TableCourses from '../components/UI/tableCourses/tableCourses.jsx';

const Courses = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AbiCourses/>
        <TableCourses/>
        <Footer/>
        </div>
    );
}
export default Courses;