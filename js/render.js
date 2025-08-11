export function renderProducts(container, products) {
  container.innerHTML = '';
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.title}" />
      <h2>${prod.title}</h2>
      <p class="desc">${prod.desc}</p>
      <p class="price">${prod.price}</p>
      <a class="buy-btn" href="${prod.link}" target="_blank">Beli Sekarang</a>
    `;
    container.appendChild(card);
  });
}
function renderProducts(productArray) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  productArray.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <strong>${p.price}</strong><br>
        <a href="${p.link}" target="_blank">Beli</a>
      </div>
    `;
  });
}
