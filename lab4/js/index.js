import { addItemToPage, renderItemList, clearInputs, getInputValues, openModule, closeModule, validateInput} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const resetButton = document.getElementById("reset_button");
const searchInput = document.getElementById("search_input");
const sortBySpeedButton = document.getElementById("sort_by_speed_button");
const sortByEnginePowerButton = document.getElementById("sort_by_engine_power_button");
const countButton = document.getElementById("count_button");
const countInfo = document.getElementById("info_text_id");
const aproveButton = document.getElementById("aprove_button_id");
const cancelButton = document.getElementById("cancel_button_id");
const itemsContainer = document.getElementById("items_container");
let currentEditId = null;

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
    const isInputValid = validateInput({brand, max_speed, engine_power});
    if (!isInputValid) return;
    
    addItem({brand, max_speed, engine_power});
    clearInputs();
});

findButton.addEventListener("click", () => {
    const foundCar = cars.filter(car => car.brand.toLowerCase().includes(searchInput.value.toLowerCase()));

    renderItemList(foundCar);
});

resetButton.addEventListener("click", () => {
    renderItemList(cars);
    findInput.value = "";
})

sortBySpeedButton.addEventListener("click", () => {
    const sortedBySpeedCars = [...cars].sort((a, b) => Number(a.max_speed) - Number(b.max_speed));

    renderItemList(sortedBySpeedCars);
});    

sortByEnginePowerButton.addEventListener("click", () => {
    const copy = Array.from(cars);
    const sortedByEnginePowerCars = copy.sort((a, b) => Number(a.engine_power) - Number(b.engine_power));

    renderItemList(sortedByEnginePowerCars);
});

countButton.addEventListener("click", () => {
    countInfo.textContent = ` Total count: ${cars.length}`;
});

itemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit_button')) {
        const li = event.target.closest('li');
        const itemId = li.id.replace('item-', '');
        currentEditId = itemId;
        
        const car = cars.find(car => car.id === itemId);
        
        if (car) {
            document.getElementById('edit_brand_input').value = car.brand;
            document.getElementById('edit_speed_input').value = car.max_speed;
            document.getElementById('edit_engine_power_input').value = car.engine_power;

            openModule();
        }
    }
});

itemsContainer.addEventListener('click', (event) => {

    if (event.target.classList.contains('delete_button')) {
        alert("This car will be deleted");
        const li = event.target.closest('li');
        const itemId = li.id.replace('item-', '');
            
        cars = cars.filter(car => car.id !== itemId);
            
        renderItemList(cars);
    }    
});

aproveButton.addEventListener("click", () => {
    if(!currentEditId) return;

    const brand = document.getElementById('edit_brand_input').value;
    const max_speed = document.getElementById('edit_speed_input').value;
    const engine_power = document.getElementById('edit_engine_power_input').value;

    const carIndex = cars.findIndex(car => car.id === currentEditId);
    if (carIndex !== -1) {
        cars[carIndex] = {
            ...cars[carIndex],
            brand,
            max_speed,
            engine_power
        };
    }

    renderItemList(cars);
    closeModule();
    currentEditId = null;
});

cancelButton.addEventListener("click", () => {
    closeModule();
    currentEditId = null;
});

renderItemList(cars);