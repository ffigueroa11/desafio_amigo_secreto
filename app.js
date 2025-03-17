// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){

    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Crear una copia del array de amigos para el sorteo
    let amigosSorteo = [...amigos];
    let asignaciones = [];

    amigos.forEach((amigo) => {
        let indiceAleatorio;
        let amigoAsignado;

        do {
            indiceAleatorio = Math.floor(Math.random() * amigosSorteo.length);
            amigoAsignado = amigosSorteo[indiceAleatorio];
        } while (amigo === amigoAsignado);

        asignaciones.push({ amigo, amigoAsignado });
        amigosSorteo.splice(indiceAleatorio, 1);
    });

    // Mostrar los resultados del sorteo
    asignaciones.forEach((asignacion) => {
        const li = document.createElement('li');
        li.textContent = `${asignacion.amigo} le regala a ${asignacion.amigoAsignado}`;
        li.className = 'result-item';
        resultado.appendChild(li);

        // Mostrar el amigo sorteado en una alerta
        alert(`${asignacion.amigo} le regala a ${asignacion.amigoAsignado}`);
    });
}

