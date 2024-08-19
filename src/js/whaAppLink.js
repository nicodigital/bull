function whaAppLink( wptel, wpmsg = '', device ){

    let whatsappLink = `https://web.whatsapp.com/send?phone=${wptel}&text=${wpmsg}`;

    if( device === "mobile" ){
        whatsappLink = `https://wa.me/${wptel}?text=${wpmsg}`
    }
    
    return whatsappLink;

}

export default whaAppLink