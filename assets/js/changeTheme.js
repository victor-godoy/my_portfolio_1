export default function initChangeTheme() {
  const btnChangeTheme = document.getElementById("theme-button");

  if (btnChangeTheme) {
    function changeColor(color) {
      document.body.classList.toggle("dark-active");
    }

    btnChangeTheme.addEventListener("click", changeColor);
  }
}
