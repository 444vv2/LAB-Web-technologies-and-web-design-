import {React, useMemo} from "react";
import { ItemsListWrapper, ItemsGrid} from "./item_list.styled";
import CardItem from "../../../../components/CardItem/cardItem";
import CarImg1 from "../../../../Icons/car1.png";
import CarImg2 from "../../../../Icons/car2.png";
import CarImg3 from "../../../../Icons/car3.png";
import { useSearchParams } from "react-router-dom";

const data = [
    { 
        id: 1,
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 2,
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 3,
        title: "Orange Car 3",
        description: "This is a vibrant orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    },
    { 
        id: 4,
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 5,
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 3,
        title: "Orange Car 3",
        description: "This is a vibrant orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    },
    { 
        id: 4,
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 5,
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 3,
        title: "Orange Car 3",
        description: "This is a vibrant orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    },
    { 
        id: 4,
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "70",
        color: "green",
        priceCategory: "Less",
        type: "Solo_car"
    }
];

const ItemsList = () => {
        const [searchParams] = useSearchParams();
        const q = (searchParams.get("q") || "").trim().toLowerCase();
        const filter1 = searchParams.get("filter1") || "";
        const filter2 = searchParams.get("filter2") || "";
        const filter3 = searchParams.get("filter3") || "";
    
        const filtered = useMemo(() => {
            let result = data;
            
            if (q) {
                result = result.filter(item =>
                    (item.title || "")
                        .toLowerCase()
                        .split(/\s+/)
                        .some(word => word.startsWith(q))
                );
            }
            
            if (filter1) {
                result = result.filter(item => item.color === filter1);
            }

            if (filter2) {
                result = result.filter(item => item.priceCategory === filter2);
            }

            if (filter3) {
                result = result.filter(item => item.type === filter3);
            }
            
            return result;
        }, [q, filter1, filter2, filter3]);

    return (
        <ItemsListWrapper>
            <ItemsGrid>
                {filtered.map((item, id) => (
                        <CardItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            imageSrc={item.imageSrc}
                            price={item.price}
                        />
                    ))}
                </ItemsGrid>
        </ItemsListWrapper>
    );
};

export default ItemsList;