import {React, useState} from 'react';
import classes from './SpecialtiesPhones.module.css'
const images = require.context('../../../../public/images/specialities', false, /\.(png)$/);
// import Swiper core and required components
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const specialties=[
    {
        'id': '1',
        'name': 'Юрист',
        'route': '/directions/advocate',
    },
    {
        'id': '2',
        'name': 'Бухгалтер',
        'route': '/directions/credit',
    },
    {
        'id': '3',
        'name': 'Учитель начальных классов',
        'route': '/directions/teacher',
    },
    {
        'id': '4',
        'name': 'Дошкольное образование',
        'route': '/directions/preschool',
    },
    {
        'id': '5',
        'name': 'Сестринское дело',
        'route': '/directions/doctor',
    },
    {
        'id': '6',
        'name': 'Дизайн',
        'route': '/directions/design',
    },
    {
        'id': '7',
        'name': 'Фармация',
        'route': '/directions/pharmacist',
    },
]

let width = window.innerWidth
let countSlidesPerView;

if (width < 450) {
    countSlidesPerView = 3;
}
else if (width <= 768){
    countSlidesPerView = 4;
}
else if (width <= 1024){
    countSlidesPerView = 5;
}
else if (width < 1280){
    countSlidesPerView = 6;
}

const SpecialtiesPhones = () => {
    

    return( 
        <div className={classes.swiperContainer}>
            <Swiper
                slidesPerView={countSlidesPerView}
                navigation
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {specialties.map((specialty) => (
                    <SwiperSlide>
                        <a href={specialty.route}>
                            <img className={classes.speciality} src={images(`./speciality${specialty.id}.png`)} alt={specialty.name}/>
                        </a>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
}
export default SpecialtiesPhones;