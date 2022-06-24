import React from 'react';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

  return (
    <>
    <h1 className='display-4'>
      Login
    </h1>
    <Form style={{width: '500px', margin: '50px auto'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email" 
    value={email}
    onChange={(e)=> setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="dark" type="submit">
    Login
  </Button>
</Form>
</>
  )
}

export default Login

