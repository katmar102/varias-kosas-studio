import {getLocalStroge, removeLocalStroge} from "../helpers/local-storage.js";
import {generalAlert} from "../helpers/alerts.js";
let usuario = getLocalStorage("usuario");
console.log(usuario)

document.querySelector("#info-usuario").textContent = "USUARIO: " + usuario.nombre
document.querySelector("#btn-salir").addEventListener("click", function() {
  removeLocalStorage("usuario");
  window.location.href = "../index.html";
});

//agrgar condicional