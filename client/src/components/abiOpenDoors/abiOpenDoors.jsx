import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiOpenDoors.module.css'


const AbiOpenDoors = () => {
    return(
        <Container className='my-5'>
            <div className={classes.textStyles}>
                <h1>Дни открытых дверей</h1>
                <h4>Расписание дней открытых дверей</h4>
            </div>
        </Container>
    )
}
export default AbiOpenDoors;