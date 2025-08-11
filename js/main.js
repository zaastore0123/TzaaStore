import { page1, page2 } from './products.js';
import { renderProducts } from './render.js';

const container = document.getElementById('produk-container');
const nextBtn = document.getElementById('nextBtn');
let currentPage = 1;

renderProducts(container, page1);

nextBtn.addEventListener('click', () => {
  if (currentPage === 1) {
    renderProducts(container, page2);
    nextBtn.textContent = 'Back';
    currentPage = 2;
  } else {
    renderProducts(container, page1);
    nextBtn.textContent = 'Next';
    currentPage = 1;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('btnSettings').addEventListener('click', () => {
  alert("Menu Pengaturan belum dibuat.");
});
