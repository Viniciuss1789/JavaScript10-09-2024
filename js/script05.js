const pessoa = {fname:"Vinicius", lname:"Silva", age:19}; 

let dadosCompletos = "";
for (let contadora in pessoa) {
  dadosCompletos += pessoa[contadora] + " ";
}

document.getElementById("pessoa").innerHTML = dadosCompletos;