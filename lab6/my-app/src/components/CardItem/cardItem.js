import React from "react";
import { CardContainer, CardImage, CardTitle, CardFooter, CardPrice, CardButton} from "./cardItem.styled";

const CardItem = ({ title, description, imageSrc, price }) => {
    return (
        <CardContainer className="card-item">
            <CardImage src={imageSrc} alt={title} />
            <CardTitle>{title}</CardTitle>
            <p>{description}</p>
            <CardFooter>
              <CardPrice>Price: {price} $</CardPrice>
              <CardButton>View more</CardButton>
            </CardFooter>
        </CardContainer>
    );
};

export default CardItem;
