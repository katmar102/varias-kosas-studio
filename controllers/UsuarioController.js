import {buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";
import { setLocalStorage } from "../helpers/local-storage.js";


function iniciarSesion() {
    let correo = document.querySelector("#correo").value
    let contrasena = document.querySelector("#clave").value
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        setLocalStorage("usuario", auth)
        generalAlert("¡Bienvenido!", "Has iniciado sesión correctamente.", "success");
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 2000)
        return
    }
    generalAlert("Error de inicio de sesión", "Usuario y/o contraseña incorrectos", "error");
    setTimeout(() => {
        return window.location.href = "/index.html"
    }, 1000)
}

document.querySelector("#btn-login").addEventListener("click", iniciarSesion)