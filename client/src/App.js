import { React, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter.jsx";



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


                {/* <Accreditation/>
                <Footer/> */}
        {/* </div> */}
        </BrowserRouter>
    )
}

export default App;
