export default function initAnimationScroll() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    reset: true,
  });

  // introducao
  ScrollReveal().reveal(".im-am", { delay: 500, origin: "top" });
  ScrollReveal().reveal(".call-to-action", { delay: 520, origin: "left" });

  // linguagens
  ScrollReveal().reveal(".linguagens-bg-white", {
    delay: 600,
    rotate: {
      x: 100,
      y: 0,
      z: 0,
    },
  });

  ScrollReveal().reveal(".itens-conhecimentos ", { delay: 800, origin: "top" });

  // projetos
  ScrollReveal().reveal(".projetos h2 ", { delay: 800, origin: "top" });
  ScrollReveal().reveal(".projetos ", { delay: 800, origin: "left" });

  // contatos
  ScrollReveal().reveal(".contact-grid ", { delay: 1000, origin: "right" });

  //footer
  ScrollReveal().reveal(".footer", { delay: 90, origin: "top" });
}
