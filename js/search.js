function setupSearch(productArray) {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = productArray.filter(p => p.title.toLowerCase().includes(keyword));
    renderProducts(filtered);
  });
}
