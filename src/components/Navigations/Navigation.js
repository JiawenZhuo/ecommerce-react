import NavLink from "./NavLink.js";
import { Logo } from "./Logo.js";
import {
  NavLeft,
  NavRight,
  Nav,
} from "./style.js";
import profile from "../../assets/images/image-avatar.png";
import CartButton from "../Cart/CartButton.js";
import { Avatar } from "./Avatar.js";
import React from 'react'

function Navigation({setOpened}) {
  return (
    <Nav>
      <NavLeft>
        <Logo />
        <NavLink />
      </NavLeft>
      <NavRight>
        <CartButton setOpened={setOpened}  />
        <Avatar src={profile} />
      </NavRight>
    </Nav>
  );
}

export default Navigation;
