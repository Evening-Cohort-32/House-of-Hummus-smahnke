import { setEntreeOption, transientState } from "./TransientState.js"

const handleEntreeChoice = (event) => {
    if (event.target.name === "entree") {
        setEntreeOption(parseInt(event.target.value))
        console.log("Selected entree ID:", event.target.value);
        console.log("Current transient state:", transientState);
    }
}

export const EntreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChoice)

        let html = `
            <div class="survey-input">
        `
        const entreesHTML = entrees.map(
            (entree) => {
                return `
                    <label>
                        <input 
                            type="radio"
                            name="entree"
                            value="${entree.id}"
                        />
                        ${entree.name}
                    </label>
                `
            }
        )
        // Join the array of strings into a single string and add to our HTML
        html += entreesHTML.join("")

        html += `
            </div>
        `

        return html
    }
