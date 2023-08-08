export default function initHeaderChangeColor() {
  const menu = document.getElementById("menu-header");

  window.addEventListener("scroll", function () {
    // adicionando no window um evento de scroll

    if (window.scrollY > 100)
      menu.classList.add("menuFixo"); // > 0 ou outro valor desejado
    else menu.classList.remove("menuFixo");
  });
}
