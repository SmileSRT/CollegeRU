import React, { useEffect, useState } from 'react';
import carousel1 from '../../../public/images/slider.png'
import Carousel from 'react-bootstrap/Carousel';


function CarouselComponent() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval="3000" pause={false}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel1}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel1}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    );
}


export default CarouselComponent;

// const Carousel = (props) => {

//     // <script>
//     //     {$('.carousel').carousel({
//     //         interval: 2000
//     //     })}
//     // </script>
//     // const [carousel, currentSlide] = useState(0)

//     // const slide = (carousel) => {
//     //     return carousel({interval: 2000})
//     // }

//     const carouselItemStyle = {width: "100%", height: "auto"}
//     return(  
//         <div class="carousel slide" data-ride='carousel'>
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <img class="d-block w-100 img-fluid" style={carouselItemStyle} src={carousel1} alt="First slide"/>
//                 </div>
//                 <div class="carousel-item">
//                     <img class="d-block w-100 img-fluid" style={carouselItemStyle} src={carousel1} alt="Second slide"/>
//                 </div>
//                 <div class="carousel-item">
//                     <img class="d-block w-100 img-fluid" style={carouselItemStyle} src={carousel1} alt="Third slide"/>
//                 </div>
//             </div>

//         </div>
