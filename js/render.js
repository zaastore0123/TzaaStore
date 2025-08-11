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
