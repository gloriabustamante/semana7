function validarPasswords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 != password2) {
        return false;
    }
    else {
        return true;
    }
}
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validacionCheckBox(){
    let terminos = document.querySelector("#terminos");

    if(terminos.checked){
        console.log('true')
        return true;
    } else {
        console.log('false')
        return false;
    }
}