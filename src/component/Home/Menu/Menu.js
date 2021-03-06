import React, { useEffect, useState } from "react";
import { Col, Container, Nav } from "react-bootstrap";

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineClose,
} from "react-icons/ai";
import TrendAnime from "./TrendAnime";
import NewAnime from "./NewAnime";
import BulkAnime from "./BulkAnime";
import logo from "../../../assents/ella.png";
import { data } from "../../../Data/data";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toRight } from "../../animations/animations";
import CartSection from "../CartSection/CartSection";
const Menu = () => {
  const [hamburger, setHamburger] = useState(false);
  const [scrollTop, setScrollTop] = useState("");
  const [fixMenu, setFixMenu] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      if (scrollTop > 140) {
        setFixMenu(true);
      } else {
        setFixMenu(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <Container
        fluid
        className={`main__menu  ${fixMenu ? "fixMenu" : ""}`}
        style={{ overflowy: "hidden", position: "relative" }}
      >
        <Container>
          <div className="menu">
            <div className="menu_hamburger">
              <GiHamburgerMenu
                onClick={() => setHamburger(true)}
                style={{ fontSize: 25, marginRight: 10, cursor: "pointer" }}
              />
              <img src={logo} width="50" />
            </div>

            <Nav
              className={`${hamburger ? "active" : ""}`}
              style={{ zIndex: 99999 }}
            >
              <li className="closeHamburger">
                <span>
                  <AiOutlineClose
                    onClick={() => setHamburger(false)}
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  />
                </span>
                <span>Available 24/7 at (018) 900-6690</span>
              </li>
              {data.map((item, index) => {
                return (
                  <NavItemComponent
                    key={index}
                    title={item.name}
                    link={item?.link}
                    items={
                      <>
                        <DropDownItem
                          title="home styles"
                          items={item.items?.map((_item, index) => {
                            return (
                              <>
                                <DropDownItem key={index} title={_item.name} />
                              </>
                            );
                          })}
                        />

                        <DropDownItem title="new Skins" />
                      </>
                    }
                    first
                  />
                );
              })}

              <NavItemComponent title="Trend" anime={<TrendAnime />} first />
              <NavItemComponent title="New In" anime={<NewAnime />} first />
              <NavItemComponent
                title="Bulk Editor"
                anime={<BulkAnime />}
                first
              />
            </Nav>

            <div className="menu__option">
              <div className="menu__option__search">
                <p>Search</p> <GoSearch />
              </div>
              <div className="menu__option__line"></div>
              <div className="menu__option__like">
                <AiOutlineHeart />
              </div>
              <div className="menu__option__login">
                <IoPersonCircleOutline
                  className="ml-2 mr-2"
                  style={{ fontSize: "25px" }}
                />
              </div>
              <div
                className="menu__option__cart"
                style={{ cursor: "pointer" }}
                onClick={() => setCart(true)}
              >
                <AiOutlineShopping />
                <span>0</span>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <div className={`cart_section ${cart ? "active" : ""}`}>
        <CartSection setCart={setCart} />
      </div>
    </>
  );
};

const DropDownItem = ({ title, items, key }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li
        key={key}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`nav__item__drop item_drop_down_pc   ${
          open ? "active" : ""
        }`}
      >
        <li className="nav__item__drop__item">{title}</li>
        {items && <ul className="menu__drop__list">{items}</ul>}
      </li>
      <li
        className={`nav__item__drop nav__item__mobile   ${
          open ? "active" : ""
        }`}
      >
        <li className="nav__item__drop__item " onClick={() => setOpen(true)}>
          <span>{title}</span>
          <span>{items && <IoIosArrowForward />}</span>
        </li>
        <AnimatePresence exitBeforeEnter>
          {open && items && (
            <motion.ul
              className="menu__drop__list"
              variants={toRight}
              initial="hidden"
              animate="show"
              key={title}
              exit="exit"
            >
              <li className="backButton" onClick={() => setOpen(false)}>
                <IoIosArrowBack style={{ marginRight: 30 }} />
                {title}
              </li>
              {items}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};
const NavItemComponent = ({ title, first, items, anime, close, link }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);
  let className = first
    ? "nav__item  nav__item__pc "
    : " nav__item__pc nav__item__drop__item ";

  return (
    <>
      <li
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={` ${className} line ${open ? "active" : ""}`}
      >
        {link ? <NavLink to={link}>{title}</NavLink> : <li>{title}</li>}

        {items && <ul className="menu__drop__list">{items}</ul>}
        {anime && <div className="anime__dropDown  ">{anime}</div>}
      </li>
      <li className={`nav__item  nav__item__mobile  ${open ? "active" : ""}`}>
        <li onClick={() => setOpen(true)}>
          {title} <span>{items && <IoIosArrowForward />}</span>
        </li>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.ul
              className="menu__drop__list"
              variants={toRight}
              initial="hidden"
              animate="show"
              exit="exit"
              key={title}
            >
              <li className="backButton" onClick={() => setOpen(false)}>
                <IoIosArrowBack style={{ marginRight: 30 }} />
                {title}
              </li>
              {items}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};

export default Menu;
