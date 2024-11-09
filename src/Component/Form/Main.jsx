import React from 'react';
import "./form.css";
import {Form} from 'react-bootstrap';

export default function Main() {
  return (
    <>

<Form className='container mt-3'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='input--tag--label'>Email address</Form.Label>
        <Form.Control type="email--tag--type" placeholder="name@example.com" className='form--tag--input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='input--tag--label'>Email address</Form.Label>
        <Form.Control  placeholder="name@example.com" className='form--tag--input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='input--tag--label'>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} className='form--tag--input'/>
      </Form.Group>
      <button>Submit</button>
    </Form>
  
    </>
  )
}
