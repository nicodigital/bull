function smoothAnchors(){

  const navItems = document.querySelectorAll('.anchor');

  navItems.forEach((item) => { 

    item.addEventListener('click', (e) => {

      const target = item.getAttribute('data-anchor');
      const offset = document.querySelector(target).offsetTop;

      const scrollOptions = {
        top: offset,
        behavior: 'smooth'
      };
      
      window.scrollTo(scrollOptions);

    })

  })
  
}

export default smoothAnchors