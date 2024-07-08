// Get URL parameters (assuming you're passing product data via URL)
const urlParams = new URLSearchParams(window.location.search);
const products = JSON.parse(urlParams.get('products') || '[]');

// Function to display products in the order summary
function displayOrderSummary() {
    const summaryList = document.querySelector('.summary-list');
    let subtotal = 0;

    summaryList.innerHTML = ''; // Clear previous items

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('summary-item');

        const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = `${product.name} x ${product.quantity}`;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('item-price');
        const totalPrice = product.price * product.quantity;
        itemPrice.textContent = `$${totalPrice.toFixed(2)}`;

        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);
        summaryList.appendChild(listItem);

        subtotal += totalPrice;
    });

    // Update subtotal, shipping, tax, and total
    document.querySelector('.summary-divider .item-price').textContent = `$${subtotal.toFixed(2)}`;
    // ... (Calculate and update shipping, tax, and total)
}

// Call the function to initially display the order summary
displayOrderSummary();
