import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import banner1 from "../../../assents/small/1.jpg";
import banner2 from "../../../assents/small/2.jpg";
import banner3 from "../../../assents/small/3.jpg";
let BannerData = [
  {
    img: banner1,
    title: "EDITOR'S PICK",
  },
  {
    img: banner2,
    title: "SHOES",
  },
  {
    img: banner3,
    title: "ACCESSORIES",
  },
];
const SmallBanner = () => {
  return (
    <Container fluid>
      <Container className="py-5 small_banner">
        <Row>
          {BannerData.map((item) => {
            return (
              <Col xl="4" md="4" sm="12">
                <Card className="imageScale">
                  <img src={item.img} />
                  <div className="small_banner_title">{item.title}</div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default SmallBanner;
