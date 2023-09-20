import {React} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './stuMaterials.module.css';
import {Link} from 'react-router-dom';
const icons = require.context('../../../public/icons/practice', false, /\.(png)$/);

const directions_practice = [
    {
        'name': 'advocate',
        'id': '40.02.01',
        'info': 'Юрист',
    },
    {
        'name': 'doctor',
        'id': '34.02.01',
        'info': 'Сестринское дело',
    },
    {
        'name': 'credit',
        'id': '38.02.01',
        'info': 'Экономика и бухгалтерский учет (по отраслям)',
    },
    {
        'name': 'preschool',
        'id': '44.02.01',
        'info': 'Дошкольное образование',
    },
    {
        'name': 'teacher',
        'id': '44.02.02',
        'info': 'Преподавание в начальных классах',
    },
    {
        'name': 'design',
        'id': '52.02.01',
        'info': 'Дизайн (по отраслям)',
    },
    {
        'name': 'pharmacist',
        'id': '34.02.01',
        'info': 'Фармация',
    }
]


const StuMaterials = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Дополнительные материалы</h1>

                <h4>Методические указания по выполнению курсовой работы</h4>
                <ul className={classes.listStyle}>
                    <li className={classes.linkStyle}>
                        <a href="http://localhost:9000/pdf/student/Методические указания по выполнению курсовой/Методические-указания-по-оформлению-дипломной-работы.pdf">Методические указания по оформлению дипломной работы</a>
                    </li>
                    <li className={classes.linkStyle}>
                        <a href="http://localhost:9000/pdf/student/Методические указания по выполнению курсовой/Методические-указания-по-оформлению-курсовой-работы.pdf">Методические указания по оформлению курсовой работы</a>
                    </li>
                </ul>
                
                <h4>Практика</h4>
                <ul className={classes.listStyle}>
                    <li className={classes.linkStyle}>
                        <a href="http://localhost:9000/pdf/student/student_practice/приказ-на-утверждение-положения-по-практике.pdf">
                            Приказ «Об утверждении Положения о практической подготовке студентов, 
                            осваивающих образовательные программы среднего профессионального образования»
                        </a>
                    </li>
                    <li className={classes.linkStyle}>
                        <a href="http://localhost:9000/pdf/student/student_practice/График прохождения практики.jpg">График прохождения практики 2022 — 2023 у. г.</a>
                    </li>
                </ul>

                <h4>Отчетные документы по практике</h4>
                <Row>
                    {directions_practice.map((direction) => (
                        <Col className={classes.practiceBlock} xs={5} xl={2}>
                            <Link to={direction.name}>
                                <img src={icons('./' + direction.name + 'Icon.png')} className={classes.iconStyle} alt={direction.info}></img>
                                <div className={classes.textPractice}>
                                    <p>{direction.id}</p>
                                    <p>{direction.info}</p>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )

}

export default StuMaterials;