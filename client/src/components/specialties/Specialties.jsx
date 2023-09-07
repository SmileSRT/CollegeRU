import React from 'react';
import classes from './Specialties.module.css'
const images = require.context('../../../public/images/specialities', false, /\.(png)$/);
import { Col, Container, Row, Card } from 'react-bootstrap';
import SpecialtiesPhones from '../UI/SpecialtiesPhones/SpecialtiesPhones.jsx';

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

const Specialties = () => {
    return( 
        <div>
        {window.innerWidth >= 1280 ? (
            <div>
                <Row className={classes.specialtiesBlock}>
                    {specialties.map((speciality) => (
                        <Col>
                            <a className ={classes.specialties} href={speciality.route}>
                                <img src={images(`./speciality${speciality.id}.png`)} alt={speciality.name}/>
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>

        ): <SpecialtiesPhones/>}
        </div>
            
    );
}
export default Specialties;