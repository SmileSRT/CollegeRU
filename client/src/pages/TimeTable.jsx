import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import StuTimeTable from '../components/stuTimeTable/stuTimeTable.jsx';

const TimeTable = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <StuTimeTable/>
        <Footer/>
        </div>
    );
}
export default TimeTable;