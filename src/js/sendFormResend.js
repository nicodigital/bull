function sendForm( name, email, phone, message, resend, astroUrl ) {
    
    (async function () {

        try {

            const { data, error } = await resend.emails.send({
                from: "Nicolook <nico@nicowebsite.com>",
                to: ["nicolook.pro@gmail.com"],
                subject: `Nicolook - Consulta de ${ name }`,
                html: `<b>Nombre</b>: ${ name } <br>
                        <b>Email</b>: ${ email } <br>
                        <b>Tel.:</b>: ${ phone } <br>
                        <b>Message.:</b>: ${ message } <br>`,
            });

            // console.log({ data });

        } catch (error) {
            console.log(error);
        }
    })();
}

export default sendForm;