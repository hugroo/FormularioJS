let nombre = document.querySelector('input[name=nombre]');
let apellido = document.querySelector('input[name=apellido]');
let edad = document.querySelector('input[name=edad]');
let email = document.querySelector('input[name=email]');
let contrasenia = document.querySelector('input[name=contraseña]');
let contraseniaRep = document.querySelector('input[name=repContraseña]');
let formulario = document.querySelector('#formulario');

document.querySelector('.exito').style.display = 'none';

//regex email
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

//nombre
nombre.onblur = function(){
    if(this.value.trim().length < 3){
        let errorNombre = document.querySelector('#errorNombre');
        errorNombre.innerHTML = 'El nombre debe tener un largo minimo de 3';
        document.querySelector('.apellido').classList.add('mt-2');
    }
}
nombre.onchange = function(){
    document.querySelector('#errorNombre').innerHTML = '';
    document.querySelector('.apellido').classList.remove('mt-2');
}

//apellido
apellido.onblur = function(){
    if(this.value.trim().length < 3){
        let errorApellido = document.querySelector('#errorApellido');
        if(this.value.trim().length == 0)
            errorApellido.innerHTML = 'El apellido es obligatorio';
        else
            errorApellido.innerHTML = 'El apellido debe tener un largo minimo de 3';
        document.querySelector('.edad').classList.add('mt-2');
    }
}
apellido.onchange = function(){
    document.querySelector('#errorApellido').innerHTML = '';
    document.querySelector('.edad').classList.remove('mt-2');
}

//edad
edad.onblur = function(){
    if(this.value.trim() < 1 || this.value.trim() > 150){
        let errorEdad = document.querySelector('#errorEdad');
        errorEdad.innerHTML = 'Debe ser entre 1 y 150';
        document.querySelector('.email').classList.add('mt-2');
    }
}
edad.onchange = function(){
    document.querySelector('#errorEdad').innerHTML = '';
    document.querySelector('.email').classList.remove('mt-2');
}

//email
email.onblur = function(){
    if(!emailIsValid(this.value.trim())){
        let errorEmail = document.querySelector('#errorEmail');
        errorEmail.innerHTML = 'Ingrese email valido';
        document.querySelector('.contraseña').classList.add('mt-2');
    }
}
email.onchange = function(){
    document.querySelector('#errorEmail').innerHTML = '';
    document.querySelector('.contraseña').classList.remove('mt-2');
}

//email
email.onblur = function(){
    if(!emailIsValid(this.value.trim())){
        let errorEmail = document.querySelector('#errorEmail');
        errorEmail.innerHTML = 'Ingrese email valido';
        document.querySelector('.contraseña').classList.add('mt-2');
    }
}
email.onchange = function(){
    document.querySelector('#errorEmail').innerHTML = '';
    document.querySelector('.contraseña').classList.remove('mt-2');
}

//contraseña
contrasenia.onblur = function(){
    if(this.value.length < 8){
        let errorContraseña = document.querySelector('#errorContraseña');
        errorContraseña.innerHTML = 'Minimo 8 caracteres';
        document.querySelector('.repcontraseña').classList.add('mt-2');
    }
}
contrasenia.onchange = function(){
    document.querySelector('#errorContraseña').innerHTML = '';
    document.querySelector('.repcontraseña').classList.remove('mt-2');
}

//rep contraseña
contraseniaRep.onblur = function(){
    if(this.value.length < 8){
        let errorContraseñaRep = document.querySelector('#errorContraseñaRep');
        errorContraseñaRep.innerHTML = 'Minimo 8 caracteres';
    } else if(this.value != contrasenia.value){
        let errorContraseñaRep = document.querySelector('#errorContraseñaRep');
        errorContraseñaRep.innerHTML = 'Los campos no coinciden';
    }

}
contraseniaRep.onchange = function(){
    document.querySelector('#errorContraseñaRep').innerHTML = '';
}

formulario.onsubmit = function (event) {
    if(contraseniaRep.value != contrasenia.value){
        alert("Las contraseñas no coinciden");
        event.preventDefault();
    } else {
        document.querySelector('.card').remove();
        document.querySelector('.exito').style.display = 'block';
    }
}



