import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../assents/newCollections/1.webp";
import img2 from "../../../assents/newCollections/2.webp";
import useScroll from "../../animations/useScroll";
import { motion, useAnimation } from "framer-motion";
import { fade, right } from "../../animations/animations";
let data = [
  {
    img: img1,
    title: "Jungleries",
    desc:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    img: img2,
    title: "Elegant & Sexy",
    desc:
      "Maxime placeat facere possimus voluptas assumenda sed quia non numquam eius modi tempora incidunt.",
  },
];
const NewCollection = () => {
  const [element, controls] = useScroll();

  return (
    <Container className="new_collection py-5">
      {data.map((item) => {
        return (
          <Row>
            <Col xl="6" md="12">
              <div className="imageScale">
                <img src={item.img} />
              </div>
            </Col>
            <Col xl="6" md="12">
              <div className="new_collection_info">
                <p className="new_collection_category py-3">new collection</p>
                <p className="new_collection_title text-center py-3">
                  {item.title}
                </p>
                <p className="new_collection_desc text-center py-3">
                  {item.desc}
                </p>
                <button className="new_collection_button py-3 my-3">
                  shop the collection
                </button>
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default NewCollection;
