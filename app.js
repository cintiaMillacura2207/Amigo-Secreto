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

// funcion para limpiar el input
function limpiarCaja() {  
    document.querySelector('#amigo').value = '';
}


// funcion para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
            
    for (i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
        var li = document.createElement("li");
        li.innerHTML= amigos[i];
        lista.appendChild(li);
    }
    return;
}

// funcion para limpiar la lista de amigos
function limpiarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}