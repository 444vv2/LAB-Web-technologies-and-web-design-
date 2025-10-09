const brandInput = document.getElementById("brand_input")
const speedMaxInput = document.getElementById("speed_input")
const enginePowerInput = document.getElementById("engine_power_input")
const itemsContainer = document.getElementById("items_container");
const module = document.getElementById("module_id");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, brand, max_speed, engine_power}) => `
    <li id="${getItemId(id)}" class="item_list" draggable="true">
        <img src="assets/car_img.png" class="item_list_image" alt="Car">
        <div class="card_body">
            <p><strong>Brand:</strong> ${brand}</p>
            <p><strong>Max speed:</strong> ${max_speed}</p>
            <p><strong>Engine power:</strong> ${engine_power}</p>
        </div>
        <div class="item_buttons">
            <button class="edit_button" id="edit_button_id">Edit</button>
            <button class="delete_button" id="delete_button_id">Delete</button>
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

export const openModule = () => {
    module.style.display = "flex";
};

export const closeModule = () => {
    module.style.display = "none";
};

export const validateInput = ({brand, max_speed, engine_power}) => {
    if (brand === ""){ 
        alert("Brand can't be empty");
        return false;
    }else if (brand.length < 2){
        alert("Brand must be at least 2 characters long");
        return false;
    }
    
    if (max_speed === "" || engine_power === ""){
        alert("Speed and Engine Power can't be empty");
        return false;
    }else if (isNaN(max_speed) || isNaN(engine_power)){
        alert("Speed and Engine Power must be numbers");
        return false;
    }else if (Number(max_speed) <= 0 || Number(engine_power) <= 0){
        alert("Speed and Engine Power must be positive numbers");
        return false;
    }

    return true;

}