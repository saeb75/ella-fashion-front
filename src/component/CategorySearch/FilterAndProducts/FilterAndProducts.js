import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FilterProduct from "../FilterProduct/FilterProduct";
import ProductList from "../ProductList/ProductList";

const FilterAndProducts = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col xl="3">
          <FilterProduct />
        </Col>
        <Col xl="9">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default FilterAndProducts;
