export function calculateDiscount(price) {
  let discount = 0;
  if (price >= 500) {
    discount = 0.4;
  } else if (price >= 100) {
    discount = 0.3;
  } else if (price >= 20) {
    discount = 0.2;
  }
  return discount;
}

export function applyDiscountToPrice(price) {
  const discount = calculateDiscount(price);
  const discountedPrice = price - price * discount;
  return discountedPrice;
}

export function updatePrices() {
  const prices = document.querySelectorAll("[class*='price-']");
  prices.forEach((priceElement) => {
    const productId = priceElement.classList[0].split("-")[1];
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    const discountedPrice = applyDiscountToPrice(price);
    const discount = calculateDiscount(price);
    const discountText = `${Math.round(discount * 100)}% off`;
    const discountedPriceText = `$${discountedPrice.toFixed(2)}`;
    const newPriceHTML = `<p class="discount">Discounted Price: ${discountedPriceText}</p><p>${discountText}</p>`;
    priceElement.insertAdjacentHTML("afterend", newPriceHTML);
  });
}
