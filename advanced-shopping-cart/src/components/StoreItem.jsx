import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import FormatCurrency from "./formatCurrency";
import "./StoreItem.css"
const StoreItem = ({ id, price, name, imgUrl }) => {
  const quantity = 2; // Example quantity; you can connect this with state

  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{name}</span>
          <span className="text-muted fs-6">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button variant="primary" className="w-100">
              Add to Cart
            </Button>
          ) : (
            <div className="align-items-center ">
              <Row className="align-items-center justify-content-center">
                <Col xs="auto">
                  <Button
                    variant="outline-secondary"
                    className="rounded-circle btn-custom"
                  >
                    -
                  </Button>
                </Col>
                <Col xs="auto">
                  <span className="fs-4">{quantity} in Cart</span>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-secondary"
                    className="rounded-circle btn-custom"
                  >
                    +
                  </Button>
                </Col>
              </Row>
              <Button variant="danger" className="w-100 mt-2">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
