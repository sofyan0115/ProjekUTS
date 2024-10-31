document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const navToggle = document.createElement("div");

    // Buat tombol toggle menu
    navToggle.classList.add("nav-toggle");
    navToggle.textContent = "Menu";

    // Tambahkan tombol sebelum elemen nav
    nav.parentNode.insertBefore(navToggle, nav);

    // Event Listener untuk toggle menu
    navToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});
