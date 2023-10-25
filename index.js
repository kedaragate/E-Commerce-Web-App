import getProductData from "./utility/getProductData.js";
import displayItems from "./components/displayItems.js";
import displayCartItems from "./components/displayCart.js";
import calculateTotalAmount from "./utility/calculateTotalAmount.js";

let productDataUrl = "https://fakestoreapi.com/products";

let items = await getProductData(productDataUrl);
// Assigning initial quantity as 1 to each item

items.forEach((item) => {
  item.quantity = 1;
});

let itemsContainer = document.querySelector(".items-container");
let cartCount = document.querySelector(".cart-count");
let cartContainer = document.querySelector(".cart-items-container");
let cart = JSON.parse(localStorage.getItem("cart"));
let checkOutAmount = document.querySelector(".checkout-amount");
let searchBar = document.querySelector(".search-bar");
let cartItemQty = 0;
let totalAmount = 0;
let mainPagePath = "/index.html";
let cartPagePath = "/Pages/cart/cart.html";
(function onLoad() {
  displayItems(items, itemsContainer, mainPagePath);
  displayCartItems(cart, cartContainer, cartPagePath);
  calculateTotalAmount(cart, cartPagePath);

  // cartCount.innerHTML = cart.length;
})();

let addToCartButton = document.querySelectorAll(".add-to-cart");

// function for adding items in to cart array
addToCartButton.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let targetItem = e.target.id;

    let addToCartItemAksedByUser = items.find((item) => {
      return item.id == targetItem;
    });
    console.log(addToCartItemAksedByUser);

    let isItemAlreadyInCart = cart.find((item) => {
      return item.id == addToCartItemAksedByUser.id;
    });

    if (!isItemAlreadyInCart) {
      cart.forEach((item) => {
        item.amount = item.quantity * Math.round(item.price);
      });
      cart.push(addToCartItemAksedByUser);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      isItemAlreadyInCart.quantity += 1;
      cart.forEach((item) => {
        item.amount = item.quantity * Math.round(item.price);
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  })
);
(function filterItems() {
  if (location.pathname !== "/index.html") {
    return;
  } else {
    searchBar.addEventListener("keyup", (e) => {
      if (!e.target.value) {
        return displayItems(items, itemsContainer, mainPagePath);
      }
      let filteredItems = items.filter((item) => {
        let itemTitle = item.title.toLowerCase();
        let enteredKey = e.key.toLowerCase();
        return itemTitle.startsWith(enteredKey);
      });
      if (filteredItems.length === 0) {
        itemsContainer.innerHTML = "No Products Found ";
      } else {
        itemsContainer.innerHTML = " ";
        displayItems(filteredItems, itemsContainer, mainPagePath);
      }
    });
  }
})();

cart.map((item) => {
  console.log(item.amount);
});
