import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';

const CareerCard = props => {
    let {imgSrc, title, desc, price, date } = props.data;
    return (
        <Card className="p-0 overflow-hidden h-100 shadow" >
            <div className='overflow-hidden rounded p-0 bg-light'>
                <Card.Img variant="top" src={imgSrc} />

            </div>
            <Card.Body className="text-center">
                 <Card.Title>{title}</Card.Title>
                 <Card.Title><h6>{desc}</h6></Card.Title>
                <Card.Title className="display-6 fs-6">{price}</Card.Title>
                <Card.Title><h6>{date}</h6></Card.Title>

                
            </Card.Body>
            <Button className='w-100 rounded-0' variant='success' > Apply Now!</Button>

        </Card>
    );
};

export default CareerCard;