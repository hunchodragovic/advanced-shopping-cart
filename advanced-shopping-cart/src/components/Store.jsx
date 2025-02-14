import React from "react";
import { Row, Col } from "react-bootstrap";
import storeItems from "../data/storeItems.json";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <div>
      <h1 className="mb-4">Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
