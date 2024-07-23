function getSlug(url) {

  // Removemos las diagonales al final de la URL (si las hay)
  url = url.replace(/\/+$/, '');
  
  // Dividimos la URL en partes utilizando el caracter "/"
  let parts = url.split('/');
  
  // Obtenemos el último término de la URL
  let lastTerm = parts[parts.length - 1];
  
  return lastTerm;

}

export default getSlug;