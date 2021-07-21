import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export const LandingPage = () => {
  //GRAB USERINFO STATE
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();
  useEffect(() => {
    //IF USER FOUND GO TO MYNOTES
    // const userInfo = localStorage.getItem("userInfo")
    if (userInfo) {
      history.push("/notes");
    }
  }, [history]);

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
