import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import banner0 from "../../assents/newIn0.jpg";
import banner1 from "../../assents/newIn1.jpg";

const NewAnime = () => {
  return (
    <>
      <Container fluid className="py-5" style={{ backgroundColor: "white" }}>
        <Container style={{ maxWidth: 1250 }} className="trand__anime">
          <Row>
            <Col md="12">
              <Row>
                <Col md="2">
                  <Nav className="flex-column">
                    <NavItemComponent>waht's new</NavItemComponent>
                    <NavItemComponent>best selling</NavItemComponent>
                    <NavItemComponent>top rated</NavItemComponent>
                    <NavItemComponent>most popular</NavItemComponent>
                    <NavItemComponent>editor's picks</NavItemComponent>
                    <NavItemComponent>on sale</NavItemComponent>
                  </Nav>
                </Col>
                <Col md="2">
                  <Nav className="flex-column">
                    <NavItemComponent>HARUM QUIDEM</NavItemComponent>
                    <ul className="anime__list">
                      <DropDownItem light>
                        <li className="nav__item__drop__item ">consectetuer</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">exerci</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">commodo</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">mtincidunt</li>{" "}
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">adipiscing</li>
                      </DropDownItem>
                      <DropDownItem light>
                        <li className="nav__item__drop__item">dolor</li>
                      </DropDownItem>
                    </ul>
                  </Nav>
                </Col>
                <Col md="2">
                  <Nav className="flex-column">
                    <ul className="anime__list">
                      <NavItemComponent>Excepteur</NavItemComponent>
                      <DropDownItem>
                        <li className="nav__item__drop__item ">aliquam</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">adipiscing </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">nostrud </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">deserunt </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">proident</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">minim</li>{" "}
                      </DropDownItem>
                    </ul>
                  </Nav>
                </Col>
                <Col md="2">
                  <Nav className="flex-column">
                    <ul className="anime__list">
                      <NavItemComponent>eiusmod </NavItemComponent>
                      <DropDownItem>
                        <li className="nav__item__drop__item ">mollit </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">anim </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">laborum</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">proident</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">Excepteur</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">ullamco </li>{" "}
                      </DropDownItem>
                    </ul>
                  </Nav>
                </Col>
                <Col md="2">
                  <Nav className="flex-column">
                    <ul className="anime__list">
                      <NavItemComponent>laborum</NavItemComponent>
                      <DropDownItem>
                        <li className="nav__item__drop__item ">aliquam</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">ullamco </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">commodo</li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">exercitation </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">exercitation </li>{" "}
                      </DropDownItem>
                      <DropDownItem>
                        <li className="nav__item__drop__item">reprehenderit</li>{" "}
                      </DropDownItem>
                    </ul>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#eaeaea" }}>
        <Container style={{ maxWidth: 1250 }}>
          <Row>
            <Col md="4">
              <NavLink to="/">
                <img src={banner0} />
              </NavLink>
            </Col>
            <Col md="4">
              <NavLink to="/">
                <img src={banner1} />
              </NavLink>
            </Col>
            <Col md="4">
              <div className="flex-col py-3 alphabet__list">
                <h5>BRANDS BY ALPHABET</h5>
                <div className="alphabet__list__item">
                  {alphabetList.map((item) => (
                    <li className={`${item.active ? "active" : ""}`}>
                      {item.name}
                    </li>
                  ))}
                </div>
                <div className="alphabetLink">
                  <NavLink to="/">VIEW PRODUCTS</NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default NewAnime;
const DropDownItem = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`nav__item__drop ${open ? "active" : ""}`}
    >
      {children}
    </li>
  );
};
const NavItemComponent = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`nav__item  ${open ? "active" : ""}`}
    >
      {children}
    </li>
  );
};
let alphabetList = [
  { name: "A", active: true },
  { name: "b", active: true },
  { name: "c", active: false },
  { name: "d", active: true },
  { name: "e", active: false },
  { name: "f", active: false },
  { name: "g", active: true },
  { name: "h", active: true },
  { name: "i", active: true },
  { name: "j", active: false },
  { name: "k", active: true },
  { name: "l", active: false },
  { name: "m", active: false },
  { name: "n", active: true },
  { name: "o", active: false },
  { name: "p", active: true },
  { name: "q", active: false },
  { name: "e", active: false },
  { name: "s", active: true },
  { name: "t", active: false },
  { name: "u", active: true },
  { name: "v", active: true },
  { name: "w", active: false },
  { name: "x", active: true },
  { name: "y", active: true },
  { name: "z", active: false },
  { name: "1-9", active: false },
];
