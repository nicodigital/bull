function getFirstURLTerm(url) {

    // Encuentra la posición de la primera barra después del primer "/"
    const primerSlashIndex = url.indexOf('/');

    if (primerSlashIndex !== -1) {
      
        // Encuentra la posición de la segunda barra después de la primera
        const segundoSlashIndex = url.indexOf('/', primerSlashIndex + 1);

        if (segundoSlashIndex !== -1) {
            // Si se encuentra una segunda barra
            const primerTermino = url.substring(primerSlashIndex + 1, segundoSlashIndex);
            return primerTermino;
        } else {
            // Si no hay una segunda barra
            return null;
        }
        
    } else {
        // Si no hay una barra en absoluto
        return null;
    }
    
}

export default getFirstURLTerm;