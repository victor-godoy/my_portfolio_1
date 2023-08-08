export default function initMostrarProject() {
  const botaoShow = document.querySelector('[data-showProject="more"]');
  const showProject = document.querySelector('[data-showProject="visible"]');

  function handleBtn() {
    botaoShow.classList.toggle("active");
    showProject.classList.toggle("active"); // mostrar o conteudo

    if (showProject.className == "active") {
      botaoShow.innerText = "Show More"; // quando minha classe esta com o active ele reconhece como diferente e funciona mas se eu coloco igual active ele nao vai
    } else {
      botaoShow.innerText = "Show less"; // Mostrar menos
    }
  }
  botaoShow.addEventListener("click", handleBtn);
}
