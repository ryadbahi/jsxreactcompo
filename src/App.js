import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import UserName from "./components/UserName";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const [firstName, setFirstName] = useState(null); // null = not answered yet

  return (
    <Container className="mt-5">
      {firstName === null ? (
        <UserName setName={setFirstName} />
      ) : (
        <>
          <Row className="g-4 justify-content-center">
            <Col xs={10} sm={6} md={4} lg={3}>
              <Card
                className="text-center shadow-sm"
                style={{ minHeight: "500px" }}
              >
                <Card.Body>
                  <Image />
                  <Name />
                  <Price />
                  <Description />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mt-4 text-center">
            <h4>
              {firstName ? `Hello, ${firstName}!` : "Well... hello anyway 😅"}
            </h4>
            {firstName && (
              <img
                src="/Sample_User_Icon.png"
                alt="Hello"
                className="mt-2 rounded-circle"
                style={{ width: "40px", height: "40px" }}
              />
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
