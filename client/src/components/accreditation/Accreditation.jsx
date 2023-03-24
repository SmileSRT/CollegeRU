import React, { useState } from 'react';
import classes from './Accreditation.module.css'
import accreditationImage1 from '../../../public/images/accreditation/accreditationImage1.jpg'
import accreditationImage2 from '../../../public/images/accreditation/accreditationImage2.jpg'
import accreditationImage3 from '../../../public/images/accreditation/accreditationImage3.jpg'
import accreditationImage4 from '../../../public/images/accreditation/accreditationImage4.jpg'
import accreditationBackground from '../../../public/images/accreditation/accreditationBackground.png'
import { Col, Container, Row } from 'react-bootstrap';


const Accreditation = () => {   

    return( 
        <div className={classes.accreditationBlock} style={{backgroundImage: "url('" + accreditationBackground + "'", backgroundSize: "cover"}}>
            {/* <div className={classes.accreditationBlock}> */}
                
            <Container>
                <h1 className='display-4 mb-5'>Лицензия и государственная аккредитация</h1>
                
                <Row>
                    <Col>
                        <a href="">
                            <img className="mx-auto d-block" src={accreditationImage1} alt="" width="auto" height="400px" />
                        </a>
                        <p class="ledge text-center my-2">Лицензия на осуществление образовательной деятельности №77080 от 24 мая 2017 г. Серия: 50Л01 №0008960</p>
                    </Col>
                    <Col>
                        <a href="#">
                            <img className="mx-auto d-block" src={accreditationImage2} alt="" width="auto" height="400px"/>
                        </a>
                        <p class="ledge text-center my-2">Приложение №1 к лицензии на осуществление образовательной деятельности</p>
                    </Col>
                    <Col>
                        <a href="#">
                            <img className="mx-auto d-block" src={accreditationImage3} alt="" width="auto" height="400px"/>
                        </a>
                        <p class="ledge text-center my-2">Свидетельство о государственной аккредитации от 23 июня 2017г. Серия: 50А01 №0000172</p>
                    </Col>
                    <Col>
                        <a href="#">
                            <img className="mx-auto d-block" src={accreditationImage4} alt="" width="auto" height="400px"/>
                        </a>
                        <p class="ledge text-center my-2">Приложение №1 к свидетельству о государственной аккредитации от 23 июня 2017 г. №4201</p>
                    </Col>

                </Row>
            </Container>
            {/* <div class="container mx-auto">
                <div class="container">
                    <h1 class="display-4 mb-5">
                        Лицензия и государственная аккредитация
                    </h1>
                </div>

                <div class="d-flex flex-row">
                    <div class="col md-auto" className={classes.sidebars}>
                        <a href="">
                            <img src={accreditationImage1} alt="" width="auto" height="400px" />
                        </a>
                        <p class="ledge text-center my-2">Лицензия на осуществление образовательной деятельности №77080 от 24 мая 2017 г. Серия: 50Л01 №0008960</p>
                    </div>
                    <div class="col md-auto" className={classes.sidebars}>
                        <a href="#">
                            <img src={accreditationImage2} alt="" width="auto" height="400px"/>
                        </a>
                        <p class="ledge text-center my-2">Приложение №1 к лицензии на осуществление образовательной деятельности</p>
                    </div>
                    <div class="col md-auto" className={classes.sidebars}>
                        <a href="#">
                            <img src={accreditationImage3} alt="" width="auto" height="400px"/>
                        </a>
                        <p class="ledge text-center my-2">Свидетельство о государственной аккредитации от 23 июня 2017г. Серия: 50А01 №0000172</p>
                    </div>
                    <div class="col md-auto" className={classes.sidebars}>
                        <a href="#">
                            <img src={accreditationImage4} alt="" width="auto" height="400px"/>
                        </a>
                        <p class="ledge text-center my-2">Приложение №1 к свидетельству о государственной аккредитации от 23 июня 2017 г. №4201</p>
                    </div>
                </div>
            </div> */}
                
        </div>
        // </div>
    );
}
export default Accreditation;