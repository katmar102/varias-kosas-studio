import {buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";


function iniciarSesion() {
    let correo = document.querySelector("#correo").value
    let contrasena = document.querySelector("#clave").value
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        generalAlert("¡Bienvenido!", "Has iniciado sesión correctamente.", "success");
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 2000)
    }
    generalAlert("Error de inicio de sesión", "Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.", "error");
    setTimeout(() => {
        return window.location.href = "/index.html"
    }, 1000)
}

document.querySelector("#btn-login").addEventListener("click", iniciarSesion)