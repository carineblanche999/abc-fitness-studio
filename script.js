console.log("script.js loaded ✅");
// Subscribe button (all pages)
const subscribeBtn = document.getElementById("subscribeBtn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    alert("Thank you for subscribing.");
  });
}

// Gallery page buttons
const addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function () {
    alert("Item added to the cart.");
  });
}

const clearCartBtn = document.getElementById("clearCartBtn");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    alert("Cart cleared.");
  });
}

const processOrderBtn = document.getElementById("processOrderBtn");
if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    alert("Thank you for your order.");
  });
}

// View Cart modal (Gallery page)
const viewCartBtn = document.getElementById("viewCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartModal = document.getElementById("cartModal");

if (viewCartBtn && cartModal) {
  viewCartBtn.addEventListener("click", function () {
    cartModal.style.display = "block";
  });
}

if (closeCartBtn && cartModal) {
  closeCartBtn.addEventListener("click", function () {
    cartModal.style.display = "none";
  });
}
// ----- Web Storage (Task 3.2) -----
// Helper: get cart array from sessionStorage
function getCart() {
  const cartJSON = sessionStorage.getItem("cart");
  return cartJSON ? JSON.parse(cartJSON) : [];
}

// Helper: save cart array to sessionStorage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Helper: render cart contents into the modal
function renderCart() {
  const cartItemsEl = document.getElementById("cartItems");
  if (!cartItemsEl) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItemsEl.textContent = "Cart is empty.";
  } else {
    cartItemsEl.textContent = cart.join(", ");
  }
}

// Add to Cart (Gallery page) -> sessionStorage
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function () {
    const cart = getCart();

    // For now, we’ll add one sample item (we can make this dynamic later)
    cart.push("ABC Fitness Item");

    saveCart(cart);
    renderCart();

    alert("Item added to the cart.");
  });
}

// When View Cart opens, show what’s in sessionStorage
if (viewCartBtn) {
  viewCartBtn.addEventListener("click", function () {
    renderCart();
  });
}
// Clear Cart -> clears sessionStorage cart + updates modal
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    sessionStorage.removeItem("cart");
    renderCart();
    alert("Cart cleared.");
  });
}

// Process Order -> clears sessionStorage cart + updates modal
if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    sessionStorage.removeItem("cart");
    renderCart();
    alert("Thank you for your order.");
  });
}
// About page form -> localStorage
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
if (contactForm) {
contactForm.addEventListener("submit", function (e) {

  console.log("FORM SUBMITTED ✅");

  e.preventDefault();

  localStorage.setItem("customerName", nameInput.value);
  localStorage.setItem("customerEmail", emailInput.value);
  localStorage.setItem("customerMessage", messageInput.value);

  alert("Thank you for your message.");
  });
}