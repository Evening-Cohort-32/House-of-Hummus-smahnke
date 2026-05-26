import { setSideOption, transientState } from "./TransientState.js"

const handleSideChoice = (event) => {
    if (event.target.name === "side") {
        setSideOption(parseInt(event.target.value))
        console.log("Selected side ID:", event.target.value);
        console.log("Current transient state:", transientState);
    }
}

export const SideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChoice)

        let html = `
            <div class="survey-input">
        `
        const sidesHTML = sides.map(
            (side) => {
                return `
                    <input type="radio" name="side" value="${side.id}" /> ${side.title}
                `
            }
        )
        // Join the array of strings into a single string and add to our HTML
        html += sidesHTML.join("")

        html += `
            </div>
        `

        return html
    }


