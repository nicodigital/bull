let lastScrollTop = '';

function smartMenu() {

  const body = document.querySelector('body');
  const scrollPosition = window.scrollY;

  if (scrollPosition > lastScrollTop) {
    body.dataset.stack = 'off';
  } else {
    body.dataset.stack = 'on';
  }

  lastScrollTop = scrollPosition;


}

export default smartMenu