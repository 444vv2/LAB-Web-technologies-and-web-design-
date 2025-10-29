import styled from "styled-components";

export const ItemsListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: #333333;

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

export const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
`;  
