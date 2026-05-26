import { setVegetableOption, transientState } from "./TransientState.js"

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetable") {
        setVegetableOption(parseInt(event.target.value))
        console.log("Selected vegetable ID:", event.target.value);
        console.log("Current transient state:", transientState);
    }
}

export const VegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetableChoice)

        let html = `
            <div class="survey-input">
        `
        const vegetablesHTML = vegetables.map(
            (vegetable) => {
                return `
                    <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
                `
            }
        )
        // Join the array of strings into a single string and add to our HTML
        html += vegetablesHTML.join("")

        html += `
            </div>
        `

        return html
    }