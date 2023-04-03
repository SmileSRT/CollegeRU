import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import classes from './NavbarPhones.module.css'


const NavbarPhonesCard = (props) => {
    return( 
        <Link to={props.link}>
            <Card className={classes.cardStyles}>
                <Card.Body >
                    <Card.Title>{props.cardTitle}</Card.Title>
                    {/* <Card.Text>{props.cardText}</Card.Text> */}
                </Card.Body>
            </Card>
        </Link>
            
    );
}
export default NavbarPhonesCard;