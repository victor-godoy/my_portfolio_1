export default function initMenuMobile() {
  const btnMobile = document.querySelector('[data-menu="button"]');
  const listMenu = document.querySelector('[data-menu="list-ul"]');

  function openMenu(abrir) {
    // o parametro ( abrir fala tanto com a ul-list quanto com o btn )

    if (btnMobile) {
      btnMobile.classList.toggle("open");
      listMenu.classList.toggle("open");
    }
  }

  btnMobile.addEventListener("click", openMenu);
}
