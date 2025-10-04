const brandInput = document.getElementById("brand_input")
const speedMaxInput = document.getElementById("speed_input")
const enginePowerInput = document.getElementById("engine_power_input")
const itemsContainer = document.getElementById("items_container");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, brand, max_speed, engine_power}) => `
    <li id="${getItemId(id)}" class="item_list" draggable="true">
        <img src="assets/car_img.png" class="item_list_image" alt="Car">
        <div class="card_body">
            <h5 class="card_brand">${brand}</h5>
            <p class="card_max_speed">${max_speed}</p>
            <p class="card_engine_power">${engine_power}</p>
        </div>
    </li>`;


export const clearInputs = () => {
    brandInput.value = "";
    speedMaxInput.value = "";
    enginePowerInput.value = "";
};

export const addItemToPage = ({id, brand, max_speed, engine_power}) => {
    itemsContainer.insertAdjacentHTML("afterbegin", itemTemplate({id, brand, max_speed, engine_power}));
};

export const renderItemList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items){
        addItemToPage(item);
    }
};

export const getInputValues = () => {
    return {
        brand: brandInput.value,
        max_speed: speedMaxInput.value,
        engine_power: enginePowerInput.value,
    };
};