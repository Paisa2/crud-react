import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const CardMotorcycle = ({motorcycle}) => {
  return (
    <div className='col-4'>
      <Card>
        <img  src={motorcycle.image} alt={motorcycle.reference} className="card-img-top"/>
        <Card.Body>
          <Card.Title className='text-center'>{motorcycle.reference}</Card.Title>
          <ListGroup>
            <ListGroupItem><strong>NUEVO:</strong>{motorcycle.model}</ListGroupItem>
            <ListGroupItem><strong>MARCA:</strong>{motorcycle.trademark}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>

    </div>
  )
}

export default CardMotorcycle