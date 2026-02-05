let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");

    cartList.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        cartList.innerHTML += `
            <li>
                <span>${cart[i].itemName}</span>
                <span>₹${cart[i].price}</span>
            </li>
        `;
    }

    totalAmount.textContent = total;
}
