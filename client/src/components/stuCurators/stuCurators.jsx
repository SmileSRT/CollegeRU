import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './stuCurators.module.css'

const StuCurators = () => {
    return(
        <Container className='my-5'>
            <div className={classes.header}>
                <h1>Кураторы групп</h1>
                <h4>Загрузить приказ о назначении кураторов</h4>
                <div className={classes.urlStyle}>
                    <a href='#'>Приказ о назначении кураторов групп.pdf</a>
                </div>
            </div>
        </Container>
    )
}
export default StuCurators;