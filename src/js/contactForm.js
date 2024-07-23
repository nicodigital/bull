function contactForm() {

  const protocolo = window.location.protocol;
  const dominio = window.location.hostname;
  const baseURL = protocolo+"//"+dominio;

  const form = document.querySelector("#contact-form");
  const ajax_form_url = 'https://submit-form.com/M56v2ysHS';
  const result = document.getElementById('result');

  if (form) {

    const name = form.querySelector('[name=name]');
    const email = form.querySelector('[type=email]');
    const phone = form.querySelector('[name=phone]');
    const message = form.querySelector('[name=message]');
    const btn_submit = form.querySelector('[type=submit]');

    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+\d{0,3}(?:\s?\d{1,3}){1,4}$|^\d{8,9}$/;
    const messageRegex = /^.{16,}$/; // min 16 caracteres


    /* ////////////////// TEMPORIZADORES ///////////////////*/
    // Definir una variable para el temporizador de retraso
    let typingTimer;

    // Tiempo de espera en milisegundos antes de ejecutar la validación
    const doneTypingInterval = 500; // 500 milisegundos (0.5 segundos)

    // Función para manejar el evento de entrada en el campo
    function handleInput(field, regex) {
        // Limpiar el temporizador existente
        clearTimeout(typingTimer);

        // Comenzar un nuevo temporizador
        typingTimer = setTimeout(function() {
            // Ejecutar la validación después del tiempo de espera
            validField(field, regex);
        }, doneTypingInterval);
    }

    /* ////////////////// VALIDAR ///////////////////*/

    function validField(field, regex) {
      let field_val = field.value;

      // if ( !regex.test(field_val) ) {
      if (!field_val.match(regex)) {
        field.classList.add('invalid');
        return false;
      }

      field.classList.remove('invalid');
      return true;
    }

    /* ////////////////// CHECK FORM ///////////////////*/
    function checkForm() {

      let formStatus = '';

      if (validField(name, nameRegex) && validField(email, emailRegex) && validField(phone, phoneRegex) && validField(message, messageRegex) ) {
        btn_submit.disabled = false;
        formStatus = true;
      } else {
        btn_submit.disabled = true;
        formStatus = false;
      }

      return formStatus;

    }

    /* ////////////////// EVENT HANDLING ///////////////////*/

    name.addEventListener('input', function() {
      handleInput(name, nameRegex);
    });

    email.addEventListener('input', function() {
      handleInput(email, emailRegex);
    });

    phone.addEventListener('input', function() {
      handleInput(phone, phoneRegex);
    });

    message.addEventListener('input', function() {
      handleInput(message, messageRegex);
    });

    form.onchange = () => {
      checkForm()
    }

    message.addEventListener('mouseleave', function() {
     checkForm();
    })

    /* ////////////////// SUBMIT ///////////////////*/

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let loader = document.querySelector(".loader");
      loader.style.display = "block";

      if (checkForm()) {

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);

        const json = JSON.stringify({
                      ...object,
                      _email: {
                        from: "LIV",
                        subject: "LIV - Contacto",
                        template: {
                          title: false,
                          footer: false,
                        }
                      }
                    });

        fetch( ajax_form_url , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        }).then(async (response) => {

            let json = await response.json();

            if (response.status == 200) {

              window.location.href = baseURL + "/gracias";
              // result.innerHTML = json.message;

            } else {
              console.log(response);
              // result.innerHTML = json.message;
            }

          }).catch(error => {

            console.log(error);
            result.innerHTML = "😭 Algo no ha funcionado bien.";

          }).then(function () {

            form.reset();
            setTimeout(() => {
              result.style.display = "none";
            }, 3000);

          });

      }

    });

  }

}

export default contactForm;