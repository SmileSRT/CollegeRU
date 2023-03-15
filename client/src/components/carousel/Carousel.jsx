import React from 'react';
import carousel1 from '../../../public/openDoorsDay.png'



const Carousel = (props) => {

    // $('.carousel').carousel({
    //     interval: 2000
    // });
    
    const carouselStyles = {width: "50%", height: "auto"}
    const carouselItemStyle = {width: "100%", height: "600px"}
    return(  
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" style={carouselItemStyle} src={carousel1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" style={carouselItemStyle} src={carousel1} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" style={carouselItemStyle} src={carousel1} alt="Third slide"/>
                </div>
            </div>
        </div>


    );
}
export default Carousel;