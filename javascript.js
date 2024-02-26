document.addEventListener("DOMContentLoaded", function () {
  let btnMenu = document.getElementById("btn-menu");
  let menuMobile = document.querySelector(".menu-mobile");
  let btnFechar = document.querySelector(".btn-fechar");
  let overlayMenu = document.querySelector(".overlay-menu");

  btnMenu.addEventListener("click", function () {
    menuMobile.classList.toggle("abrir-menu");
    overlayMenu.classList.toggle("overlay-ativo");
  });

  btnFechar.addEventListener("click", function () {
    menuMobile.classList.remove("abrir-menu");
    overlayMenu.classList.remove("overlay-ativo");
  });

  overlayMenu.addEventListener("click", function () {
    menuMobile.classList.remove("abrir-menu");
    overlayMenu.classList.remove("overlay-ativo");
  });

  document.addEventListener("click", function (event) {
    if (!menuMobile.contains(event.target) && !btnMenu.contains(event.target)) {
      menuMobile.classList.remove("abrir-menu");
      overlayMenu.classList.remove("overlay-ativo");
    }
  });
});
