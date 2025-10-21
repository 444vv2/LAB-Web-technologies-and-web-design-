import React from "react";
import { CardContainer, CardImage, CardTitle, CardFooter, CardPrice, CardButton } from "./cardItem.styled";

const CardItem = ({ title, imageSrc, price }) => {
    return (
        <CardContainer className="card-item">
            <CardImage src={imageSrc} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardFooter>
              <CardPrice>Price: {price} $</CardPrice>
              <CardButton>View more</CardButton>
            </CardFooter>
        </CardContainer>
    );
};

export default CardItem;
