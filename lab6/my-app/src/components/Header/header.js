import React from "react";
import HotWheelsLogo from "../../Icons/hot_wheels_logo.png"; 
import { 
  HeaderContainer, 
  HeaderLogo, 
  HeaderNav, 
  NavItem, 
  HeaderSearch,
  HeaderAuthorization,
  AuthButton,
} from "./header.styled.js";
import { NavLink, useLocation, useSearchParams, useNavigate} from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const onChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("q", value);
    } else {
      newParams.delete("q");
    }
    setSearchParams(newParams);
  };

  const HandleLogOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/signin');
  }

  return (
      <HeaderContainer>
        <HeaderLogo src={HotWheelsLogo} alt="Hot Wheels Logo" />
        <HeaderNav>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/catalog">Catalog</NavLink></NavItem>
          <NavItem><NavLink to="/cart">Cart</NavLink></NavItem>
        </HeaderNav>

        {location.pathname !== "/catalog" &&
          <HeaderAuthorization>
            <AuthButton onClick={HandleLogOut}>Log out</AuthButton>
          </HeaderAuthorization>
        }

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
