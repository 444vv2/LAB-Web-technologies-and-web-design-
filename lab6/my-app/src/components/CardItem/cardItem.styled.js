import styled from "styled-components";

export const CardContainer = styled.div`
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5),
                inset 0 2px 4px rgba(255, 255, 255, 0.1);
    border: 2px solid #333;
    transition: all 0.3s ease;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7),
                    inset 0 2px 6px rgba(255, 255, 255, 0.15),
                    0 0 20px rgba(255, 107, 53, 0.2);
        border-color: #ff6b35;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
`;

export const CardTitle = styled.h3`
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.3;
`;

export const CardFooter = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 1px solid #333;
`;

export const CardPrice = styled.p`
    color: #ff6b35;
    font-weight: 700;
    font-size: 1.3rem;
    margin: 0;
`;

export const CardButton = styled.button`
    background: linear-gradient(135deg, #ff6b35, #ffaa00);
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 0.95rem;
    
    &:hover {
        background: linear-gradient(135deg, #ffaa00, #ff6b35);
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
    }
    
    &:active {
        transform: scale(0.98);
    }
`;