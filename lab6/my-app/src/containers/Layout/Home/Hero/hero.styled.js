import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 60px 30px;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
        z-index: 1;
    }
    
    > * {
        position: relative;
        z-index: 2;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    margin-bottom: 15px;
`;

export const HeroSubtitle = styled.p`
    font-size: 1.3rem;
    color: #cccccc;
    text-align: center;
    margin-bottom: 50px;
    max-width: 600px;
    font-weight: 500;
`;

export const LogosWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 30px;
    max-width: 900px;
    width: 100%;
    margin-top: 30px;
`;

export const LogoItem = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 20px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5),
                inset 0 2px 4px rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    border: 2px solid #333;
    position: relative;
    margin: 0 auto;
    
    &:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7),
                    inset 0 2px 6px rgba(255, 255, 255, 0.15),
                    0 0 20px rgba(255, 107, 53, 0.3);
        border-color: #ff6b35;
    }
`;

export const LogoImage = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    transition: filter 0.3s ease;
    
    ${LogoItem}:hover & {
        filter: drop-shadow(0 4px 12px rgba(255, 107, 53, 0.4));
    }
`;