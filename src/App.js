import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import UserName from "./components/UserName";
import products from "./product";
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
            {products.map((product, index) => (
              <Col key={index} xs={10} sm={6} md={4} lg={3}>
                <Card
                  className="text-center shadow-sm"
                  style={{ minHeight: "500px" }}
                >
                  <Card.Body>
                    <Image product={product} />
                    <Name product={product} />
                    <Price product={product} />
                    <Description product={product} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-4 text-center">
            {firstName ? (
              <>
                <h4>Hello, {firstName}!</h4>
                <img
                  src="/Sample_User_Icon.png"
                  alt="Hello"
                  className="mt-2 rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
              </>
            ) : (
              <h4>Well... hello anyway 😅</h4>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
