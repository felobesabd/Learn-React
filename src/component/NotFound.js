import React from 'react'
import { Alert, Button } from 'react-bootstrap'

const NotFound = (props) => {
    let close = () => {
        console.log(props);
    }
  return (
    <Alert className='center text-center' variant={props.color}>
    <h2 className='center mb-4'>{props.message}</h2>
    <Button className='center' onClick={close}>Close</Button>
  </Alert>
  )
}
export default NotFound;