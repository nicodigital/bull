function getHoy() {
    // Obtén la fecha actual
    const fechaActual = new Date();

    // Obtiene el día actual
    const dia = fechaActual.getDate();

    // Obtiene el mes actual (se le suma +1 porque los meses en JavaScript comienzan en 0)
    const mes = fechaActual.getMonth() + 1;

    // Obtiene el año actual
    const anio = fechaActual.getFullYear();

    // Formatea la fecha en el formato deseado
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    // Retorna la fecha formateada
    return fechaFormateada;
}

export{ getHoy }