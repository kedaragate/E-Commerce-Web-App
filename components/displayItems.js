export default function displayItems(items, itemsContainer, pagePath) {
  if (location.pathname !== pagePath) {
    return;
  }
  // itemsContainer.innerHTML = " ";
  let itemHTML = items.map((item) => {
    return `<div class="item-container">
              <div class="item-image-container">
              <img class="item-image" src="${item.image}">
              </div>
              <div class="item-info">
              <h4 class="item-title">${item.title}</h4>
              <span class="item-category font-light-colour">${item.category}</span>
              <div class="ratings-div">
              </div>
              <div class="price-div">
              <span class="current-price">Sale Price Rs.${item.price}</span>
              </div>
              <span class="more-info">more info</span>
              <div class="item-description hidden">${item.description}</div>
              </div>
              <button class="add-to-cart" id=${item.id} >Add to Cart</button> </div>`;
  });
  itemsContainer.insertAdjacentHTML("afterbegin", itemHTML.join(""));
}
