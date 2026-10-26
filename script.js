document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave para o botão Saiba Mais
  const btnSaibaMais = document.getElementById("btnSaibaMais");
  if (btnSaibaMais) {
    btnSaibaMais.addEventListener("click", () => {
      document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Animação GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const blocos = document.querySelectorAll(".passo-bloco");
  const paineis = document.querySelectorAll(".painel-img");

  blocos.forEach((bloco, index) => {
    // Apaga a imagem anterior e acende a nova imagem suavemente no scroll
    if (index > 0) {
      gsap.fromTo(paineis[index], 
        { opacity: 0 }, 
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: bloco,
            start: "top 70%",
            end: "top 30%",
            scrub: true
          }
        }
      );
    }

    if (index < paineis.length - 1) {
      gsap.to(paineis[index], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: blocos[index + 1],
          start: "top 70%",
          end: "top 30%",
          scrub: true
        }
      });
    }
  });
});