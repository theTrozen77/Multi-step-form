import React from "react";
// import { Container } from "react-bootstrap";
import { Button, Card, Form, Container } from "react-bootstrap";

export default function UserDetails(props) {
  const {
    values,
    setValues,
    handleNext,
    handlePrevious,
    handleInputChange,
  } = props;
  return (
    <Container>
      <Card
        className="text-center"
        style={{
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Body>
          <Card.Title>User Personal Details</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group>
                {/* <Form.Label>Phone Number</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                {/* <Form.Label>Facebook Id</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Facebook Id"
                  name="facebook"
                  value={values.facebook}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                {/* <Form.Label>Twitter Id</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Twitter Id"
                  name="twitter"
                  value={values.twitter}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
            <Button variant="warning" onClick={handlePrevious}>
              Previous
            </Button>
            <Button className="ml-5" variant="warning" onClick={handleNext}>
              Next
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
