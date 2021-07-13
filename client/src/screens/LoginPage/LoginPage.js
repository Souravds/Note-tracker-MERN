import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

function LoginPage({ history }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  //SUBMIT THE LOGUIN FORM
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //SET CONFIG
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setloading(true);

      //CALL THE API TO POST
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
    } catch (error) {
      seterror(error.response.data.message);
      setloading(false);
      setemail("");
      setpassword("");
    }
  };
  return (
    <MainScreen title="Login">
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler} style={{ width: "60%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User?{" "}
            <Link
              style={{ color: "blue", textDecoration: "underline" }}
              to="/register"
            >
              Register Now
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default LoginPage;
