// Smooth Scroll to Product Section
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

// Add to cart counter
let cartCount = 0;
const cartNumber = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartNumber.textContent = cartCount;
  });
});
