function validForm() {

    const form = document.querySelector("form");
    const baseUrl = import.meta.env.BASE_URL;

    /* obtengo los campos */
    const name = document.querySelector('[name=name]');
    const email = document.querySelector('[type=email]');
    const phone = document.querySelector('[name=phone]');

    const notify = document.querySelector('.notify');

    // Regex de campos para validación
    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+\d{0,3}(?:\s?\d{1,3}){1,4}$|^\d{8,9}$/;

    // Función para validar campos
    function validField(field, regex) {

        let field_val = field.value;

        if (!field_val.match(regex)) {
            field.classList.add('invalid');
            return false;
        }

        field.classList.remove('invalid');
        return true;

    }

    name.onchange = () => {
        validField(name, nameRegex);
    }

    email.onchange = () => {
        validField(email, emailRegex);
    }

    phone.onchange = () => {
        validField(phone, phoneRegex);
    }

    // Submit de Formulario
    form?.addEventListener("submit", (e) => {
        e.preventDefault();

        // Loader
        let loader = document.querySelector(".loader");
        loader.style.display = "block";

        /* Captcha */
        let captchaPass = false;
        const captcha = document.querySelector('#captcha').value;
        const getCaptcha = document.querySelector('#getcaptcha').value;

        if( captcha === getCaptcha ){
            captchaPass = true;
        }

        // Si es todo válido
        if (validField(name, nameRegex) && validField(email, emailRegex) && validField(phone, phoneRegex) && captchaPass ) {
           
            notify.classList.remove('active');

            // Submit
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    accept: "application/json",
                },
            })
                .then((res) => {
                    res.json();
                })
                .then(function (content) {

                    loader.style.display = "none";

                    // Redirección
                    const url = new URL(baseUrl + "/", window.location.origin);
                    url.searchParams.set("form", "ok");
                    window.location.assign(url.toString());
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error));
                });
        }else{

            loader.style.display = "none";
            notify.classList.add('active');

        }

    });

}

export default validForm;