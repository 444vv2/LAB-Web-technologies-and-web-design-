import React from "react";
import HotWheelsLogo from "../../../Icons/hot_wheels_logo.png"; 
import { HeaderContainer, HeaderLogo, HeaderNav, NavItem } from "./header.styled.js";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={HotWheelsLogo} alt="Hot Wheels Logo" />
      <HeaderNav>
        <NavItem>Home</NavItem>
        <NavItem>Catalog</NavItem>
        <NavItem>Cart</NavItem>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
