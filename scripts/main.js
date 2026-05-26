import { EntreeOptions } from "./Entrees.js";
import { SideOptions } from "./SideDishes.js";
import { VegetableOptions } from "./Vegetables.js";
import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()