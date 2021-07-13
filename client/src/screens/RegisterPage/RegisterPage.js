import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

function RegisterPage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [pic, setpic] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
  );
  const [message, setmessage] = useState(null);
  const [picMessage, setpicMessage] = useState(null);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    //Check PASS AND CONFIRM PASS
    if (password !== confirmpassword) {
      setmessage("Passweord doesn't match");
    } else {
      setmessage(null);
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
          "/api/users",
          { name, pic, email, password },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setloading(false);
        setname("");
        setemail("");
        setpassword("");
        setconfirmpassword("");
        setpic(null);
      } catch (error) {
        seterror(error.response.data.message);
      }
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setpicMessage("Please Select an Image");
    }
    setpicMessage(null);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notetrackermern");
      data.append("cloud_name", "srvdip");
      fetch("https://api.cloudinary.com/v1_1/srvdip/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setpic(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      return setpicMessage("Please select a Image");
    }
  };

  return (
    <MainScreen title="Register">
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form style={{ width: "60%" }} onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="name"
              placeholder="Enter Name"
            />
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic" className="mb-3">
            <Form.Label>Upload Profile Picture:</Form.Label>
            <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              label="Upload profile picture"
              custom
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Already have an account?{" "}
            <Link
              style={{ color: "blue", textDecoration: "underline" }}
              to="/login"
            >
              Login
            </Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default RegisterPage;
