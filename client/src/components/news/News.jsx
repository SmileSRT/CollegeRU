import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import classes from './News.module.css'
const images = require.context('../../../public/images/news', false, /\.(png)$/);

const News = () => {
    return(
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.headers}>
                    <h1>Новости</h1>
                    <Row>
                        <Col className={classes.new}>
                            <Card className={classes.newsBlock}>
                                <span>14.07.2023</span>
                                <img src={images('./news0001.png')} className={classes.imageStyle} alt='Новое направление "Фармация"'></img>
                                <h3>«Не останавливайтесь на достигнутом» — чемпион мира на выпускном 2023</h3>
                                <p>Исмаилов Магомед Гасанович поздравил выпускников и рассказал, зачем нужно получать знания</p>
                            </Card>
                            
                        </Col>
                        <Col className={classes.new}>
                            <Card className={classes.newsBlock}>
                                <span>27.05.2023</span>
                                <img src={images('./news0002.png')} className={classes.imageStyle} alt='Новое направление "Фармация"'></img>
                                <h3>Открыто новое востребованное направление</h3>
                                <p>Открыто направление "Фармация"</p>
                            </Card>
                            
                        </Col>
                    </Row>

                </Col>
                <Col lg={4} className={classes.headers}>
                    <h2>Социальные сети</h2>
                    <ul className={classes.listStyle}>
                        <li className={classes.linkStyle}>
                            <a href='https://vk.com/gtk.znanie'>ВКонтакте</a>
                        </li>
                        <li className={classes.linkStyle}>
                            <a href='https://www.youtube.com/@user-zq4sw2qf2k'>YouTube</a>
                        </li>
                        <li className={classes.linkStyle}>
                            <a href='/telegram'>Telegram</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default News;