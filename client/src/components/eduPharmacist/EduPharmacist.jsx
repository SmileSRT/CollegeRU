import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduPharmacist.module.css'
import slide from '../../../public/images/education/pharmacistSlide.png'
import iconDone from '../../../public/icons/done.png'

const EduPharmacist = () => {

    return (
        <div>
            <img src={slide} className={classes.intro}></img>
            <Container>
                <Row>
                    <Col className={classes.parametersBlock}>
                        <h5>Срок обучения</h5>
                        <p>
                            1 год 10 мес.<br/>
                            —<br/>
                            2 года 10 мес.
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Стоимость</h5>
                        <p>
                            От 116.000 руб<br/>
                            До 150.000 руб
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Форма</h5>
                        <p>
                            Очная<br/>
                            Заочная
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Итог</h5>
                        <p>Государственный диплом</p>
                    </Col>
                    <Col className={classes.parametersBlock}>
                        <h5>Перспектива</h5>
                        <p>
                            Практика в аптеках и фармацевтических организациях Москвы и МО
                        </p>
                    </Col>
                </Row>
                
                <div className={classes.header}>
                    <h1>Чему вы научитесь?</h1>
                </div>

                <Row>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Изготавливать лекарственные формы препаратов</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Проводить контроль качества лекарственных средств</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Реализации товаров аптечного ассортимента</p>
                    </Col>
                    <Col className={classes.learnBlock}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Оказывать информционно-консультативную помощь населению</p>
                    </Col>
                </Row>

                <div className={classes.header}>
                    <h1>Как к нам поступить?</h1>
                </div>

                <Row className={classes.connectionBlock}>
                    <Col className={classes.textStyle}>
                        <p>Приходите к нам на дни открытых дверей</p>
                    </Col>
                    <Col className={classes.textStyle}>
                        <p>По всем вопросам о поступлении:</p>
                        <a href="tel:+79263964520"> +7 (926)-396-45-20</a>
                    </Col>
                </Row>

            </Container>
        </div>
        
        
    );
}
export default EduPharmacist;