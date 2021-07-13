import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  //GET THE USERINFO FROM LOCAL STORAGE
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   //IF USER FOUND GO TO MYNOTES
  //   if (userInfo) {
  //     history.push("/notes");
  //   }
  // }, [history]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "20px", fontSize: "40px" }}>
          Welcome to Note tracker
        </h1>
        <Link to="/login" style={{ marginRight: "50px" }}>
          <Button variant="outline-primary" size="lg">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="outline-primary" size="lg">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};
