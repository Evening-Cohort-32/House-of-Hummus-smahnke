import { purchases } from "./Purchases.js"
import { EntreeOptions } from "./Entrees.js";
import { SideOptions } from "./SideDishes.js";
import { VegetableOptions } from "./Vegetables.js";
import "./PurchaseButton.js"

export const FoodTruck = async () => {
    const salesHTML = await purchases()
    const entreesHTML = await EntreeOptions()
    const sidesHTML = await SideOptions()
    const vegetablesHTML = await VegetableOptions()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div class="options-container">
            <section class="options-card">
                    <h2>Base Dish</h2>
                <div class="options-list">
                    ${entreesHTML}
                </div>
            </section>
            <section class="options-card">
                    <h2>Base Dish</h2>
                <div class="options-list">
                    ${vegetablesHTML}
                </div>
            </section>
            <section class="options-card">
                    <h2>Base Dish</h2>
                <div class="options-list">
                    ${sidesHTML}
                </div>
            </section>
        </div>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
