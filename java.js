// Ambil semua gambar dengan class 'gambar'
const semuaGambar = document.querySelectorAll(".gambar");

// Tambahkan event listener ke masing-masing gambar
semuaGambar.forEach((gambar) => {
  gambar.addEventListener("click", () => {
    const id = gambar.getAttribute("data-id");
    const penjelasan = document.getElementById(id);

    // Toggle tampilan penjelasan
    if (
      penjelasan.style.display === "none" ||
      penjelasan.style.display === ""
    ) {
      penjelasan.style.display = "block";
    } else {
      penjelasan.style.display = "none";
    }
  });
});
