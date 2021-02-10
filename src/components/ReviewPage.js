import React from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Accordion,
  ListGroup,
  Toast,
} from "react-bootstrap";

export default function ReviewPage(props) {
  return (
    <>
      <Container>
        <Card
          className="text-center"
          style={{
            width: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Accordion defaultActiveKey="0">
            <Card.Text>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Personal Details
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>Name: {props.values.name}</ListGroup.Item>
                    <ListGroup.Item>Email: {props.values.email}</ListGroup.Item>
                    <ListGroup.Item>
                      Password: {props.values.password}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card.Text>
            <Card.Text>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Social Details
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      Phone Number: {props.values.phone}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Facebook: {props.values.facebook}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Twitter: {props.values.twitter}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
              <br />
              <Button
                className="mt-2"
                variant="warning"
                onClick={props.handlePrevious}
              >
                Previous
              </Button>
            </Card.Text>
          </Accordion>
        </Card>
      </Container>
      {/* <div>
        Phone: {props.values.phone}
        Facebook: {props.values.faebook}
        Twitter: {props.values.twitter}
      </div>
      <div>
        <button onClick={props.handlePrevious}>Previous</button>
      </div> */}
    </>
  );
}
