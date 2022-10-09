import React from 'react'
import { Card ,  Button } from 'react-bootstrap';

const CardDetails = (props) => {
    let clicked = () => {
        props.clickMe(props.title)
    }
    return (
        <Card className='mb-4 ms-3 mt-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button onClick={clicked} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default CardDetails;
