import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleButton from "react-google-button";

function BasicExample() {
  return (

    <Form
      style={{
        backgroundColor: "#d8d2d2",
        boxShadow: "revert",
        borderBlockStyle: "initial",
        padding: "31px",
        textEmphasisColor: "GrayText",
        borderStyle: "groove",
        fontFamily: "roboto",
        borderRadius: "50px",
        marginLeft: "250px",
        marginRight: "250px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <b>Email address</b>
        </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          <b>Password</b>
        </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginLeft: "190px"}}>
        Submit
      </Button>
      <p style={{marginLeft: "210px"}}><b>OR</b></p>
      <p style={{marginLeft: "100px"}}>
        <GoogleButton 
          type="dark"
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </p>
    </Form>
  );
}

export default BasicExample;