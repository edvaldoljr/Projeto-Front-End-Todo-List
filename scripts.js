const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
}

button.addEventListener("click", adicionarNovaTarefa);
