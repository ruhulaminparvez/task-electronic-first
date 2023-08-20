import { cardData } from './cardData.js';
const cardItems = document.querySelector('.cardItems');

cardData.forEach(card => {
  const cardItem = document.createElement('div');
  cardItem.classList.add('cardItem');

  cardItem.innerHTML = `
    <div class="cardImage">
      <img src="${card?.imageSrc}" alt="${card?.alt}" />
      <div class="discountTag">
        <span>${card?.discount}</span>
      </div>
    </div>
    <div class="cardText">
      <h3 class="cardTitle">${card?.title.length > 20 ? card?.title.slice(0, 20) + '...' : card?.title}</h3>
      <span class="cardPriceTag">${card?.price}</span>
    </div>
  `;

  cardItems.appendChild(cardItem);
});