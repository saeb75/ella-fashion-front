import React from "react";
import ListSliderCard from "../../Home/ListSlider/ListSliderCard";
import { data } from "../../../Data/productList";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { toTop, parents } from "../../animations/animations";
const ProductList = () => {
  return (
    <div>
      <motion.div variants={parents} initial="hidden" animate="show">
        <Row>
          {data.map((item) => {
            return (
              <motion.div className="col-md-4 slideContainer" variants={toTop}>
                <ListSliderCard item={item} />
              </motion.div>
            );
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default ProductList;
