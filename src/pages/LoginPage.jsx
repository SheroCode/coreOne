import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple2.png";
import { useState, useContext } from "react";
import { AuthContext } from "../utilities";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import revealed from "../assets/revealed.png";
import hidden from "../assets/hidden.png";

function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { users, login, valid, isHidden, revealPassword } =
    useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <section className="login section-py">
      <Form className="custom-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        {!valid && (
          <div className="invalid">Please fill out all fields to proceed</div>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn w-100">
          Login
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

        <p id="go-to-signup">
          <Link to="/signup">Don't have an account?</Link>
        </p>
      </Form>
    </section>
  );
}

export default LoginPage;
