// Estado
let amigos = [];

// Agrega un amigo desde el input #amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  input.value = "";     // limpia
  input.focus();        // enfoque para el siguiente
}

// Pinta la lista en #listaAmigos usando <li>
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpia para evitar duplicados

  // Con bucle for como pediste
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Sortea un amigo y lo muestra en la lista #resultado
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";                     // limpia resultado anterior
  resultado.innerHTML = `<li><strong>${amigoSorteado}</strong></li>`;
}


