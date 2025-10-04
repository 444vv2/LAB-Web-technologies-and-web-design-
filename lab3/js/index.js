import { addItemToPage, renderItemList, clearInputs, getInputValues} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const resetButton = document.getElementById("reset_button");
const searchInput = document.getElementById("search_input");
const sortBySpeedButton = document.getElementById("sort_by_speed_button");
const sortByEnginePowerButton = document.getElementById("sort_by_engine_power_button");
const countButton = document.getElementById("count_button");
const countInfo = document.getElementById("info_text_id");


let cars = [];

const generateId = () => Date.now().toString();

const addItem  = ({brand, max_speed, engine_power}) => {

    const newItem = {
        id: generateId(),
        brand,
        max_speed,
        engine_power,
    };

    cars.push(newItem);

    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const {brand, max_speed, engine_power} = getInputValues();
    clearInputs();
    addItem({brand, max_speed, engine_power});
});

findButton.addEventListener("click", () => {
    const foundCar = cars.filter(car => car.brand.toLowerCase().includes(searchInput.value.toLowerCase()));

    renderItemList(foundCar);
});

resetButton.addEventListener("click", () => {
    renderItemList(cars);

    findInput.value = "";
})

renderItemList(cars);

sortBySpeedButton.addEventListener("click", () => {
    const sortedBySpeedCars = [...cars].sort((a, b) => a.max_speed - b.max_speed);

    renderItemList(sortedBySpeedCars);
});    

sortByEnginePowerButton.addEventListener("click", () => {
    const copy = Array.from(cars);
    const sortedByEnginePowerCars = copy.sort((a, b) => a.engine_power - b.engine_power);

    renderItemList(sortedByEnginePowerCars);
});

countButton.addEventListener("click", () => {
    countInfo.textContent = ` Total count: ${cars.length}`;

});