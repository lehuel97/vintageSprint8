const formulario = document.getElementById('formularioLogin');
const inputs = document.querySelectorAll('#formularioLogin input')
console.log('validaciones login')

const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

const campos = {
    password: false,
    correo: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {

        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('input-contenedor-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('input-contenedor-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('input-contenedor-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('input-contenedor-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

/*const validarPassword = () => {
    const inputPassword = document.getElementById('password');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('input-contenedor-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('input-contenedor-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.remove('input-contenedor-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('input-contenedor-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}*/

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario);
});