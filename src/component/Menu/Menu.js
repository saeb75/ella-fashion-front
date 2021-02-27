import React, { useEffect, useState } from "react";
import { Col, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { theme, Line } from "../../Global";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import TrendAnime from "./TrendAnime";
import NewAnime from "./NewAnime";
import BulkAnime from "./BulkAnime";
import logo from "./../../assents/ella.png";
import { data } from "../../Data/data";
const Menu = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <Container
      fluid
      className="main__menu "
      style={{ position: "relative", overflowy: "hidden" }}
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

          <Nav className={`${hamburger ? "active" : ""}`}>
            <li className="closeHamburger" onClick={() => setHamburger(false)}>
              Close
            </li>
            {data.map((item) => {
              return (
                <NavItemComponent
                  title={item.name}
                  items={
                    <>
                      <DropDownItem
                        title="home styles"
                        items={item.items?.map((_item) => {
                          return (
                            <>
                              <DropDownItem title={_item.name} />
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
            <NavItemComponent title="Bulk Editor" anime={<BulkAnime />} first />
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
            <div className="menu__option__cart">
              <AiOutlineShopping />
              <span>0</span>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

const DropDownItem = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li
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
        className={`nav__item__drop item_drop_down_mobile  ${
          open ? "active" : ""
        }`}
      >
        <li className="nav__item__drop__item" onClick={() => setOpen(true)}>
          {title}
        </li>
        {items && (
          <ul className="menu__drop__list">
            <li onClick={() => setOpen(false)}>close</li>
            {items}
          </ul>
        )}
      </li>
    </>
  );
};
const NavItemComponent = ({ title, first, items, anime, close }) => {
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
        {title}
        {items && <ul className="menu__drop__list">{items}</ul>}
        {anime && <div className="anime__dropDown  ">{anime}</div>}
      </li>
      <li
        className={`nav__item line nav__item__mobile ${open ? "active" : ""}`}
      >
        <p onClick={() => setOpen(true)}>{title}</p>
        {items && (
          <ul className="menu__drop__list">
            <li onClick={() => setOpen(false)}>close</li>
            {items}
          </ul>
        )}
      </li>
    </>
  );
};

export default Menu;
