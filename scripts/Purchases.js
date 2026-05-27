export const purchases = async () => {
    // Fetch the submissions with expanded purchases data
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const purchases = await response.json()

    let html = `
        <div id='order-submission'>
    `
    
    // Generate HTML for each order using .map()
    const purchasesHTML = purchases.map(
        (purchase) => {
            const purchasePrice = (purchase.entree.price + purchase.side.price + purchase.vegetable.price).toFixed(2)
            return `
                <article class="order">
                    <h2>Receipt #${purchase.id} = $${purchasePrice}</h2>
                </article>
            `
        }
    )

    // Join the array of strings into a single string and add to our HTML
    html += purchasesHTML.join("")
    
    html += `
        </div>
    `
    
    return html
}