document.addEventListener("DOMContentLoaded", function () {
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;

    function validarInputs() {
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var email = document.getElementById('email').value;
        if (nombre && apellido && email && password1 && password2 && validarCheckBox()) {
            return true
        } else {
            return false
        }
    }

    function validarPasswords() {
        if (password1.lenght >= 6 && password1 === password2) {
            return true;
        } else {
            return false;
        }
    }

    function validarCheckBox() {
        let terminos = document.querySelector("#terminos");
        if (terminos.checked) {
            return true;
        } else {
            return false;
        }
    }

    function validaciones() {
        if (validarInputs() && validarCheckBox() && validarPasswords()) {
            showAlertSuccess()
        } else {
            showAlertError()
        }
    }

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }

    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }

    document.getElementById("regBtn").addEventListener("click", validaciones)
});