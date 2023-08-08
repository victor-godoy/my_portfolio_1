export default function scrollSuave() {}
const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
// vou selecionar oq estiver dentro de js-menu todos os a que comecarem com o #

// estou selecionando todos juntos mas preciso colocar um evento para cada um deles por isso vou usar o foreach( loop )

// a relacao que vai ter vai ser entre o ( id e o href ) - vou fazer a relacao na function scrollToSection

// o ( event - scrollToSection ) é uma funcao que ta acontecendo com cada link que eu clico - por padrao quando eu clico ele me gera o ( PointerEvent ) no caso eu quero manter o pradrao ( event.reventDefault()  )

// a proxima coisa é pegar o ( href do link que cliquei ) para oegar o atributo href uso o getAttribute

// no href seria a mesma coisa de eu usar o querySelector, no caso da section vou selecionar usando o querySelector agora quando eu clicar no link ele vai me mostrar a secao correspondente por conta do  ( #  ), ja tenho a connecao entre link e section

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  const topo = section.offsetTop;
  window.scrollTo({
    behavior: "smooth",
    top: topo - 80,
  });
}

linksInternos.forEach((links) => {
  links.addEventListener("click", scrollToSection);
});
