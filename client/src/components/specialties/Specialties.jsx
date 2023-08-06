import React from 'react';
import classes from './Specialties.module.css'
import specialty1 from '../../../public/images/specialities/speciality1.png'
import specialty2 from '../../../public/images/specialities/speciality2.png'
import specialty3 from '../../../public/images/specialities/speciality3.png'
import specialty4 from '../../../public/images/specialities/speciality4.png'
import specialty5 from '../../../public/images/specialities/speciality5.png'
import specialty6 from '../../../public/images/specialities/speciality6.png'
import specialty7 from '../../../public/images/specialities/speciality7.png'
import { Col, Container, Row } from 'react-bootstrap';


const Specialties = () => {
    return( 
            <div style={{width: "1500px", margin: "auto"}}>
                <Row>
                    <Col className={classes.zoom} style={{backgroundImage: specialty1}}>
                        <a href="/directions/advocate">
                            <img src={specialty1} alt="Право и организация социального обеспечения"/>
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty2}}>
                        <a href="/directions/credit">
                            <img src={specialty2} alt="Бухгалтер, специалист банковского дела" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty3}}>
                        <a href="/directions/teacher">
                            <img src={specialty3} alt="Учитель начальных классов" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty4}}>
                        <a href="/directions/preschool">
                            <img src={specialty4} alt="Дошкольное образование" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty5}}>
                        <a href="/directions/doctor">
                            <img src={specialty5} alt="Сестринское дело" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty6}}>
                        <a href="/directions/design">
                            <img src={specialty6} alt="Дизайн" />
                        </a>
                    </Col>
                    <Col className={classes.zoom} style={{backgroundImage: specialty7}}>
                        <a href="/directions/pharmacist">
                            <img src={specialty7} alt="Фармация" />
                        </a>
                    </Col>
                </Row>
            </div>
    );
}
export default Specialties;