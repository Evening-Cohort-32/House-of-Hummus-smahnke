import { placeOrder } from "./TransientState.js"

const handleOrderPlacement = (clickEvent) => {

    if (clickEvent.target.id === "purchase") {

        console.log("Order Placed!")

        placeOrder()
    }
}

document.addEventListener("click", handleOrderPlacement)