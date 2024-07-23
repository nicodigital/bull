function netliValid() {

    const form = document.querySelector("form");
    const baseUrl = import.meta.env.BASE_URL;

    /* obtengo los campos */
    const name = document.querySelector('[name=name]');
    const email = document.querySelector('[type=email]');
    const phone = document.querySelector('[name=phone]');
    const submit = document.querySelector('[type="submit"]');

    const notify = document.querySelector('.notify');

    // Regex de campos para validación
    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+\d{0,3}(?:\s?\d{1,3}){1,4}$|^\d{8,10}$/;

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

    /* Revisamos el form cada vez que un campo cambia  */
    form.onchange = () => {
        if (validField(name, nameRegex) && validField(email, emailRegex) && validField(phone, phoneRegex) ) {
            submit.disabled = false;
            notify.classList.remove('active');
        }else{
            submit.disabled = true;
        }
    }

    // Submit de Formulario
    form?.addEventListener("submit", (e) => {
        // Loader
        let loader = document.querySelector(".loader");
        loader.style.display = "block";
    });

}

export default netliValid