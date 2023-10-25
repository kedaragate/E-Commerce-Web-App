export default function displayCartItems(cart, cartContainer, pagePath) {
  if (location.pathname !== pagePath) {
    return;
  }
  let itemHTML = cart.map((item) => {
    return `<div class="item-container">
            <div class="item-image-container">
            <img class="item-image" src=${item.image}>
            </div>
            <div class="item-info">
            <h5 class="item-title">${item.title}</h5>
            <div class="price-div">
            <span class="current-price">Price Rs.${item.price}</span>
            <span class="item-quantity">Quantity ${item.quantity} Nos.</span>
            <span class="item-amount">Amount Rs.${item.amount}</span>
            </div>
            </div></div>`;
  });
  cartContainer.insertAdjacentHTML("afterbegin", itemHTML.join(""));
}
