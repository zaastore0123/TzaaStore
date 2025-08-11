const panelImg = "https://files.catbox.moe/4dj6lz.webp";
const produkImages = {
  A: "https://files.catbox.moe/mugoxo.png",
  B: "https://files.catbox.moe/your-image-b.png",
  C: "https://files.catbox.moe/your-image-c.png",
  D: "https://files.catbox.moe/your-image-d.png"
};

const page1 = [];
for (let i = 1; i <= 10; i++) {
  page1.push({
    img: panelImg,
    title: `Panel ${i}GB`,
    desc: `Panel Pterodactyl ${i}GB RAM, Request By ZaaStore.`,
    price: `Rp ${i * 1000}`,
    link: `https://wa.me/628813908290?text=Halo+Admin+saya+ingin+beli+Panel+${i}GB`
  });
}

page1.push({
  img: panelImg,
  title: "Panel Unlimited",
  desc: "Panel Pterodactyl dengan RAM Unlimited, performa maksimal.",
  price: "Rp 11.000",
  link: "https://wa.me/628813908290?text=Halo+Admin+saya+ingin+beli+Panel+Unlimited"
});

["A", "B", "C", "D"].forEach(letter => {
  page1.push({
    img: produkImages[letter],
    title: `Produk ${letter}`,
    desc: `Deskripsi produk ${letter} yang menarik dan berkualitas.`,
    price: letter === "A" ? "Rp 20.000" :
           letter === "B" ? "Rp 25.000" :
           letter === "C" ? "Rp 30.000" : "Rp 35.000",
    link: `https://wa.me/628813908290?text=Halo+Admin+saya+ingin+beli+Produk+${letter}`
  });
});

const page2 = [
  {
    img: produkImages.A,
    title: 'Slot Store 1',
    desc: 'Deskripsi slot store 1 yang keren.',
    price: 'Rp 15.000',
    link: 'https://wa.me/628813908290?text=Halo+Admin+saya+ingin+beli+Slot+Store+1'
  },
  {
    img: produkImages.B,
    title: 'Slot Store 2',
    desc: 'Deskripsi slot store 2 yang bagus.',
    price: 'Rp 18.000',
    link: 'https://wa.me/628813908290?text=Halo+Admin+saya+ingin+beli+Slot+Store+2'
  }
];

export { page1, page2 };
