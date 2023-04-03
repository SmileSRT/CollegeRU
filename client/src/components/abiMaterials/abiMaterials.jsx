import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiMaterials.module.css'


const AbiMaterials = () => {
    return(
        <Container className='my-5'>
            <div className={classes.textStyle}>
                <h1>Дополнительные материалы</h1>
            </div>
        </Container>
    )
}
export default AbiMaterials;