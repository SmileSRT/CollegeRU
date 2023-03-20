import React from 'react';
import classes from './Specialties.module.css'
import specialty1 from '../../../public/images/specialities/speciality1.png'
import specialty2 from '../../../public/images/specialities/speciality2.png'
import specialty3 from '../../../public/images/specialities/speciality3.png'
import specialty4 from '../../../public/images/specialities/speciality4.png'
import specialty5 from '../../../public/images/specialities/speciality5.png'
import specialty6 from '../../../public/images/specialities/speciality6.png'
import { Col, Container, Row } from 'react-bootstrap';


const Specialties = () => {
    return( 
            <div style={{width: "1500px", margin: "auto"}}>
                <Container><h1 className='display-4'>Учебные направления</h1></Container>
                <Row className='mx-auto'>
                    <Col className={classes.zoom} style={{backgroundImage: specialty1}}>
                        <img src={specialty1} alt="Право и организация социального обеспечения" />
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty2}}>
                        <img src={specialty2} alt="Бухгалтер, специалист банковского дела" />
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty3}}>
                        <img src={specialty3} alt="Учитель начальных классов" />
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty4}}>
                        <img src={specialty4} alt="Дошкольное образование" />
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty5}}>
                        <img src={specialty5} alt="Сестринское дело" />
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty6}}>
                        <img src={specialty6} alt="Дизайн" />
                    </Col>
                </Row>
            </div>
            
        //     <div className='flex'>
                
                
        //     </div>
        // </div>

        // <div>
        //     <div class="container">
        //         <h1 class="display-4">Учебные направления</h1>
        //     </div>

        //     <div class="container">
        //         <div class="d-flex flex-row w-100">
        //             <div class="col md-auto" className={classes.zoom} style={{backgroundImage: specialty1}}>
        //                 <a href="#">
        //                     <img src={specialty1} alt="" />
        //                 </a>
        //             </div>
        //             <div class="col md-auto" className={classes.zoom} style={{backgroundImage: specialty2}}>
        //                 <a href="#">
        //                     <img src={specialty2} alt="" />
        //                 </a>
        //             </div>
        //             <div class="col md-auto" className={classes.zoom} style={{backgroundImage: specialty3}}>
        //                 <a href="#">
        //                     <img src={specialty3} alt="" />
        //                 </a>
        //             </div>
        //             <div class="col md-auto" className={classes.zoom} style={{backgroundImage: specialty4}}>
        //                 <a href="#">
        //                     <img src={specialty4} alt="" />
        //                 </a>
        //             </div>
        //             <div class="col md-auto" className={classes.zoom} style={{backgroundImage: specialty5}}>
        //                 <a href="#">
        //                     <img src={specialty5} alt="" />
        //                 </a>
        //             </div>
        //             <div class="col md-auto" className={classes.zoom} style={{backgroundImage: specialty6}}>
        //                 <a href="#">
        //                     <img src={specialty6} alt="" />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
export default Specialties;