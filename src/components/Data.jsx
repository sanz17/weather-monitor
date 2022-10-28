import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample() {
  return (
    <>
      <Row style={{padding:'10px'}}>
        <Col>
          <Card className="text-center" style={{padding:10}}>
            <Card.Header style={{'backgroundColor':'#C0F2B1'}}>Parameter 1</Card.Header>
            <Card.Body style={{'backgroundColor':'#fffacd'}}>
              <Card.Title>Temperature</Card.Title>
              <Card.Text>
                30 Degree Celcius
              </Card.Text>
              <Button variant="primary">Check in Firebase</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Temperature updated 1 minute ago</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{padding:10}}>
            <Card.Header style={{'backgroundColor':'#C0F2B1'}}>Parameter 2</Card.Header>
            <Card.Body style={{'backgroundColor':'#fffacd'}}>
              <Card.Title>Air pressure</Card.Title>
              <Card.Text>
                760 mm Hg
              </Card.Text>
              <Button variant="primary">Check in Firebase</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Air pressure updated 1 minute ago</Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row style={{padding:'10px'}}>
        <Col>
          <Card className="text-center" style={{padding:10}}>
            <Card.Header style={{'backgroundColor':'#C0F2B1'}}>Parameter 3</Card.Header>
            <Card.Body style={{'backgroundColor':'#fffacd'}}>
              <Card.Title img src="../humidity.ico" alt="icon" >Humidity</Card.Title>
              <Card.Text>
                90% humid weather
              </Card.Text>
              <Button variant="primary">Check in Firebase</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Humidity updated 1 minute ago</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{padding:10}}>
            <Card.Header style={{'backgroundColor':'#C0F2B1'}}>Parameter 4</Card.Header>
            <Card.Body style={{'backgroundColor':'#fffacd'}}>
              <Card.Title>Wind speed</Card.Title>
              <Card.Text>
                20km/hr
              </Card.Text>
              <Button variant="primary">Check in Firebase</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Wind speed updated 1 minute ago</Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default HeaderAndFooterExample;
