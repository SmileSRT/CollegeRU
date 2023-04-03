import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiCourses.module.css'


const AbiCourses = () => {
    return(
        <Container className='my-5'>
            <div className={classes.textStyle}>
                <h1>Подготовительные курсы</h1>
                <p>Колледж "ЗНАНИЕ" приглашает учеников на краткосрочные курсы для подготовки к поступлению, а также для улучшения своих навыков</p>
            </div>
        </Container>
    )
}
export default AbiCourses;