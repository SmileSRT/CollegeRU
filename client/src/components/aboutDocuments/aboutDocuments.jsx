import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './aboutDocuments.module.css';
import Navigation from '../UI/navigation/Navigation.jsx'

const AboutDocuments = () => {

    const states = [
        {
            name: 'Положение о внутреннем контроле качества подготовки специалиста в АНО ПО ГТК Знание',
            link:
        },
        {
            name: 'Положение о ГИА',
            link:
        },
        {
            name: 'Положение о зачислении в качестве экстернов',
            link:
        },
        {
            name: 'Положение о педагогическом совете',
            link:
        },
        {
            name: 'Положение о подготовительных курсах для поступающих',
            link:
        },
        {
            name: 'Положение о порядке обучения по индивидуальному плану',
            link:
        },
        {
            name: 'Положение о порядке осуществления индивидуального учета результатов освоения обущающимся образовательных программ',
            link:
        },
        {
            name: 'Положение о порядке перевода, отчисления и восстановления обучающихся',
            link:
        },
        {
            name: 'Положение о предметно-цикловой комиссии',
            link:
        },
        {
            name: 'Положение о приемной комиссии',
            link:
        },
        {
            name: 'Положение о проведении экзаменов, зачетов, пересдач, перевода обучающихся на следующий курс',
            link:
        },
        {
            name: 'Положение о текущем контроле знаний и промежуточной аттестации',
            link:
        },
        {
            name: 'Положение о формах обучения',
            link:
        },
        {
            name: 'Положение об интернет-сайте',
            link:
        },
        {
            name: 'Положение об обучении студентов-инвалидов',
            link:
        },
        {
            name: 'Положение об организации выполнения и защиты курсовой работы',
            link:
        },
        {
            name: 'Положение об электронной билиотеке',
            link:
        },
        {
            name: 'Положение об электронном журнале',
            link:
        },
        {
            name: 'Положение об учебной и производственной практике студентов',
            link:
        },
        {
            name: 'Положение об общем собрании работников и студентов (совет колледжа)',
            link:
        }
    ]

    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                    <h1>Документы</h1>
                    <div className={classes.header}>
                        <h2>Устав образовательной организации</h2>
                            <div className={classes.urlStyle}>
                                <a href="#">Устав образовательной организации</a>
                            </div>
                            <h2>Лицензия на осуществление образовательной деятельности (с приложениями)</h2>
                            <div className={classes.urlStyle}>
                                <a href="#">Серия 50Л01 №0008960 №77080 от 24.05.2017г. Лицензия действительна бессрочно</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Выписка из реестра лицензий от 04.05.2023г</a>
                            </div>
                            <h2>Свидетельство о государственной аккредитации (с приложениями)</h2>
                            <div className={classes.urlStyle}>
                                <a href="#">Серия 50А01 №0000271 №4573 от 03.11.2020г. Свидетельство действует бессрочно</a>
                            </div>
                            <h2>Учредительные документы</h2>
                            <div className={classes.urlStyle}>
                                <a href="#">Лист записи единого государственного реестра юридических лиц</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Свидетельство о постановке на учет в налоговом органе</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Свидетельство о государственной регистрации</a>
                            </div>
                            <h2>Локальные нормативные акты</h2>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>
            
        </Container>
    );
}
export default AboutDocuments ;