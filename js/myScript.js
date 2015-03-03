var arr = [];
var Lista = {
	data: "",
	tarefa:"",
	inicio: "",
	fim: ""
}

function atualizaArray(){

	if (localStorage.getItem("lista") !== null){
		var tarefas = localStorage.getItem("lista");
		console.log(tarefas);
		console.log(eval("["+tarefas+"]"));
		arr = eval(tarefas);
	}

}

function carregaLista(){

	atualizaArray();

}

function limpaCampos(){
	var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function myFunction() {

	atualizaArray();

	Lista.data = document.getElementById("txtData").value;
	Lista.tarefa = document.getElementById("txtTarefa").value;
	Lista.inicio = document.getElementById("txtInicio").value;
	Lista.fim = document.getElementById("txtFim").value;

    arr.push(Lista);

    localStorage.setItem("lista", JSON.stringify(arr));

    var resultado = "<ol>";

    for (i in arr){
    	resultado = resultado + "<li>" + arr[i].data + " - " + arr[i].tarefa + " - " + arr[i].inicio + " - " + arr[i].fim + "</li>";
    }
		resultado = resultado + "</ol>";

	document.getElementById("result").innerHTML = resultado;

	limpaCampos();
}
