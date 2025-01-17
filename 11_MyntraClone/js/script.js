let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem(`bagItems`);
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon()
};

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem(`bagItems`, JSON.stringify(bagItems));
    displayBagIcon();
};

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
};

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector(`.items-container`);
    if(!itemsContainerElement){
        return;
    }
    let innerHTML = ``;
    // use const 'items' var from items.js 
    items.forEach(items => {
        innerHTML += `
            <div class="item-container">
                <img class="item-image" src="${items.image}" alt="item pic">
                <div class="rating">
                    ${items.rating.stars} ⭐ | ${items.rating.count}
                </div>
                <div class="company-name">${items.company}</div>
                <div class="item-name">${items.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${items.current_price}</span>
                    <span class="original-price">Rs ${items.original_price}</span>
                    <span class="discount">(${items.discount_percentage}% OFF) </span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${items.id})">Add to Bag</button>
            </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
};
