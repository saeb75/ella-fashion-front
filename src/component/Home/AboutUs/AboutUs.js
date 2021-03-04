import React from "react";
import { Container } from "react-bootstrap";
import useScroll from "../../animations/useScroll";
import { motion, useAnimation } from "framer-motion";
import { fade, right } from "../../animations/animations";
const AboutUs = () => {
  const [element, controls] = useScroll();
  return (
    <div>
      <Container fluid className="about_us py-3 ">
        <hr />
        <Container>
          <motion.div className="about_us_title text-center pt-3">
            We are Ella
          </motion.div>
          <div className="about_us_link text-center pt-3">about us</div>
          <motion.div className="about_us_desc text-center p-5">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur.
          </motion.div>
        </Container>
      </Container>
    </div>
  );
};

export default AboutUs;
