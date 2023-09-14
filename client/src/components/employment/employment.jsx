import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './employment.module.css'


const Employment = () => {
    return(
        <Container className='my-5'>
            <div className={classes.header}>
                <h1>Трудоустройство</h1>
                <h4>Положение</h4>
                <div className = {classes.urlStyle}>
                    <a href='#'>Положение о центре содействия трудоустройству выпускников</a>
                </div>
                <h4>Соглашение</h4>
                <div className={classes.urlStyle}>
                    <a href='#' >Соглашение с ЦЗН</a>
                </div>
                
            </div>
        </Container>
    )
}
export default Employment;