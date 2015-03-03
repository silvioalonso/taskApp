
document.getElementById("btn1").onclick = function() {myFunction()};

function myFunction() {
	if (localStorage.getItem("lista") !== null){
		var arr = localStorage.getItem("lista").value;
	}else{
		var arr = []
	}
	
    arr.push([document.getElementById("txtData").value,document.getElementById("txtTarefa").value,document.getElementById("txtInicio").value,
    	document.getElementById("txtFim").value]);
    localStorage.setItem("lista",arr);
	document.getElementById("result").innerHTML = localStorage.getItem("lista");
}