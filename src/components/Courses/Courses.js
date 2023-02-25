import React from 'react'
import "./Courses.css"
import { Card, Button } from 'react-bootstrap'

export default function Courses({ courses }) {
  return (
    <>
    <h1 className='text-center my-5'>Our Courses</h1>
    <div className='crd d-flex align-item-center justify-content-around'>
      <div>
      <Card className='my-5 mx-5' style={{ width: '18rem' }}>
      <Card.Img className="img" variant="top" src="/assets/java.jpeg" />
      <Card.Body>
        <Card.Title>Learn Java</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card className='my-5 mx-5' style={{ width: '18rem' }}>
      <Card.Img className="img" variant="top" src="/assets/react.jpeg" />
      <Card.Body>
        <Card.Title>Learn React</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div>
      <Card className='my-5 mx-5' style={{ width: '18rem' }}>
      <Card.Img className="img" variant="top" src="/assets/cpp.jpeg" />
      <Card.Body>
        <Card.Title>Learn C++</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

      <div>
      <Card className='my-5 mx-5' style={{ width: '18rem' }}>
      <Card.Img className="img" variant="top" src="/assets/js.jpeg" />
      <Card.Body>
        <Card.Title>Learn Java Script</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
    </div>
  );
}
