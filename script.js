const products = [
  { id: 1, name: "Smart Watch", price: 120 },
  { id: 2, name: "Wireless Headphones", price: 80 },
  { id: 3, name: "Laptop Backpack", price: 40 },
  { id: 4, name: "Sneakers", price: 95 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsEl = document.getElementById("products");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");

function renderProducts() {
  productsEl.innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    cartItemsEl.innerHTML += `
      <div>
        ${item.name} x${item.qty} - $${item.price * item.qty}
        <button onclick="removeItem(${item.id})">❌</button>
      </div>
    `;
  });

  cartTotalEl.textContent = total;
  cartCountEl.textContent = count;
}

renderProducts();
renderCart();
