const usuarios = [
    {
        nombre: "Juan Pérez",
        telefono: "3115551234",
        correo: "juan@ejemplo.com",
        contrasena: "123456789",
        id: "id1234567890"
    },
    {
        nombre: "María Gómez",
        telefono: "3115555678",
        correo: "maria@ejemplo.com",
        contrasena: "1234567890",
        id: "id0987654321"
    }
];


export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
   let auth = usuarios.some((usuario)=> correo == usuario.correo && contrasena == usuario.contrasena);
   return auth;
}