import Lenis from 'lenis'

function lenisScroll() {

  const lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 1,
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothTouch: false, // Mobile
    touchMultiplier: 2, // sensibility on mobile
    infinite: false // Infinite scrolling
  });

  const smoothLinks = document.querySelectorAll('.anchor');

  smoothLinks.forEach(link => {
    let anchor = link.getAttribute('href');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // lenis.scrollTo(anchor)
      // anchor.scrollIntoView({ behavior: 'smooth' })

      lenis.scrollTo(anchor, {
        duration: 2, // Puedes ajustar la duración según tus necesidades
        easing: (t) => 1 - Math.pow(1 - t, 6) // Ejemplo de una función de easing personalizada
      });

    })
  })

  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

export default lenisScroll