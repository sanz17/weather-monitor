import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import Login from './Login'

export default function Loginpage() {
    return (
      <>
        <Row className="landing" style={{'padding':250}}>
          <Col>
            <Login />
          </Col>
          {/* <Col>
            hello
          </Col> */}
        </Row>
      </>
    );
  }