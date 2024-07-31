function reloadClick() {
  // Selecciona todos los elementos con la clase 'reload'
  const reloadElements = document.querySelectorAll('.reload');

  // Agrega un evento de clic a cada elemento seleccionado
  reloadElements.forEach ( (e) => {

    e.preventDefault();

    e.addEventListener('click', function () {
      window.location.reload();
    });

  });

}

export default reloadClick