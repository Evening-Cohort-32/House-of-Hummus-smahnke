// Set up the transient state data structure and provide initial values
export const transientState = {
    entreeId: 0,
    price: 0,
    vegetableId: 0,
    sideId: 0
}

// Functions to modify each property of transient state
export const setEntreeOption = (chosenEntree) => {
    transientState.entreeId = chosenEntree
}

export const setVegetableOption = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
}

export const setPriceOption = (chosenPrice) => {
    transientState.price = chosenPrice
}

export const setSideOption = (chosenSide) => {
    transientState.sideId = chosenSide
}

// Function to convert transient state to permanent state
export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/purchases", postOptions)

    // Dispatch a custom event when the order is complete
    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)
}