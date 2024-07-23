function videoPlayOnView() {
  
  // Seleccionar todos los elementos de video en el documento
  const videos = document.querySelectorAll('video');

  // Opciones para la Intersection Observer
  const options = {
    root: null, // El viewport es el root
    rootMargin: '0px', // Sin margen
    threshold: 0.5 // Al menos el 50% del elemento debe estar visible
  };

  // Función de callback para la Intersection Observer
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      // Si el video está completamente visible, reproducirlo
      if (entry.isIntersecting) {
        const video = entry.target;
        video.play();
      } else {
        // Pausar el video si no está visible
        const video = entry.target;
        video.pause();
      }
    });
  }

  // Crear un nuevo Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observar cada video
  videos.forEach(video => {
    observer.observe(video);
  });

}

export default videoPlayOnView