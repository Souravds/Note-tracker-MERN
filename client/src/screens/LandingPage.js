import { Button } from "react-bootstrap";

export const LandingPage = () => {
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
        <a href="/login" style={{ marginRight: "50px" }}>
          <Button variant="outline-primary" size="lg">
            Login
          </Button>
        </a>
        <a href="/register">
          <Button variant="outline-primary" size="lg">
            Register
          </Button>
        </a>
      </div>
    </div>
  );
};
