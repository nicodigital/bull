function contactForm() {

  const SPARK_ID = '8KFz5qCt9'; // ID DEL FORMULARIO ID
  const FROM = "BULL";
  const SUBJECT = "BULL - Consulta";
  let notices;

  // info@bulladvisors.com.uy
  const protocolo = window.location.protocol;
  const dominio = window.location.hostname;
  const baseURL = protocolo+"//"+dominio;

  const form = document.querySelector("#contact-form");
  const ajax_form_url = 'https://submit-form.com/'+SPARK_ID;
  const result = document.getElementById('result');

  if (form) {

    const lang = form.querySelector('[name=lang]');
    const company = form.querySelector('[name=company]');
    const name = form.querySelector('[name=name]');
    const service = form.querySelector('[name=service]');
    const email = form.querySelector('[type=email]');
    const message = form.querySelector('[name=message]');
    const btn_submit = form.querySelector('[type=submit]');

    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const messageRegex = /^.{16,}$/; // min 16 caracteres

    // console.log(lang)

    /* Notices */
    if( lang.value === "en" ){

      notices = {
        success: 'Thank you for contacting us. We will get back to you shortly.',
        error: 'Error. Please try again.',
      }

    }else{

      notices = {
        success: 'Gracias por contactarnos. En breve nos pondremos en contacto.',
        error: 'Error. Por favor, intenta de nuevo.',
      }

    }

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

      if (validField(name, nameRegex) && validField(email, emailRegex) && validField(message, messageRegex) ) {
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

    message.addEventListener('input', function() {
      handleInput(message, messageRegex);
    });

    form.onchange = () => {
      checkForm()
    }

    /* ////////////////// SUBMIT ///////////////////*/

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let loader = document.querySelector(".loader");
      loader.style.display = "block";

      if (checkForm()) {

        const formData = {
          "company": company.value,
          "name": name.value,
          "email": email.value,
          "message": message.value,
          "service": service.value,
          // "g-recaptcha-response": grecaptcha.getResponse()
        };

        const json = JSON.stringify({
          ...formData,
          _email: {
            from: FROM,
            subject: SUBJECT,
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

              // window.location.href = baseURL + "/gracias";
              loader.style = "display: none";
              result.innerHTML = notices.success;

            } else {
              console.log(response);
              result.innerHTML = notices.error;
            }

          }).catch(error => {

            console.log(error);
            result.innerHTML = notices.error;

          }).then(function () {

            form.reset();
            setTimeout(() => {
              result.style.display = "none";
            }, 5000);

          });

      }

    });

  }

}

export default contactForm;