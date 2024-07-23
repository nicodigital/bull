import { animate, scroll, inView, spring } from "motion"
// stagger -> hace que las animaciones sean secuenciales
// inView -> para cuando los elementos aparecen en pantalla
// scroll -> para animar los elementos sincronizados con el scroll

function Motion(device) {

  /* Customize tranlation here */
  let transValY = '3rem';
  let transValX = '3rem';

  const motions = document.querySelectorAll('.motion');
  const animates = document.querySelectorAll('.animate');

  let motionOffset = "";
  let tagTransform = '';

  function geTransform(dataAnim, transValY, transValX) {

    if (dataAnim == 'bottom') {
      tagTransform = [`translateY(${transValY})`, "translatey(0)"];
    } else if (dataAnim == 'top') {
      tagTransform = [`translateY(-${transValY})`, "translatey(0)"];
    } else if (dataAnim == 'left') {
      tagTransform = [`translateX(-${transValX})`, "translateX(0)"];
    } else if (dataAnim == 'right') {
      tagTransform = [`translateX(${transValX})`, "translateX(0)"];
    } else {
      tagTransform = [`translateY(${transValY})`, "translatey(0)"]; // Bottom by default
    }

    return tagTransform;

  }

  animates.forEach(anim => {

    /* InView Animations */
    inView(anim, ({ target }) => {

      let dataAnim = target.dataset.anim || 'bottom';
      let dataDelay = target.dataset.delay || 0.4;
      tagTransform = geTransform(dataAnim, transValY, transValX);

      animate(target, {
        opacity: [0, 1],
        transform: tagTransform
      },
        {
          duration: 1,
          delay: dataDelay,
          ease: spring(),
        }
      );

      // This will fire when the element leaves the viewport
      return (leaveInfo) => { }

    })

  })


  /* Scroll Animations */
  if (device != 'desktop') {
    motionOffset = ["-100vh 0", "-25vh 0", "0 15vh", "0 -100vh"];
  } else {
    motionOffset = ["-100vh 0", "-25vh 0", "-25vh 15vh", "0 -100vh"];
    // motionOffset: [ "-100vh 0" , "0 0", "0 0", "0 -100vh" ], // Basico -> parada al medio
    //motionOffset: [ "-100vh 0" , "0 -50vh", "-50vh -100vh", "-100vh -100vh" ], // Fluido al medio
  }

  motions.forEach((motion) => {

    // Translate
    const transXin = motion.getAttribute('transX-In') || 0;
    const transYin = motion.getAttribute('transY-In') || 0;
    const transXout = motion.getAttribute('transX-Out') || 0;
    const transYout = motion.getAttribute('transY-Out') || 0;

    // Scale
    const scaleIn = motion.getAttribute('scale-In') || 1;
    const scaleOut = motion.getAttribute('scale-Out') || 1;

    // Rotation
    const rotateIn = motion.getAttribute('rotate-In') || 0;
    const rotateOut = motion.getAttribute('rotate-Out') || 0;

    scroll(animate(motion, {
      // opacity: [0, 1, 1, 0],
      transform: [
        `scale(${scaleIn}) translateY(${transYin}) translateX(${transXin}) rotate(${rotateIn})`, `scale(1) translateY(0) translateX(0) rotate(0)`,
        `scale(1) translateY(0) translateX(0) rotate(0)`, `scale(${scaleOut}) translateY(${transYout}) translateX(${transXout}) rotate(${rotateOut})`,
      ]

    }), {
      target: motion,
      offset: motionOffset, // SemiFluido <- La mejor opción
    },

      { easing: spring({ mass: 4 }) }
      // { easing: 'linear' }

    );

  }); // Scroll


}

export default Motion;