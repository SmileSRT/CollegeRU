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
                <Container><h1>Учебные направления</h1></Container>
                <Row className='mx-auto'>
                    <Col className={classes.zoom} style={{backgroundImage: specialty1}}>
                        <a href="advocateEdu">
                            <img src={specialty1} alt="Право и организация социального обеспечения"/>
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty2}}>
                        <a href="creditEdu">
                            <img src={specialty2} alt="Бухгалтер, специалист банковского дела" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty3}}>
                        <a href="teacherEdu">
                            <img src={specialty3} alt="Учитель начальных классов" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty4}}>
                        <a href="preschoolEdu">
                            <img src={specialty4} alt="Дошкольное образование" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty5}}>
                        <a href="doctorEdu">
                            <img src={specialty5} alt="Сестринское дело" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty6}}>
                        <a href="designEdu">
                            <img src={specialty6} alt="Дизайн" />
                        </a>
                    </Col>
                </Row>
            </div>
    );
}
export default Specialties;