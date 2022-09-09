import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form style={{'backgroundColor':'pink','boxShadow':'revert','borderBlockStyle':'initial','padding':30}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>OR</p>
    </Form>
  );
}

export default BasicExample;