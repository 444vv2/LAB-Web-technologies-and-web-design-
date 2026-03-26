import styled from "styled-components";

export const TopCardContainer = styled.section`
    background: #1a1a1a;
    padding: 60px 30px;
    margin: 0;
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

export const TopCardTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #ff6b35, #ffaa00);
        border-radius: 2px;
    }
`;

export const TopCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
`; 

export const TopCardButton = styled.button`
    background: linear-gradient(90deg, #ff6b35, #ffaa00);
    color: #ffffff;
    border: none;
    border-radius: 24px;
    margin-top: 30px;
    padding: 20px 70px;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: linear-gradient(90deg, #ffaa00, #ff6b35);
    }
`;
