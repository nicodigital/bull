function charsCodes(text) {

    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['lt', '<'],
        ['gt', '>'],
        ['#39', '\''],
        ['#039', '\''],
        ['#038', '&'],
        ['#047', '/']
    ];

    for (var i = 0; i < entities.length; i++) {
        text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
    }

    return text;

}

export default charsCodes
