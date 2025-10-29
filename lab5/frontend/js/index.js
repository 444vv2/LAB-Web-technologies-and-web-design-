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

const API_URL = "http://127.0.0.1:8001/api/cars";
let cars = [];

// const generateId = () => Date.now().toString();

const fetchCars = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to load cars");
    cars = await res.json();
    renderItemList(cars);
};

const addItem  = async ({brand, max_speed, engine_power}) => {
    const payload = { brand, max_speed: Number(max_speed), engine_power: Number(engine_power) };
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Failed to add car");
    const created = await res.json();
    cars.unshift(created);
    addItemToPage(created);
};

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const {brand, max_speed, engine_power} = getInputValues();
    const isInputValid = validateInput({brand, max_speed, engine_power});
    if (!isInputValid) return;
    try {
        await addItem({brand, max_speed, engine_power});
        clearInputs();
    } catch (eRROR) {
        alert(eRROR.message || "Failed to add car");
    }
});

findButton.addEventListener("click", () => {
    const foundCar = cars.filter(car => car.brand.toLowerCase().includes(searchInput.value.toLowerCase()));

    renderItemList(foundCar);
});

resetButton.addEventListener("click", () => {
    renderItemList(cars);
    searchInput.value = "";
});

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

itemsContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('edit_button')) {
        const li = event.target.closest('li');
        const itemId = li.id.replace('item-', '');
        currentEditId = String(itemId);

        const car = cars.find(car => String(car.id) === String(itemId));

        if (car) {
            document.getElementById('edit_brand_input').value = car.brand;
            document.getElementById('edit_speed_input').value = car.max_speed;
            document.getElementById('edit_engine_power_input').value = car.engine_power;

            openModule();
        } else {
            alert('Selected car not found');
        }
    }
});

itemsContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete_button')) {
        const li = event.target.closest('li');
        const itemId = li.id.replace('item-', '');
        const confirmDelete = confirm("This car will be deleted");
        if (!confirmDelete) return;
        try {
            const res = await fetch(`${API_URL}/${itemId}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete car");
            cars = cars.filter(car => String(car.id) !== String(itemId));
            renderItemList(cars);
        } catch (e) {
            alert(e.message || "Delete failed");
        }
    }
});

aproveButton.addEventListener("click", async () => {
    if(!currentEditId) return;

    const brand = document.getElementById('edit_brand_input').value;
    const max_speed = document.getElementById('edit_speed_input').value;
    const engine_power = document.getElementById('edit_engine_power_input').value;

    const carIndex = cars.findIndex(car => String(car.id) === String(currentEditId));
    if (carIndex === -1) return;
    try {
        const payload = { brand, max_speed: Number(max_speed), engine_power: Number(engine_power) };
        const res = await fetch(`${API_URL}/${currentEditId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Failed to update car");
        const updated = await res.json();
        cars[carIndex] = updated;
        renderItemList(cars);
        closeModule();
        currentEditId = null;
    } catch (e) {
        alert(e.message || "Update failed");
    }
});

cancelButton.addEventListener("click", () => {
    closeModule();
    currentEditId = null;
});

// initial load from backend
fetchCars().catch(() => {
    // If backend is down, keep empty list and allow local interactions (no persistence)
    cars = [];
    renderItemList(cars);
});