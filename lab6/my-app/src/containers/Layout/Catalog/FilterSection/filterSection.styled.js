import styled from "styled-components";

export const FilterSectionWrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
    display: flex;
    justify-content: space-between;
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


export const FilterButton = styled.button`
    padding: 5px 40px;
    width: 200px;
    background-color: #ff6b35;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        background-color: #e65c30;
        transition: 0.3s ease;
        transform: scale(1.05);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const FilterLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #ffffff;
`;

export const FilterLabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    width: 50%;
    gap: 15px;
`;

export const FilterSelect = styled.select`
    width: 100%;
    height: 59px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
`;
