import React from "react";
import "../App.css";
import { Button, Card, Form, Container } from "react-bootstrap";
function MultistepForm(props) {
  const {
    values,
    setValues,
    handleNext,
    handlePrevious,
    handleInputChange,
  } = props;
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
          <Card.Body>
            <Card.Title>User Personal Details</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group>
                  {/* <Form.Label>Full Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
              <Button variant="warning" onClick={handleNext}>
                Next
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default MultistepForm;
