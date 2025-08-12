// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres de los amigos
let amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este amigo ya esta en la lista.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

//Función para mostrar la lista de amigos en el UL
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpia la lista

    amigos.forEach((amigo)=> {
        const li = document.createElement ("li");
        li.textContent = amigo;
        lista.appendChild(li);
    
    }
    );

}

//Funcion para sortear amigo

function sortearAmigo() {
    const  resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML=`<li>🎉 ¡Tu amigo secreto es: ${amigoSorteado}! 🎉</li>`;

}