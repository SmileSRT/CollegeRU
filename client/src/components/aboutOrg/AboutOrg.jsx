import React from 'react';
import anthemVideo from '../../../public/images/aboutOrgImages/anthemVideo.png'
import reviewVideo from '../../../public/images/aboutOrgImages/reviewVideo.png'
import photoGallery from '../../../public/images/aboutOrgImages/photoGallery.png'
import classes from './AboutOrg.module.css'
import { Col, Container, Row } from 'react-bootstrap';

const AboutOrg = () => {
    return( 
        <Container className='my-5'>
            <h1 className="display-4">Знание - сила</h1>
            <Row>
                <Col xs lg="5">
                        <p className={classes.paragraphStyle}>Создавая колледж, мы хотели, чтобы он стал не просто
                            еще одним учебным заведением, где ничем нне
                            связанные друг с другом люди будут обучать и учиться.
                        </p>
                        <p className={classes.paragraphStyle}>
                            Наша цель была в другом: мы убеждены -- каждый 
                            человек талантлив; мы убеждены -- сейчас время
                            неординарных людей и неординарных идей; мы
                            убеждены -- только настоящее дело может быть
                            по-настоящему интересным; мы убеждены --
                            состоявшиеся люди -- это счастливые люди; 
                            мы убеждены -- только в атмосфере понимания и 
                            позитива человек может развиваться!

                        </p>
                </Col>
                <Col>
                    <Row className={classes.zoom} style={{backgroundImage: anthemVideo}}>
                        <a href='#'>
                            <img src={anthemVideo} alt="ЗНАНИЕ | Гимн колледжа" />
                        </a>
                    </Row>

                    <Row className={classes.zoom} style={{backgroundImage: reviewVideo}}>
                            <a href='#'>
                                <img src={reviewVideo} alt="ЗНАНИЕ | Видео-обзор" />
                            </a>
                    </Row>
                </Col>
                <Col className={classes.zoom} style={{backgroundImage: photoGallery}}>
                        <a href='#'>
                            <img src={photoGallery} alt=""/>
                        </a>
                </Col>
            </Row>
        </Container>
    );
}
export default AboutOrg;
