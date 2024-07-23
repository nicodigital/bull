function toWebp(img) {

    const userAgent = req.headers['user-agent'];

    // Comprobar si el navegador es compatible con WebP
    const isWebPSupported = userAgent.includes('Chrome'); // Reemplaza con la lógica adecuada

    if (isWebPSupported) {
        let imgNew = imageUrl.replace(/\.(png|jpg)$/i, '.webp');
    }

    return imgNew

}

export default toWebp; 

// Ejemplo de uso:
// const imageUrl = 'https://ejemplo.com/imagen.png';
// const webPImageUrl = convertToWebP(imageUrl);
// console.log(webPImageUrl);