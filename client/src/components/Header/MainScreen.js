import React from "react";
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <div>
      <Container>
        <Row style={{ display: "block" }}>
          <div class="page">
            {title && (
              <>
                <h1 class="heading">{title}</h1>
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
