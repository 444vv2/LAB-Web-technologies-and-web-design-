import styled from "styled-components";
import Icon from '@ant-design/icons';

export const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #0d0d0d 0%, #000000 100%);
    color: #ffffff;
    padding: 50px 30px 20px;
    text-align: center;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff6b35, #ffaa00);
    }
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
`;

export const FooterSection = styled.div`
    h3 {
        color: #ff6b35;
        font-size: 1.2rem;
        margin-bottom: 15px;
        font-weight: 700;
    }
    
    p, a {
        color: #cccccc;
        line-height: 1.6;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    
    a:hover {
        color: #ff6b35;
    }
`;

export const FooterLogo = styled.img`
    width: 120px;
    margin-bottom: 15px;
`; 

export const FooterText = styled.p`
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid #333;
    color: #999;
    font-size: 0.9rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 15px;
`;

export const IconBase = styled(Icon)`
    font-size: 1.5rem;
    color: #cccccc;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
        color: #ff6b35;
        transform: translateY(-2px);
    }
`;