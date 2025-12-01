import styled from "styled-components";

export const MainSectionContainer = styled.div`
    margin: 0 auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
    min-height: 100vh;
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

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
    font-family: 'Arial', sans-serif;

    &:hover {
        color: #ff6b35;
        transform: translateY(-10px);
        transition: transform 0.3s ease, color 0.3s ease;
    }
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border: 2px solid #333;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5),
                inset 0 2px 4px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7),
                    inset 0 2px 6px rgba(255, 255, 255, 0.15),
                    0 0 20px rgba(255, 107, 53, 0.2);
        border-color: #ff6b35;
    }
`;

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
    border: 2px solid #333;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
        border-color: #ff6b35;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
    }
`;

export const ItemInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        color: #ff6b35;
    }
`;

export const ItemTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
    line-height: 1.4;
    transition: color 0.3s ease;
    
    &:hover {
        color: #ff6b35;
    }
`;

export const QuantityControls = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 20px;
`;

export const QuantityButton = styled.button`
    width: 32px;
    height: 32px;
    border: 2px solid #444;
    background: linear-gradient(145deg, #333, #222);
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: #ff6b35;
        background: linear-gradient(145deg, #ff6b35, #ffaa00);
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
    }
    
    &:active {
        transform: scale(0.95);
    }
`;

export const QuantityDisplay = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    min-width: 30px;
    text-align: center;
`;

export const ItemPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #ff6b35;
    min-width: 80px;
    text-align: right;
`;

export const TotalSection = styled.div`
    text-align: right;
    padding: 20px 0;
    border-top: 2px solid #333;
    margin-bottom: 30px;
`;

export const TotalAmount = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #ff6b35;
    margin: 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1000px;
    margin: 100px 40px 0 40px;
`;

export const GoBackButton = styled.button`
    padding: 15px 30px;
    background: linear-gradient(145deg, #333, #222);
    color: #ffffff;
    border: 2px solid #444;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    
    &:hover {
        background: linear-gradient(145deg, #444, #333);
        border-color: #666;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
`;

export const ContinueButton = styled.button`
    padding: 15px 30px;
    background: linear-gradient(135deg, #ff6b35, #ffaa00);
    color: #ffffff;
    border: 2px solid #ff6b35;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    
    &:hover {
        background: linear-gradient(135deg, #ffaa00, #ff6b35);
        border-color: #ffaa00;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
    }
    
    &:active {
        transform: translateY(0);
    }
`;