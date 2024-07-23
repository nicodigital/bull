function menuScrollStatus() {

  const menu_items = document.querySelectorAll('nav a');
	const sections_scroll = document.querySelectorAll('.scroll-case');

  const options = {
      threshold: 0.6 // Configura el umbral al 50% de visibilidad
  };

  function cleanPath(path) {
    // Dividir la cadena en partes utilizando el símbolo #
    var partes = path.split('#');
    // Retornar la última parte (la que sigue después del último #)
    return partes[partes.length - 1];
}

  // Crear un IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          const section_id = entry.target.getAttribute('id');
          const menuItem = Array.from(menu_items).find(
            item => cleanPath( item.getAttribute('href').substring(1) ) === section_id //Quitar la función cleanPath en caso de que el Hash se encuentre solo
          );

          if (entry.isIntersecting) {
              menuItem.classList.add('active');
          } else {
              menuItem.classList.remove('active');
          }
      });
  }, options);

  // Observar cada sección
  sections_scroll.forEach(section => {
      observer.observe(section);
  });
}

export default menuScrollStatus;
