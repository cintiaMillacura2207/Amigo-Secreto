// definir variable de tipo array para almacenar los nombres de los amigos ingresados
let amigos = [];

// funcion para agregar amigos
function agregarAmigo() {
    let entrada = document.getElementById('amigo').value;
    console.log(entrada);

    if (entrada == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(entrada);
        console.log(amigos);
        actualizarListaAmigos();
        limpiarCaja();
    }
    return;
}