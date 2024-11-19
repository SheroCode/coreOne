import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple2.png";
import { useState, useContext } from "react";
import { AuthContext } from "../utilities";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import revealed from "../assets/revealed.png";
import hidden from "../assets/hidden.png";

function SignuPage() {
  const [userName, setUserName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { isHidden, valid, validEmail, validPassword, signup, revealPassword } =
    useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    signup(userName, email, password, phoneNumber);
  };

  return (
    <section className="signup section-py">
      <Form className="custom-form" onSubmit={handleSignup}>
        <h3>Sign Up</h3>

        {!valid && (
          <div className="invalid">Please fill out all fields to proceed</div>
        )}

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3 mt-3" controlId="formBasicFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3 mt-3" controlId="formBasicPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!validEmail && <div className="invalid">Enter a valid email</div>}
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ position: "relative" }}
        >
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <img
              src={isHidden ? revealed : hidden}
              alt="icon"
              className="input-icon"
              onClick={revealPassword}
            />
            <Form.Control
              type={isHidden ? "password" : "text"}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputGroup>
          {!validPassword && (
            <div className="invalid">Minimum 6 characters</div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn w-100">
          Sign Up
        </Button>

        <div className="or">
          <div className="hline"></div>
          <p>Or</p>
          <div className="hline"></div>
        </div>

        <div className="social-links">
          <Link href="#" id="google">
            <img src={google} />
          </Link>
          <Link href="#" id="facebook">
            <img src={facebook} />
          </Link>
          <Link href="#" id="github">
            <img src={apple} />
          </Link>
        </div>

        <p id="back-to-login">
          <Link to="/login">Already have an account?</Link>
        </p>
      </Form>
    </section>
  );
}

export default SignuPage;
