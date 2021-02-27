import React from "react";
import { Container } from "react-bootstrap";
import ListSlider from "../ListSlider/ListSlider";

const ListSliderContainer = () => {
  return (
    <Container fluid>
      <Container className="list_slider">
        <div className="list_slider_header">
          <p className="list_slider_title">best selling</p>
          <p className="slider_view_button">view all</p>
        </div>
      </Container>
      <Container>
        <ListSlider />
      </Container>
    </Container>
  );
};

export default ListSliderContainer;
