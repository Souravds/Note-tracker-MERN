import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";

function LoginPage({ history }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //import DISPATCH
  const dispatch = useDispatch();

  //ACCESS THE STATE
  const userLogin = useSelector((state) => state.userLogin);

  //DESTRUCTURING loading, error, userInfo from state
  const { loading, error, userInfo } = userLogin;

  //Route to "notes page" if user already login
  useEffect(() => {
    if (userInfo) {
      history.push("/notes");
    }
  }, [history, userInfo]);
  //Whenever history and userInfo changes it only fires then

  //SUBMIT THE LOGIN FORM
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
