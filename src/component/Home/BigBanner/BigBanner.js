import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "../../../assents/bigBanner/1.webp";
import img2 from "../../../assents/bigBanner/2.jpg";
import img3 from "../../../assents/bigBanner/3.jpg";
import img4 from "../../../assents/bigBanner/4.jpg";
import { GrLocation } from "react-icons/gr";
let data = [
  {
    img: img1,
    button: "shop high fashion",
  },
  {
    img: img2,
    button: "shop casualwear",
  },
  {
    img: img3,
    button: "shop formalwear",
  },
  {
    img: img4,
    button: "stores location",
    icon: (
      <GrLocation
        style={{ fontSize: "1.3rem", marginBottom: 5, marginRight: 5 }}
      />
    ),
  },
];
const BigBanner = () => {
  return (
    <Container fluid>
      <Container className="big_banner_container">
        <Row>
          {data.map((item) => {
            return (
              <Col xl="6" md="6" xs="6" className="p-0">
                <div className="imageScale big_banner_container_image ">
                  <img src={item.img} style={{ width: "100%" }} />

                  <button>
                    {item.icon && item.icon}
                    {item.button}
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default BigBanner;
