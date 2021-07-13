import React from "react";
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Row style={{ display: "block" }}>
          <div class="page">
            {title && (
              <>
                <h1 style={{ marginLeft: "20px" }}>{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
