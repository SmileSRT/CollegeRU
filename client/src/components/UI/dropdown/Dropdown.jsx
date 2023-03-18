import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const containerStyles = {
    height: 600,
}

const Dropdown = () => {
    
    return( 
        <Container
            style={containerStyles}
            className='d-flex align-items-center justify-content-center'
        >
            <Card style={{ width: '18rem' }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            </Card>

        </Container>
    );
}
export default Dropdown;

// // {!dropdownItemsVisibility ? (
//     <Dropdown/> ) : null
// }