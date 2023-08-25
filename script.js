const inputTask = document.querySelector(".input-task");
const btnAddTask = document.querySelector(".button-add-task");
let geral = document.querySelector(".list-tasks");

let listaItens = [];

function pegaCampo() {
	if(inputTask.value == "") {
		return false;
	} else {
		listaItens.push({
			tarefa: inputTask.value,
			concluida: false
		});
		inputTask.value = "";
		trataInfo();
	}
}

function trataInfo() {
	let novaLi = "";

	listaItens.forEach((item, posicao) => {
	
		novaLi = novaLi + `<li class="task ${item.concluida && "done"}">
		<img class="check" src="${item.concluida ? "img/checkDs.png" : "img/check.png"}" alt="check-na-tarefa" onClick="concluirTarefa(${posicao})">
		<p>${item.tarefa}</p>
		<img class="delete" src="img/delete.png" alt="deletar-tarefa" onClick="deletar(${posicao})">
		</li>`
	})

	geral.innerHTML = novaLi;

}

btnAddTask.addEventListener("click", pegaCampo);

function deletar(posicao) {
	listaItens.splice(posicao, 1);
	trataInfo();
}

function concluirTarefa(posicao) {
	listaItens[posicao].concluida = !listaItens[posicao].concluida;
	trataInfo();
}