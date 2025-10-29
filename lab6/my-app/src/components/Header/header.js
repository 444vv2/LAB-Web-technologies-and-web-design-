import React from "react";
import HotWheelsLogo from "../../Icons/hot_wheels_logo.png"; 
import { HeaderContainer, HeaderLogo, HeaderNav, NavItem, HeaderSearch} from "./header.styled.js";
import { NavLink, useLocation, useSearchParams} from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const onChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ q: value });
    } else {
      searchParams.delete("q");
      setSearchParams(searchParams, { replace: true });
    }
  };

  return (
      <HeaderContainer>
        <HeaderLogo src={HotWheelsLogo} alt="Hot Wheels Logo" />
        <HeaderNav>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/catalog">Catalog</NavLink></NavItem>
          <NavItem><NavLink to="/cart">Cart</NavLink></NavItem>
        </HeaderNav>

        {location.pathname === "/catalog" && (
          <HeaderSearch>
            <input 
              type="search" 
              value={q} 
              onChange={onChange} 
              placeholder="Search..."
            />
          </HeaderSearch>
        )}
      </HeaderContainer>
  );
};

export default Header;
