import React from "react";
import { Container } from "react-bootstrap";
import BigBanner from "../../component/BigBanner/BigBanner";
import Header from "../../component/Header/Header";
import ListSliderContainer from "../../component/ListSliderContainer/ListSliderContainer";
import MainSlider from "../../component/MainSlider/MainSlider";
import Menu from "../../component/Menu/Menu";

import SmallBanner from "../../component/SmallBanner/SmallBanner";

import "./style.css";
const Home = () => {
  return (
    <div>
      <Container fluid className="mainHeader p-0 m-0">
        <Header />
        <Menu />
      </Container>
      <MainSlider />
      <SmallBanner />
      <ListSliderContainer />
      <BigBanner />
    </div>
  );
};

export default Home;
