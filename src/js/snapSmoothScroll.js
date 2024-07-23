function snapSmoothScroll(){

  const main = document.querySelector('main');

  main.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY;

    main.scrollBy({
      top: delta,
      behavior: 'smooth'
    });

  })

}

export default snapSmoothScroll