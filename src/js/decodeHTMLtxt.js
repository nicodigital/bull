function decodeHTMLtxt(text) {
    const entities = {
        'amp': '&',
        'lt': '<',
        'gt': '>',
        'quot': '"',
        'apos': "'",
        '#8211': '–',
        // Añade más entidades según sea necesario
    };

    return text.replace(/&(#?[\w\d]+);/g, (match, entity) => {
        if (entity in entities) {
            return entities[entity];
        } else if (entity.charAt(0) === '#') {
            const codePoint = entity.charAt(1).toLowerCase() === 'x' ?
                parseInt(entity.substr(2), 16) :
                parseInt(entity.substr(1), 10);
            if (!isNaN(codePoint)) {
                return String.fromCodePoint(codePoint);
            }
        }
        return match;
    });
}

export default decodeHTMLtxt