import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
    padding: 15px 30px;
    color: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
`;

export const HeaderLogo = styled.img`
    height: auto;
    width: 180px;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const HeaderNav = styled.nav`
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    gap: 40px;
`;

export const NavItem = styled.nav`
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    font-weight: 500;
    font-size: 2rem;
    color: #ffffff;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
        color: #ff6b35;
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #ff6b35;
        transition: width 0.3s ease;
    }
    
    &:hover::after {
        width: 80%;
    }

    & a {
        text-decoration: none;
        color: white;
    }

    & a.active {
        color: #ff6b35;
    }

    & a:hover {
        color: #ff6b35;
    }
`;

export const HeaderSearch = styled.div`
    position: relative;
    & input {
        padding: 15px 20px;
        border-radius: 20px;
        border: none;
        width: 250px;
        transition: width 0.3s ease;
        &:focus {
            width: 300px;
            outline: none;
        }
    }
`;
